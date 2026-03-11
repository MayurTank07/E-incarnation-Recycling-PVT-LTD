// Centralized API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api',
  RECAPTCHA_SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeREXwsAAAAAI7VxaAS-qxMnuXnAzMXpLPYEBtW',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://www.e-incarnation.com'
};

// Remove /api suffix to get base server URL
export const getServerURL = () => API_CONFIG.BASE_URL.replace('/api', '');

export default API_CONFIG;
