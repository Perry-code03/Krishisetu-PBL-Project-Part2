/**
 * KrishiSetu - Global Application Configuration
 */
const KrishiConfig = {
  // REST API endpoint (auto-detects current host/port, fallback to localhost:8080/api)
  apiBaseUrl: window.KRISHI_API_URL || (typeof window !== 'undefined' && window.location.origin && window.location.origin.startsWith('http') ? window.location.origin + '/api' : 'http://localhost:8080/api'),

  // Fallback mode when Spring Boot is offline (e.g. static host on Vercel)
  enableLocalFallback: true,

  // Storage keys
  tokenKey: 'krishi_auth_token',
  userKey: 'krishi_auth_user',
  langKey: 'krishi_lang',
  savedSchemesKey: 'krishi_saved_schemes',
  progressKey: 'krishi_app_progress',
  chatSessionKey: 'krishi_chat_session_id',
  chatHistoryKey: 'krishi_ai_chat_history'
};

if (typeof window !== 'undefined') {
  window.KrishiConfig = KrishiConfig;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KrishiConfig;
}
