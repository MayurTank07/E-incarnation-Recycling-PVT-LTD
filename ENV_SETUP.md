# Environment Variables Setup

## Production (Vercel)

Set these environment variables in Vercel dashboard:

```
VITE_API_URL=https://e-incarnation-recycling-pvt-ltd-backend.onrender.com/api
VITE_RECAPTCHA_SITE_KEY=6LeREXwsAAAAAI7VxaAS-qxMnuXnAzMXpLPYEBtW
VITE_SITE_URL=https://www.e-incarnation.com
```

## Local Development

Create a `.env.local` file in the project root:

```bash
# Local Development API Configuration
VITE_API_URL=http://localhost:5001/api

# Google reCAPTCHA v2
VITE_RECAPTCHA_SITE_KEY=6LeREXwsAAAAAI7VxaAS-qxMnuXnAzMXpLPYEBtW

# Site URL
VITE_SITE_URL=http://localhost:5173
```

## Notes

- `.env.local` is gitignored and used for local development only
- Production uses environment variables set in Vercel
- If no environment variables are set, the app defaults to production backend URL
- The API config file (`src/config/api.config.js`) handles fallback values
