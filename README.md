# Renew PAC - Pelvic Activation Clinic

A modern Vite + React rebuild of the Renew Pelvic Activation Clinic website,
built for deployment on Netlify and optimized for Google Ads landing-page use.

## Stack

- Vite 5
- React 18 + React Router
- Framer Motion (subtle entrance + scroll animations)
- Pure CSS (no Tailwind) — modular per component
- Deployed to Netlify (`netlify.toml` + `public/_redirects` configured for SPA routing)

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → ./dist
npm run preview  # preview production build
```

## Pages

- `/` Home (Hero, Benefits bar, HIFEM intro, Candidate, Treatment Plans)
- `/candidate` Am I a Candidate
- `/treatment` Treatment
- `/about` About Us
- `/research` Research
- `/faq` FAQ
- `/contact` Book an Appointment (primary booking / lead capture page —
  phone, email, address, and Netlify form with thank-you redirect)
- `/book` Permanent redirect → `/contact` (kept so existing ad creatives
  and internal CTAs continue to work)

## Clinic contact

Phone: **(905) 201-8005**
