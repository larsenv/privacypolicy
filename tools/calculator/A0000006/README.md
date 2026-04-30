# Great Calculator Public Web Content

This directory contains the public static website content for **Great Calculator**.
It is designed to support the app’s public-facing marketing, privacy, privacy choices,
support, and accessibility links.

## Included pages

- `index.html` — product landing page / marketing URL
- `features/index.html` — detailed feature guide
- `privacy/index.html` — privacy policy
- `privacy-choices/index.html` — privacy choices page
- `support/index.html` — support page
- `accessibility/index.html` — accessibility page
- `age-suitability/index.html` — age-rating context page
- `license-agreement/index.html` — license agreement reference page
- `content-rights/index.html` — content and data-source rights page
- `404.html` — custom not-found page
- `assets/` — CSS, icons, and social image
- `.nojekyll` — disables unwanted Jekyll processing on GitHub Pages
- `site.webmanifest` — browser metadata
- `robots.txt` — crawl rules for the current live base URL
- `robots.txt.template` — template for future hosted roots
- `sitemap.xml.template` — template for future hosted roots
- `CNAME.template` — optional custom-domain helper

## Why this content exists

Use these pages for:

- the app’s public **Marketing URL**
- the app’s public **Privacy Policy URL**
- the app’s public **Support URL**
- the app’s optional **Accessibility URL**
- the app’s optional **User Privacy Choices URL**
- in-app links that open public support, privacy, and marketing pages

## Re-apply the active hosted URLs

From the repository root, run:

```bash
python3 scripts/configure_public_urls.py https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/
```

With a custom domain:

```bash
python3 scripts/configure_public_urls.py https://privacy.example.com --cname privacy.example.com
```

That script updates:

- `App/Info.plist`
- `Docs/PublicWeb/sitemap.xml`
- `Docs/PublicWeb/robots.txt`
- `Docs/PublicWeb/CNAME` (if `--cname` is supplied)

## Current hosted URLs

- Landing page / Marketing URL: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/`
- Features: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/features/`
- Privacy Policy: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/privacy/`
- Support: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/support/`
- Accessibility: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/accessibility/`
- Privacy Choices: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/privacy-choices/`
- Age Suitability: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/age-suitability/`
- License Agreement: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/license-agreement/`
- Content Rights: `https://sophiadetavex.github.io/privacypolicy/tools/calculator/A0000006/content-rights/`

## Fast export

To export a clean deployable copy of the public website bundle without mutating the repository, run:

```bash
python3 build_privacy_site.py --output-dir /tmp/GreatCalculatorPublicWeb
```

With a live base URL and ZIP artifact:

```bash
python3 build_privacy_site.py --base-url https://<owner>.github.io/<repo> --zip-path /tmp/greatcalculator-public-web.zip
```

## Release-compliance companions

For App Store Connect completion, pair this public-web bundle with:

- `Docs/AppStore_Connect_Compliance_Worksheet_v88.md`
- `Docs/Age_Rating_Worksheet_v88.md`
- `Docs/Accessibility_Nutrition_Label_Worksheet_v88.md`
