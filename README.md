# Wirkstattnatur website


Website for Wirkstattnatur, Urs Gremlich's personal training, Pilates, golf fitness, karate, and massage practice in the Thalwil and Horgen area.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The development server runs at `http://localhost:8080`.

## Checks

```sh
npm run lint
npm run build
```

The project uses React, TanStack Start, Tailwind CSS, Vite, and Nitro. The production website runs on Hostpoint. Every push to `main` in `Wirkstattnatur/Urs` builds and deploys the complete prerendered website through `npm run build:hostpoint`; see [HOSTPOINT_DEPLOYMENT.md](./HOSTPOINT_DEPLOYMENT.md) for the deployment and rollback contract.

Visual tokens, shared layout patterns, and extension rules are documented in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
