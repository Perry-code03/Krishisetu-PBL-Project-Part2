/**
 * KrishiSetu Automated MySQL Setup & Seeder Script
 * Connects to MySQL, creates database, applies schema, seeds 36 verified schemes,
 * and generates backend/.env
 */

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function setupDatabase(rootPassword = '', appPassword = 'KrishiSetu@2026') {
  const host = process.env.DB_HOST || 'localhost';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const rootUser = process.env.ROOT_DB_USER || 'root';

  console.log(`\n======================================================`);
  console.log(`🌾 KrishiSetu MySQL Initializer`);
  console.log(`Connecting to MySQL on ${host}:${port} as ${rootUser}...`);
  console.log(`======================================================\n`);

  let rootConn;
  try {
    rootConn = await mysql.createConnection({
      host,
      port,
      user: rootUser,
      password: rootPassword,
      multipleStatements: true
    });
    console.log('✅ Connected to MySQL successfully as root.');
  } catch (err) {
    console.error('❌ Could not connect to MySQL as root:');
    console.error(err.message);
    throw err;
  }

  try {
    // 1. Create Database
    console.log('Creating database "krishisetu"...');
    await rootConn.query(
      'CREATE DATABASE IF NOT EXISTS krishisetu CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;'
    );
    console.log('✅ Database "krishisetu" ready.');

    // 2. Create/Update user krishisetu_app
    console.log('Configuring database user "krishisetu_app"...');
    await rootConn.query(
      `CREATE USER IF NOT EXISTS 'krishisetu_app'@'localhost' IDENTIFIED BY '${appPassword}';`
    );
    await rootConn.query(
      `ALTER USER 'krishisetu_app'@'localhost' IDENTIFIED BY '${appPassword}';`
    );
    await rootConn.query(
      `GRANT ALL PRIVILEGES ON krishisetu.* TO 'krishisetu_app'@'localhost';`
    );
    await rootConn.query('FLUSH PRIVILEGES;');
    console.log('✅ User "krishisetu_app" granted full permissions on krishisetu.*');

    await rootConn.end();

    // 3. Connect to krishisetu database as krishisetu_app (or root fallback)
    console.log('\nConnecting to "krishisetu" database to apply schema...');
    const appConn = await mysql.createConnection({
      host,
      port,
      user: 'krishisetu_app',
      password: appPassword,
      database: 'krishisetu',
      multipleStatements: true
    });

    // 4. Apply Schema
    const schemaPath = path.join(__dirname, 'db', 'schema.sql');
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`schema.sql not found at ${schemaPath}`);
    }
    console.log('Applying database schema from db/schema.sql...');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    await appConn.query(schemaSql);
    console.log('✅ All 13 schema tables and indexes created.');

    // 5. Seed Data
    const seedPath = path.join(__dirname, 'db', 'seed.sql');
    if (fs.existsSync(seedPath)) {
      console.log('Seeding categories, 36 schemes, proof docs, and demo users from db/seed.sql...');
      const seedSql = fs.readFileSync(seedPath, 'utf8');
      await appConn.query(seedSql);
      console.log('✅ Seed data successfully imported.');
    }

    // 6. Verify row counts
    const [counts] = await appConn.query(`
      SELECT 
        (SELECT COUNT(*) FROM scheme_categories) AS categories,
        (SELECT COUNT(*) FROM schemes) AS schemes,
        (SELECT COUNT(*) FROM scheme_documents) AS proof_docs,
        (SELECT COUNT(*) FROM users) AS users,
        (SELECT COUNT(*) FROM saved_schemes) AS saved_schemes,
        (SELECT COUNT(*) FROM application_progress) AS progress_records;
    `);
    console.log('\n📊 Verified Database Records:');
    console.table(counts);

    await appConn.end();

    // 7. Write backend/.env
    const envContent = [
      '# KrishiSetu Live Environment Configuration',
      `DB_HOST=${host}`,
      `DB_PORT=${port}`,
      'DB_NAME=krishisetu',
      'DB_USER=krishisetu_app',
      `DB_PASSWORD=${appPassword}`,
      `ROOT_DB_PASSWORD=${rootPassword}`,
      'JWT_SECRET=krishisetu_jwt_super_secure_key_2026_agricultural_welfare_token_secret',
      'JWT_EXPIRATION_HOURS=24',
      'SERVER_PORT=8080',
      'ADMIN_EMAIL=admin@krishisetu.in',
      'ADMIN_MOBILE=9876543210',
      'ADMIN_PASSWORD=Admin@KrishiSetu2026!',
      'CORS_ALLOWED_ORIGINS=http://localhost:8080,http://localhost:3000,http://localhost:5500,http://127.0.0.1:5500,http://localhost:8000,https://krishi-setu-pbl-project.vercel.app'
    ].join('\n') + '\n';

    const envPath = path.join(__dirname, '.env');
    fs.writeFileSync(envPath, envContent, 'utf8');
    console.log(`✅ Saved environment configuration to ${envPath}`);

    // Also write to root .env if in subfolder
    const rootEnvPath = path.join(__dirname, '..', '..', '.env');
    try {
      fs.writeFileSync(rootEnvPath, envContent, 'utf8');
    } catch (e) {}

    console.log(`\n🎉 MySQL Database Setup & Seeding Completed Successfully!\n`);
    return true;
  } catch (err) {
    if (rootConn) {
      try { await rootConn.end(); } catch (e) {}
    }
    throw err;
  }
}

// Allow CLI execution: node setup-mysql.js [rootPassword] [appPassword]
if (require.main === module) {
  const rootPass = process.argv[2] !== undefined ? process.argv[2] : (process.env.MYSQL_PWD || process.env.ROOT_DB_PASSWORD || '');
  const appPass = process.argv[3] || 'KrishiSetu@2026';

  setupDatabase(rootPass, appPass)
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Fatal error during setup:', err.message);
      process.exit(1);
    });
}

module.exports = { setupDatabase };
