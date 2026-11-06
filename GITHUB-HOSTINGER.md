# GitHub → Hostinger → mendoraelectronics.com

## 1. Put the site on GitHub (about 5 min, no coding)
1. Sign in at github.com → **New repository**.
   - Name: `mendora-website`
   - Visibility: **Private** (recommended) or Public
   - Don't add a README
2. On the empty repo page, click **uploading an existing file**.
3. Unzip the download and drag in everything *inside* the `site` folder (index.html, styles.css, main.js, config.js, robots.txt, sitemap.xml, assets/, the .md files).
   - `.htaccess` is hidden. If it doesn't upload, create it later: **Add file → Create new file**, name it `.htaccess`, and paste in its contents.
4. **Commit changes**.
5. Check that `index.html` sits at the top level of the repo, not inside a `site/` folder.

## 2. Connect the repo to Hostinger
hPanel → **Websites** → mendoraelectronics.com → **Manage** → **Advanced → GIT**.

**Private repo:**
1. On the GIT page, copy the **SSH key** Hostinger shows.
2. On GitHub: repo → **Settings → Deploy keys → Add deploy key**. Paste the key and leave write access unticked.
3. Back in hPanel → **Create a New Repository**:
   - Repository: `git@github.com:<your-username>/mendora-website.git`
   - Branch: `main`
   - Directory: leave **empty** (this deploys into `public_html`)

**Public repo:** use `https://github.com/<your-username>/mendora-website.git`. No key is needed.

Hostinger needs `public_html` to be empty. If it isn't, first delete its contents in File Manager (`default.php` and similar).

Click **Create**, then **Deploy**. The files appear in `public_html`.

## 3. Auto-deploy on every change
1. hPanel GIT page → **Auto Deployment** → copy the **Webhook URL**.
2. GitHub repo → **Settings → Webhooks → Add webhook**:
   - Payload URL: paste the webhook URL
   - Content type: `application/json`
   - Event: **Just the push event** → **Add webhook**

From now on, every edit committed on GitHub goes live within about a minute.

## 4. Domain and HTTPS
- The domain is already on Hostinger nameservers, and the website is attached to mendoraelectronics.com in hPanel, so you don't need to change any DNS.
- hPanel → **Security → SSL** → make sure the free SSL is **Active**.
- **Don't edit the Zoho MX, SPF, DKIM or DMARC records.**
- Test https://mendoraelectronics.com in a private window, then send a test email to confirm mail still works.

## Editing later
On GitHub, open a file → pencil icon → edit → **Commit**. Hostinger auto-deploys the change.
- Contact email / form: `config.js`
- Copy: `index.html`
- Colours: top of `styles.css`
