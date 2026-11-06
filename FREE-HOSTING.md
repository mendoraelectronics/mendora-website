# Free hosting for mendoraelectronics.com

Keep the domain and Zoho email at Hostinger. You only change the **website** DNS records.
Before you start: hPanel → Domains → mendoraelectronics.com → **DNS / Nameservers** → screenshot every record.

---

## Option A: GitHub Pages (free, edit on GitHub)
Pages is free only for **public** repos on a free GitHub account. The site has no secrets, so a public repo is fine.

1. github.com → **New repository** → name `mendora-website` → **Public** → Create.
2. Click **uploading an existing file**, drag in everything *inside* the `site` folder, then **Commit**. `index.html` must be at the top level.
3. Repo → **Settings → Pages**:
   - Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
   - Custom domain: `mendoraelectronics.com` → Save. (GitHub adds a `CNAME` file to the repo.)
4. **Hostinger DNS:** delete any existing `A`/`AAAA` records for `@` and any `CNAME` for `www`, then add:

   | Type | Name | Points to |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<your-github-username>.github.io` |

   Before saving, check these values against GitHub's current docs ("Managing a custom domain for your GitHub Pages site").
5. Wait 10–60 minutes, go back to Settings → Pages, and tick **Enforce HTTPS** once it becomes available.
6. Recommended: Settings → Pages → **Verify** the domain. This stops anyone else claiming it.

Updates: edit a file on GitHub → Commit → live in about 1 minute.
Note: `.htaccess` does nothing on GitHub Pages and is harmless. HTTPS is handled by the "Enforce HTTPS" setting.

---

## Option B: Netlify (free, drag-and-drop, no GitHub needed)
1. Go to app.netlify.com → sign up → **Add new site → Deploy manually** → drag the `site` folder in.
2. **Domain management → Add a domain** → `mendoraelectronics.com`.
3. Netlify shows the exact DNS records to add. Add them in Hostinger DNS and delete any conflicting old `A`/`CNAME` records for `@` and `www`.
4. HTTPS is issued automatically.

Updates: drag the folder in again, or connect the GitHub repo for auto-deploy.

---

## Never touch (email)
`MX`, `TXT` (SPF `v=spf1…`, verification), `DKIM` (`zmail._domainkey` or similar) and `DMARC` (`_dmarc`) records stay exactly as they are. Keep the Hostinger nameservers.

## Check
- https://mendoraelectronics.com and https://www.mendoraelectronics.com both load the site, with a padlock.
- Send and receive a test email on your Zoho address.

## Paid Hostinger plan?
If you already pay for Hostinger web hosting, hosting there costs nothing extra. See GITHUB-HOSTINGER.md.
