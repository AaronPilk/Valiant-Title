# Valiant Title — Website

Modern, Apple-inspired multi-page marketing site for **Valiant Title** (a CLT Buyers company).
Static HTML/CSS/JS — no build step. Deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Pages
- `index.html` — Home
- `services.html` — Services (residential, commercial, closing, consumers)
- `home-owners.html` — Home Owners (buyer/seller + title-insurance FAQ)
- `order-title.html` — Order Title form
- `contact.html` — Contact

## Structure
```
index.html services.html home-owners.html order-title.html contact.html
styles.css        # single stylesheet, brand tokens in :root
main.js           # mobile menu, footer year, scroll reveal
assets/           # logo, favicon, photos
robots.txt sitemap.xml _headers
```

## ⚠️ Before you launch — replace these placeholders
- **Logo:** `assets/valiant-logo.png` is a placeholder lockup. Drop in the final Valiant logo (same filename, transparent PNG or SVG).
- **Phone:** `704-555-0100` (search/replace across all pages, incl. `tel:+17045550100`).
- **Emails:** `info@`, `orders@`, `finals@valianttitle.com` — confirm these mailboxes exist.
- **Domain:** update `valianttitle.com` in canonical/OG tags and `sitemap.xml` if different.
- **Forms:** currently use `mailto:` fallback. Wire to a backend (Formspree, Basin, or GHL webhook) for reliable delivery.
- **Brand colors:** tune `--brand-primary` / `--brand-accent` in `styles.css` `:root` to match the final logo.
- **OG images:** add `assets/og-*.jpg` (1200×630) for link previews.

## Brand tokens
Edit the `:root` block at the top of `styles.css`. Navy `#0B2E52` + sky `#B5CFE6` + royal-blue accent `#2f6db0`.
