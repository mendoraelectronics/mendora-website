# Publish mendoraelectronics.com on Hostinger

## Before you start
- You need a **Hostinger web hosting plan** (Single, Premium, Business or Cloud). A domain on its own can't host files.
- Your domain already uses Hostinger nameservers, so you don't need to change DNS records by hand.
- **Leave the Zoho email records alone** (MX, SPF/TXT, DKIM, DMARC). Before you begin, open hPanel → Domains → DNS / Nameservers and take a screenshot of every record.

## 1. Add the website
1. hPanel → **Websites** → **Add website** → choose **Empty PHP/HTML website** (or "Skip, I'll do it myself").
2. Pick the domain **mendoraelectronics.com** that you already own.
3. If Hostinger offers to "point the domain", accept. It only changes the website (A) records, not email.

## 2. Upload the files
1. hPanel → Websites → mendoraelectronics.com → **File Manager**.
2. Open `public_html`. Delete Hostinger's default `default.php` or `index.php` if there is one.
3. Click **Upload** and upload everything *inside* the `site` folder:
   `index.html, styles.css, main.js, config.js, robots.txt, sitemap.xml, .htaccess, assets/`
   (The .md files are optional; .htaccess blocks them from the public.)
4. Check that `public_html/index.html` exists, **not** `public_html/site/index.html`.
   Tip: zip the contents of `site`, upload the zip, then right-click → **Extract**.

## 3. Turn on HTTPS
hPanel → **Security → SSL** → install the free SSL for mendoraelectronics.com (it's often automatic). It can take up to 15 minutes. The included .htaccess then redirects http:// and www. to https://mendoraelectronics.com.

## 4. Check
- Open https://mendoraelectronics.com in a private window, on a desktop and on a phone.
- Send a test email to and from your Zoho address to confirm mail still works.
- If you still see the old or parked page, wait for DNS to propagate (minutes up to 24 h) and clear your browser cache.

## 5. Updating later
Edit the files on your computer, then re-upload the changed files in File Manager, overwriting the old ones.

## Still to do before sharing with investors
- **Contact form:** set `formEndpoint` and `privacyUrl` in `config.js` (see README), or at least `contactEmail`. Until then the form tells visitors it's not connected.
- **Photos:** they currently load from Wikimedia Commons. To self-host them, download the three files listed in ASSETS.md into `assets/` and change the three hero `<img src>` values in index.html to `assets/<filename>`. Keep the attribution credits.
- **Social preview image:** add `assets/og-image.png` (1200×630).
