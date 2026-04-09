# E-Incarnation Recycling — Frontend

Production website for **E-Incarnation Recycling Pvt. Ltd.**, Mumbai's leading e-waste recycling and EPR compliance company.

Live site: [www.e-incarnation.com](https://www.e-incarnation.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Deployment | Vercel |
| Backend API | Render (Node/Express) |

---

## Getting Started

### 1. Prerequisites

- Node.js 18+
- npm 9+

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Copy the example env file and configure it:

```bash
cp .env.example .env
```

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `https://...onrender.com/api` |
| `VITE_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 site key | `6Le...` |
| `VITE_SITE_URL` | Canonical site URL for SEO | `https://www.e-incarnation.com` |

### 4. Run Locally

```bash
npm run dev
```

Opens at `http://localhost:5173`. The app connects to the live Render backend by default.

### 5. Production Build

```bash
npm run build
```

Output is in the `dist/` folder.

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/          # Navbar, Button, Card, Modal, Toast
│   ├── forms/           # Input, Textarea
│   ├── admin/           # Admin panel components
│   ├── SEO.jsx          # Per-page meta tags (title, OG, Twitter)
│   ├── StructuredData.jsx  # JSON-LD schemas (Org, LocalBusiness, FAQ)
│   ├── Footer.jsx
│   └── HeroMain.jsx
├── pages/               # Route-level page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Events.jsx
│   ├── EPR.jsx
│   ├── Contact.jsx
│   ├── TermsOfService.jsx
│   ├── PrivacyPolicy.jsx
│   ├── AdminLogin.jsx
│   └── AdminDashboard.jsx
├── hooks/               # Custom React hooks (data fetching)
├── config/
│   └── api.config.js    # API base URL + reCAPTCHA key
├── utils/               # Form validation schemas
├── assets/              # Images, fonts
├── App.jsx              # Router + lazy-loaded routes
└── main.jsx             # Entry point
public/
├── sitemap.xml          # XML sitemap for all routes
├── robots.txt           # Crawler rules
├── favicon.png
└── og-image.jpg         # Default Open Graph image
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/events` | Events |
| `/epr` | EPR Compliance |
| `/contact` | Contact |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/adminlogin` | Admin Login |
| `/admin/dashboard` | Admin Dashboard |

---

## Deployment (Vercel)

The project includes a `vercel.json` with SPA rewrites and security headers.

### Deploy via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Deploy via Vercel Dashboard

1. Import the GitHub repo: `MayurTank07/E-incarnation-Recycling-PVT-LTD`
2. Set environment variables in the Vercel dashboard:
   - `VITE_API_URL` → `https://e-incarnation-recycling-pvt-ltd-backend.onrender.com/api`
   - `VITE_RECAPTCHA_SITE_KEY` → your reCAPTCHA site key
   - `VITE_SITE_URL` → `https://www.e-incarnation.com`
3. Build command: `npm run build`
4. Output directory: `dist`

---

## SEO Features

- Per-page `<title>`, `<meta description>`, `<meta keywords>`
- Open Graph + Twitter Card tags
- JSON-LD structured data: `Organization`, `LocalBusiness` (RecyclingCenter), `FAQPage`, `BreadcrumbList`, `Service`, `Event`
- Geo tags targeting Mumbai, Maharashtra
- `sitemap.xml` covering all public routes
- `robots.txt` with admin paths blocked

---

## Related Repositories

- **Backend API:** [E-incarnation-Recycling-PVT-LTD-Backend](https://github.com/MayurTank07/E-incarnation-Recycling-PVT-LTD-Backend)

---

## License

Copyright © 2026 E-Incarnation Recycling Pvt. Ltd. All rights reserved.
