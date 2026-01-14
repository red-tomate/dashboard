# Tomate Dashboard

Monorepo containing the marketing site and dashboard application for Tomate platform.

## Structure

```
├── apps/
│   ├── marketing/        # Marketing site (tomate.dev)
│   └── dashboard/        # Dashboard application (dashboard.tomate.dev)
└── package.json          # Root workspace configuration
```

## Tech Stack

- **Package Manager**: pnpm (workspaces)
- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Adapter**: Cloudflare Pages (@sveltejs/adapter-cloudflare)
- **Hosting**: Cloudflare Pages

## Development

### Install Dependencies

```bash
pnpm install
```

### Run Marketing Site

```bash
pnpm dev:marketing
# or
cd apps/marketing && pnpm dev
```

### Run Dashboard

```bash
pnpm dev:dashboard
# or
cd apps/dashboard && pnpm dev
```

## Build

### Build Marketing Site

```bash
pnpm build:marketing
```

### Build Dashboard

```bash
pnpm build:dashboard
```
### Deploying with Wrangler CLI

Alternatively, you can deploy using Wrangler CLI:

```bash
# Build and deploy marketing
cd apps/marketing
pnpm build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=tomate-marketing

# Build and deploy dashboard
cd apps/dashboard
pnpm build
npx wrangler pages deploy .svelte-kit/cloudflare --project-name=tomate-dashboard
```

Note: Make sure you're authenticated with `wrangler login` before deploying.
