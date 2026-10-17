# osamarizwan.com

Portfolio of Osama Rizwan, Full Stack Engineer. Next.js 16 (App Router), React 19, Tailwind CSS v4. Fully static page plus one Server Action for the contact form.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Node 20.9+ (see `.nvmrc`).

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the build (`output: "standalone"` is set for Docker; on Vercel this is ignored) |
| `npm run lint` | ESLint, zero warnings allowed |

## Environment variables

| Name | Required | Notes |
|---|---|---|
| `GMAIL_USER` | yes (prod) | Gmail account that sends contact emails |
| `GMAIL_APP_PASSWORD` | yes (prod) | Google **App password** (16 chars). In dev, if missing, messages are logged instead of sent |
| `CONTACT_EMAIL_TO` | no | Inbox for enquiries; defaults to `GMAIL_USER` |
| `NEXT_PUBLIC_SITE_URL` | no | Canonical URL; defaults to `https://www.osamarizwan.com` |

`.env.local` overrides `.env`. Don't leave placeholder values in `.env.local`.

## Editing content

All copy lives in `src/content/*.js`; components contain no hard-coded text.

| File | Sections |
|---|---|
| `site.js` | Identity, links, nav, hero, marquee, spec strip, FAQ, contact topics |
| `work.js` | SmartBundle, client tiles, lab tiles and lab rows |
| `services.js` | Services console |
| `experience.js` | Roles, education |
| `stack.js` | Stack tabs |
| `reviews.js` | Rating card, reviews (verbatim), marquee fragments |

Still to add: `public/Osama-Rizwan-CV.pdf` (the "Download résumé" button appears automatically), real SmartBundle screenshots, the end date of the current role, and the full text of the truncated Fiverr review (`reviews.js`, `r6`).

## Structure

```
src/
  app/          layout (fonts, metadata, JSON-LD), page, globals.css (tokens + component styles),
                sitemap, robots, manifest, icon, opengraph-image, not-found, error, global-error
  actions/      contact.js (Server Action, nodemailer)
  components/
    layout/     SiteHeader, MobileNav (<dialog>), SiteFooter
    sections/   Hero, HeroScene, Marquee, SpecStrip, Work, Services(+Console, Diagrams),
                Experience, Lab, Stack(+Tabs), Reviews(+Slider), Faq, Contact(+Form)
    ui/         Reveal, SectionLabel, Pills, icons
  content/      site copy
  lib/          contact validation, tablist keyboard handler
```

Client components are limited to the interactive islands: `HeroScene`, `ServicesConsole`, `StackTabs`, `ReviewsSlider`, `MobileNav`, `ContactForm`, `Reveal`.

## Motion

CSS animates only `transform`/`opacity` (plus colours/borders on hover). Loops (marquee, orbit, glow, diagrams) are CSS/SVG only. The hero tilt runs only on fine pointers and uses `requestAnimationFrame` with no React re-renders. Everything stops under `prefers-reduced-motion: reduce`.

## Deploy (Vercel)

1. Add `osamarizwan.com` and `www.osamarizwan.com` in Settings → Domains; make `www` primary and redirect the apex.
2. DNS: apex `A 76.76.21.21`, `www CNAME cname.vercel-dns.com` (or the values Vercel shows).
3. Set the environment variables above for Production and Preview.
4. Redeploy and send a test message from the live contact form.
