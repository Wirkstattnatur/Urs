# Hostpoint deployment

The production site remains on Vercel until the Hostpoint staging deployment has been verified and the production cutover is explicitly approved.

## Architecture

- TanStack Start prerenders every canonical route during `npm run build`.
- `npm run build:hostpoint` validates all sitemap routes and adds the Hostpoint-only Apache/PHP files to `.output/public`.
- GitHub Actions builds the site and uses a dedicated `rrsync` key that is restricted to the staging document root.
- Hostpoint serves the prerendered HTML, hashed assets, security headers, redirects, and the small PHP language negotiator for `/`.
- `staging.wirkstattnatur.ch` receives `X-Robots-Tag: noindex, nofollow, noarchive` and a blocking `robots.txt`.
- After the production cutover, `wirkstattnatur.ch` can use this same verified document root. The host-specific rules keep only the staging hostname out of search results, so the workflow and deploy key do not need to change.

Every push to `main` in `Wirkstattnatur/Urs` runs linting, builds the complete static artifact, validates all sitemap routes, and deploys it to Hostpoint. Any collaborator who can push to that branch can therefore publish a verified change without access to the Hostpoint control panel.

## GitHub repository secret

`HOSTPOINT_DEPLOY_KEY` contains only the dedicated private deployment key. Its corresponding Hostpoint `authorized_keys` entry must use a forced `rrsync -wo` command restricted to the staging document root. Do not reuse a personal or unrestricted Hostpoint SSH key.

## Verification before production cutover

1. Confirm all sitemap routes return `200` and contain their canonical metadata in the raw HTML.
2. Confirm unknown routes return `404`.
3. Confirm the staging host is `noindex` and its `robots.txt` disallows crawling.
4. Confirm the locale cookie overrides `Accept-Language` and `/en` never redirects.
5. Check the complete site at desktop and mobile sizes, including images, navigation, Tidio, legal pages, and direct deep links.
6. Compare performance with the current Vercel deployment.
7. Update both privacy pages from Vercel hosting to Hostpoint hosting.
8. Point the production Hostpoint website at the verified staging document root, add the `www` alias, and change only the website DNS records.
9. Re-run the route, header, SEO, and PageSpeed checks on the production hostname.

## Rollback

Until the final cutover, Vercel remains untouched. After cutover, retain the last verified Vercel deployment and the previous Hostpoint document root until the production checks pass.
