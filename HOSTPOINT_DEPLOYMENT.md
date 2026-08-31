# Hostpoint deployment

The production website is hosted by Hostpoint. The previous Vercel deployment is retained temporarily as an external rollback snapshot but is not part of the active deployment path.

## Architecture

- TanStack Start prerenders every canonical route during `npm run build`.
- `npm run build:hostpoint` validates all sitemap routes and adds the Hostpoint-only Apache/PHP files to `.output/public`.
- GitHub Actions builds the site and uses a dedicated `rrsync` key that is restricted to the deployment document root.
- Hostpoint serves the prerendered HTML, hashed assets, security headers, redirects, and the small PHP language negotiator for `/`.
- There is no public staging hostname. The production document root still uses the legacy directory name `staging.wirkstattnatur.ch`; do not rename or delete that directory without updating the Hostpoint configuration and deployment secrets together.
- The defensive staging-host rules remain in the artifact so that an accidentally restored staging DNS record cannot be indexed.

Every push to `main` in `Wirkstattnatur/Urs` runs linting, builds the complete static artifact, validates all sitemap routes, and deploys it to Hostpoint. Any collaborator who can push to that branch can therefore publish a verified change without access to the Hostpoint control panel.

## GitHub repository secret

`HOSTPOINT_DEPLOY_KEY` contains only the dedicated private deployment key. Its corresponding Hostpoint `authorized_keys` entry must use a forced `rrsync -wo` command restricted to the production document root (whose directory retains the legacy staging name). Do not reuse a personal or unrestricted Hostpoint SSH key.

## Production verification

1. Confirm all sitemap routes return `200` and contain their canonical metadata in the raw HTML.
2. Confirm unknown routes return `404`.
3. Confirm the retired staging host has no public A or AAAA record.
4. Confirm the locale cookie overrides `Accept-Language` and `/en` never redirects.
5. Check the complete site at desktop and mobile sizes, including images, navigation, Tidio, legal pages, and direct deep links.
6. Confirm that `www.wirkstattnatur.ch` redirects to the canonical apex hostname.
7. Confirm that the privacy pages identify Hostpoint as the hosting provider.
8. Confirm that the mail records and Golden Cobra subdomain are unchanged.
9. Re-run the route, header, SEO, and PageSpeed checks on the production hostname after material infrastructure changes.

## Rollback

Retain the last verified Vercel deployment until Hostpoint has passed the complete production checks and DNS caches have expired. A rollback changes only the apex and `www` website records back to their recorded pre-cutover values; mail and unrelated subdomains must not be changed.
