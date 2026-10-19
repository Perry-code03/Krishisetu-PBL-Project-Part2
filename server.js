// KrishiSetu Full-Stack Web & API Server (Node.js + MySQL Backend)
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Determine web root
let webRoot = __dirname;

// Try loading API handler
let apiHandler = null;
const apiPath = path.join(webRoot, 'backend', 'api.js');
if (fs.existsSync(apiPath)) {
  try {
    apiHandler = require(apiPath);
  } catch (e) {
    console.warn('[KrishiSetu] Notice loading API handler:', e.message);
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

function createServer(port) {
  const server = http.createServer(async (req, res) => {
    // Enable CORS for development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // If API request, forward to API router
    if (pathname.startsWith('/api/')) {
      if (apiHandler && typeof apiHandler.handleApiRequest === 'function') {
        try {
          const handled = await apiHandler.handleApiRequest(req, res, pathname, parsedUrl.searchParams);
          if (handled) return;
        } catch (apiErr) {
          console.error('[KrishiSetu API Router Error]', apiErr);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: { message: 'Internal server error while processing API request', details: apiErr.message }
          }));
          return;
        }
      }

      res.writeHead(503, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        offline: true,
        message: 'KrishiSetu Backend is initializing or offline. Running on fallback.'
      }));
      return;
    }

    // Default to index.html
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    let filePath = path.join(webRoot, pathname);

    // Security: prevent directory traversal
    if (!filePath.startsWith(webRoot)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }

    // If path is a directory, check for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          const fallbackPath = path.join(webRoot, 'index.html');
          if (fs.existsSync(fallbackPath)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fs.readFileSync(fallbackPath));
            return;
          }
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found: ' + pathname);
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error: ' + err.message);
        }
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = port === 8080 ? 3000 : (port === 3000 ? 8000 : port + 1);
      console.warn(`[KrishiSetu] Port ${port} is in use, trying port ${nextPort}...`);
      createServer(nextPort);
    } else {
      console.error('[KrishiSetu] Server error:', err);
    }
  });

  server.listen(port, async () => {
    console.log(`\n======================================================`);
    console.log(`🌾 KrishiSetu Full-Stack Platform is running!`);
    console.log(`👉 Web Portal: http://localhost:${port}/`);
    console.log(`👉 REST API:   http://localhost:${port}/api/schemes`);
    console.log(`👉 API Health: http://localhost:${port}/api/health`);
    console.log(`👉 Serving:    ${webRoot}`);

    if (apiHandler && typeof apiHandler.checkDatabaseConnection === 'function') {
      const dbOk = await apiHandler.checkDatabaseConnection();
      if (dbOk) {
        console.log(`✅ MySQL Database: Connected & Active`);
      } else {
        console.log(`⚠️ MySQL Database: Not yet connected. Run database setup tool.`);
      }
    }
    console.log(`======================================================\n`);
  });

  return server;
}

const defaultPort = parseInt(process.env.PORT, 10) || 8080;
createServer(defaultPort);
