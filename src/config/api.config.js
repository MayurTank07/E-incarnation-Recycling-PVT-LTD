// Centralized API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'https://e-incarnation-recycling-pvt-ltd-backend.onrender.com/api',
  RECAPTCHA_SITE_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeREXwsAAAAAI7VxaAS-qxMnuXnAzMXpLPYEBtW',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://www.e-incarnation.com'
};

// Remove /api suffix to get base server URL
export const getServerURL = () => API_CONFIG.BASE_URL.replace('/api', '');

export default API_CONFIG;
