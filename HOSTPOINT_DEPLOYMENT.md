# Hostpoint deployment

The production website is hosted by Hostpoint. The previous Vercel deployment is retained temporarily as an external rollback snapshot but is not part of the active deployment path.

## Architecture

- TanStack Start prerenders every canonical route during `npm run build`.
- `npm run build:hostpoint` validates all sitemap routes and adds the Hostpoint-only Apache/PHP files to `.output/public`.
- GitHub Actions builds the site and uses a dedicated `rrsync` key that is restricted to the deployment document root.
- Hostpoint serves the prerendered HTML, hashed assets, security headers, redirects, and the small PHP language negotiator for `/`.
- `staging.wirkstattnatur.ch` receives `X-Robots-Tag: noindex, nofollow, noarchive` and a blocking `robots.txt`.
- `wirkstattnatur.ch` and `staging.wirkstattnatur.ch` use the same verified document root. Host-specific rules keep only the staging hostname out of search results.

Every push to `main` in `Wirkstattnatur/Urs` runs linting, builds the complete static artifact, validates all sitemap routes, and deploys it to Hostpoint. Any collaborator who can push to that branch can therefore publish a verified change without access to the Hostpoint control panel.

## GitHub repository secret

`HOSTPOINT_DEPLOY_KEY` contains only the dedicated private deployment key. Its corresponding Hostpoint `authorized_keys` entry must use a forced `rrsync -wo` command restricted to the staging document root. Do not reuse a personal or unrestricted Hostpoint SSH key.

## Production verification

1. Confirm all sitemap routes return `200` and contain their canonical metadata in the raw HTML.
2. Confirm unknown routes return `404`.
3. Confirm the staging host is `noindex` and its `robots.txt` disallows crawling.
4. Confirm the locale cookie overrides `Accept-Language` and `/en` never redirects.
5. Check the complete site at desktop and mobile sizes, including images, navigation, Tidio, legal pages, and direct deep links.
6. Confirm that `www.wirkstattnatur.ch` redirects to the canonical apex hostname.
7. Confirm that the privacy pages identify Hostpoint as the hosting provider.
8. Confirm that the mail records and Golden Cobra subdomain are unchanged.
9. Re-run the route, header, SEO, and PageSpeed checks on the production hostname after material infrastructure changes.

## Rollback

Retain the last verified Vercel deployment until Hostpoint has passed the complete production checks and DNS caches have expired. A rollback changes only the apex and `www` website records back to their recorded pre-cutover values; mail and unrelated subdomains must not be changed.
