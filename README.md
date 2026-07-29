# saumyagoyal.me

Personal + speaker website for **Saumya Goyal** — Senior Machine Learning
Engineer & conference speaker. Dark, bold, motion-forward. Built with Next.js.

- **Pages:** Home, About, Speaking (flagship), Writing (→ Medium), Book
  (Google Calendar).
- **Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Motion ·
  deployed on Vercel.

---

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Node 18.18+ (LTS recommended).

---

## Editing your content (no design knowledge needed)

Everything personal lives in **`src/content/`** — plain TypeScript files. Edit
these; the pages update automatically.

| File | What it controls |
|------|------------------|
| `siteConfig.ts` | Name, role, tagline, **email**, **domain**, **calendar links**, social URLs |
| `talks.ts` | Your talks & workshops (title, event, date, abstract, tags, video/slides links) |
| `topics.ts` | The themes you speak on + the scrolling marquee words |
| `testimonials.ts` | Quotes from organizers/audiences (**replace the placeholders**) |
| `articles.ts` | Featured writing (links out to Medium / Datamics) |
| `photos.ts` | Speaking gallery + portrait image paths |

### Add your photos
Drop image files into `public/images/`:
- **Portrait** → `public/images/hero/portrait.jpg` (already in place).
- **On-stage / gallery** → `public/images/gallery/…`, then set each `src` in
  `src/content/photos.ts`. Any gallery entry with an empty `src` shows a tasteful
  "photo coming soon" tile, so the layout always looks intentional.

### Add real testimonials
Open `src/content/testimonials.ts` and replace the three placeholders with real
quotes (e.g. pulled from your LinkedIn posts/comments). Attribute each with a
name + role. The grid adapts to any number (2–6 looks best).

---

## Booking / Google Calendar setup

The Book page embeds your Google Calendar **appointment schedule** and also links
to it. Two URLs live in `src/content/siteConfig.ts`:

- `calendarUrl` — your share link (`https://calendar.app.google/…`). Used for the
  "open in a new tab" fallback.
- `calendarEmbedUrl` — the **embeddable** version (ends in `?gv=true`). Used for
  the on-page iframe. Both are already set to your current schedule.

**If you ever change your schedule**, regenerate the embed URL:
1. Google Calendar → **Create / open your appointment schedule**.
2. Click **Share** → **Embed** → copy the `src="…"` URL from the snippet.
3. Paste it into `calendarEmbedUrl`, and paste the short share link into
   `calendarUrl`.

> Note: Google blocks embedding the plain share link, but the `?gv=true` embed
> URL is allowed — that's why we keep both.

---

## Theming

The whole look is driven by tokens at the top of `src/app/globals.css`.
Swap one line to re-theme:

```css
--color-accent: #22e3ff;   /* electric cyan — try #c6ff3a for lime */
```

Fonts: **Bricolage Grotesque** (display), **Hanken Grotesk** (body),
**JetBrains Mono** (labels) — loaded via `next/font` in `src/app/layout.tsx`.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. [vercel.com](https://vercel.com) → **New Project** → import the repo.
   Framework auto-detects as Next.js; no config needed. Click **Deploy**.
3. **Custom domain:** Project → **Settings → Domains** → add `saumyagoyal.me`
   (and `www.saumyagoyal.me`). Point your registrar's DNS at Vercel:
   - `A` record `@` → `76.76.21.21`, **or** the `CNAME`/nameservers Vercel shows.
4. Vercel provisions HTTPS automatically. Every `git push` redeploys.

---

## Project structure

```
src/
  app/                 # routes: /, /about, /speaking, /writing, /book
                       # + sitemap, robots, icon, opengraph-image
  components/
    layout/            # Nav, Footer
    ui/                # Button, Section, Reveal, Marquee, Badge, Container…
    home/ talks/ speaking/ book/
  content/             # ← edit your info here
  lib/                 # motion variants, helpers
public/images/         # your photos
```

---

## Before launch — checklist

- [x] Domain, email, calendar links wired up
- [x] Portrait photo
- [ ] Replace placeholder **testimonials** with real quotes
- [ ] Add **on-stage / gallery photos**
- [ ] Confirm talk abstracts read the way you want; add recording/slide links
- [ ] (Optional) Add more Medium articles to `articles.ts`
- [ ] Deploy to Vercel + connect `saumyagoyal.me`
