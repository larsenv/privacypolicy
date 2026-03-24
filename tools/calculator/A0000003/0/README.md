# Great Calculator Privacy Site

This repository bundle is a production-grade static site for **Great Calculator**. It is designed to support the app’s public-facing privacy, privacy choices, support, and accessibility links, and it is structured so it can be hosted cleanly on **GitHub Pages**.

## Repository layout

- `docs/` — the public site content intended for GitHub Pages
- `docs/index.html` — landing page
- `docs/privacy/index.html` — privacy policy
- `docs/privacy-choices/index.html` — privacy choices page
- `docs/support/index.html` — support page
- `docs/accessibility/index.html` — accessibility page
- `docs/404.html` — custom not-found page
- `docs/assets/` — CSS, icons, and social image
- `docs/.nojekyll` — disables unwanted Jekyll processing
- `docs/site.webmanifest` — browser metadata
- `docs/robots.txt` — generic crawl rules
- `site-config/robots.txt.template` — final robots template once the public base URL is known
- `site-config/sitemap.xml.template` — final sitemap template once the public base URL is known
- `site-config/CNAME.template` — optional custom-domain helper
- `scripts/finalize_site.py` — generates `docs/sitemap.xml`, finalizes `docs/robots.txt`, and optionally writes `docs/CNAME`
- `scripts/validate_site.py` — local static validation for internal links and asset references
- `.github/workflows/pages.yml` — optional GitHub Actions Pages deployment workflow

## Why this structure

The public site lives in `docs/` so you can use GitHub Pages branch publishing from **main /docs** without exposing maintainer files like workflow configuration and helper scripts as part of the public website.

## Deploy on GitHub Pages

### Recommended: branch publishing from `main` and `/docs`

1. Create a GitHub repository for the site.
2. Upload this bundle so that `README.md`, `scripts/`, `.github/`, and `docs/` are at the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Choose the **main** branch and the **/docs** folder.
5. Enable **Enforce HTTPS** after the site becomes available.

### Optional: GitHub Actions deployment

If you prefer GitHub Actions instead of branch publishing, this bundle includes `.github/workflows/pages.yml`. In **Settings → Pages**, choose **GitHub Actions** as the source.

## Finalize the site after you know the public base URL

Run this from the repository root:

```bash
python3 scripts/finalize_site.py https://<owner>.github.io/<repo>
```

Example:

```bash
python3 scripts/finalize_site.py https://example.github.io/greatcalculator-privacy
```

With a custom domain:

```bash
python3 scripts/finalize_site.py https://privacy.example.com --cname privacy.example.com
```

The script will:

- generate `docs/sitemap.xml`
- generate a final `docs/robots.txt` with the sitemap URL
- optionally write `docs/CNAME`
- print the exact public URLs for:
  - Privacy Policy
  - Privacy Choices
  - Support
  - Accessibility
  - Home / Marketing

## Validate locally before publishing

Run:

```bash
python3 scripts/validate_site.py
```

This checks that internal relative links and asset references resolve correctly inside `docs/`.

## Suggested App Store metadata URLs

After the site is live, use URLs in this pattern:

- Privacy Policy URL: `https://<base>/privacy/`
- Support URL: `https://<base>/support/`
- Accessibility URL: `https://<base>/accessibility/`
- Optional User Privacy Choices URL: `https://<base>/privacy-choices/`

## Current app-specific posture reflected by this site

This site is tailored to the current Great Calculator implementation:

- most calculations happen on-device
- the app stores local preferences, onboarding flags, committed history, and a small exchange-rate cache in app-private storage
- live currency requests use Frankfurter only when requested by the user
- the current release does not create user accounts
- the current release does not use third-party analytics SDKs
- the current release does not request camera, microphone, contacts, photo library, location, or HealthKit access
- the current release keeps the Apple Ads attribution path disabled

## Effective date

- March 24, 2026
