# Mendora Electronics — company website

Static, dependency-free site. No build step, server or database.

```
site/
  index.html      page content (all copy lives here)
  styles.css      design tokens at the top (:root) — swap brand colours here
  config.js       contact email, stage label, form endpoint, feature flags
  main.js         mobile menu, config wiring, truthful form states
  assets/         logo, favicon (og-image.png still needed — see ASSETS.md)
  robots.txt      PREVIEW version (blocks indexing)
  sitemap.xml
```

## Preview locally
```
cd site
python3 -m http.server 8080     # or: npx serve .
```
Open http://localhost:8080.

## Configure
Edit `config.js` only:
- `stage`, `showMilestones`, `showFaq` — founder-confirmed status.
- `contactEmail` — shown in Contact + footer once set.
- `formEndpoint` + `privacyUrl` — the form sends **only when both are set**. Otherwise it shows "Not sent" and nothing is delivered or stored.
- `pitchDeckUrl` — shows a deck button once an approved public deck exists.

### Connecting the form (example: Formspree / Web3Forms)
1. Create a form on the provider, set the receiving address to the approved Mendora inbox, enable its spam protection.
2. Paste the endpoint URL into `formEndpoint`. The form posts `name, organization, email, inquiry_type, message` as FormData; `website` is a honeypot.
3. Publish a privacy notice page and set `privacyUrl`.
No credentials go in front-end code.

## Production status
This folder is already set up for production (indexable, canonical URL set, robots allow). For Hostinger, follow **HOSTINGER.md**.

## Production checklist (done)
1. In `index.html`: delete the `noindex` meta, uncomment the canonical link, set `og:image` to the absolute URL `https://mendoraelectronics.com/assets/og-image.png`.
2. Replace `robots.txt` with the production version given in its comments.
3. Test at 375 / 768 / 1280 px; tab through the page; check the menu closes with Esc.

## Deploying to mendoraelectronics.com
Upload the contents of `site/` as the web root on any static host (Hostinger web hosting, Netlify, Cloudflare Pages, Vercel, GitHub Pages).

Do this before touching DNS:
1. Deploy to the host's temporary preview URL and test.
2. Export/screenshot the full current DNS zone in Hostinger.
3. Follow the chosen host's current custom-domain instructions — do not guess IP addresses.
4. Change **only** the web records the host asks for (root `A`/`AAAA` or `ALIAS`, and `www` `CNAME`). Remove conflicting old A/AAAA/CNAME records for the same names.
5. **Keep** Zoho MX, SPF (TXT), DKIM, DMARC and any verification TXT records untouched.
6. Keep the current nameservers (ns1/ns2.dns-parking.com) unless there's a full migration plan.
7. Enable HTTPS on the host; pick one canonical URL (root or www) and redirect the other.
8. After propagation, verify the site loads over HTTPS and send/receive a test email to confirm Zoho still works.

Host-specific steps will be added once the hosting provider is chosen.

## What works vs. what's disabled
- Working: navigation, mobile menu (keyboard + Esc), FAQ, form validation, reduced-motion support.
- Disabled until configured: form submission, contact email, pitch deck, privacy link.
- No analytics or tracking scripts.
