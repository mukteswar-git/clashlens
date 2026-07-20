# ClashLens

> Modern analytics and decision-support platform for Clash of Clans clan leaders.

ClashLens is a web application being built with Next.js, TypeScript, and Tailwind CSS to help Clash of Clans clan leaders analyze member activity, war performance, and overall clan health using data from the official Clash of Clans API.

## Live Demo

🌐 **Live Demo:** https://clashlens.vercel.app

## 🎨 Design

🔗 **Figma Design:** https://www.figma.com/design/fRU9Ly1t93PMJQLs2VOckH/MDev?node-id=0-1&t=HGOHCZ7XpHUQBjuC-1

## Status

🚧 Currently under development.

- ✅ UI/UX Design Completed
- ✅ Landing Page Development
- ✅ Vercel Deployment
- ✅ Clash of Clans API Integration
- 🚧 Dashboard Development
- 🚧 Analytics Engine

The responsive landing page has been completed and deployed. Live Clash of Clans data is successfully integrated, including dynamic clan search and live data retrieval. Current development is focused on the Overview dashboard and the analytics engine that powers clan insights.

## Screenshots

### Landing Page

![Desktop](docs/screenshots/desktop.png)

### Tablet

![Tablet](docs/screenshots/tablet.png)

### Mobile

![Mobile](docs/screenshots/mobile.png)

## Current Features

- Responsive landing page
- Clan search interface
- Live Clash of Clans API integration
- Server-side API route for fetching clan data
- Responsive interface
- Modern UI built with Tailwind CSS and shadcn/ui

## Planned Features

### Live Analytics

- Clan overview
- Member exploration
- Player profiles
- War analytics

### Historical Analytics

- Historical tracking
- Trend analysis
- Weekly reports

### Intelligent Insights

- Promotion recommendations
- Removal recommendations
- Clan health analysis

## 📚 Documentation

Project documentation is organized into the following categories:

### 📦 Product

- [Product Vision](docs/01-product/01-product-vision.md)
- [MVP Roadmap](docs/01-product/02-mvp-roadmap.md)
- [Available Data Inventory](docs/01-product/03-available-data-inventory.md)

### 🎨 Design

- [Information Architecture](docs/02-design/01-information-architecture.md)
- [Page Specifications](docs/02-design/02-page-specifications.md)
- [Component Inventory](docs/02-design/03-component-inventory.md)

### ⚙️ Engineering

- [Technical Architecture](docs/03-engineering/01-technical-architecture.md)
- [Development Principles](docs/03-engineering/02-development-principles.md)

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Lucide React
- App Router
- Route Handlers
- pnpm
- Vercel
- Clash of Clans Public API

## Project Goals

- Build a production-grade Next.js application
- Integrate with the official Clash of Clans API
- Create meaningful analytics and decision-support features
- Practice modern full-stack development patterns
- Deploy on Vercel

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create a local environment file

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

> On Windows (PowerShell):

```powershell
Copy-Item .env.example .env.local
```

### 3. Configure environment variables

- Generate an API key from the Clash of Clans Developer Portal.
- Whitelist your current public IP address.
- Add your API token to `.env.local`.

### 4. Start the development server

```bash
pnpm dev
```

Open http://localhost:3000

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Create production build
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

## Roadmap

### Phase 1 — Live Analytics

- [x] Project setup
- [x] Responsive landing page
- [x] Clash of Clans API integration
- [x] Dynamic clan search
- [ ] Live clan dashboard
- [ ] Members page

### Phase 2 — Decision Engine Design

- [ ] Evaluation framework
- [ ] Decision rules
- [ ] Recommendation criteria

### Phase 3 — Historical Analytics

- [ ] Clan tracking
- [ ] PostgreSQL integration
- [ ] Historical reports
- [ ] Background synchronization

### Phase 4 — Smart Recommendations

- [ ] Promotion recommendations
- [ ] Removal recommendations
- [ ] Clan health analysis
- [ ] Weekly and monthly reports

## License

MIT License

## Author

Mukteswar Tripathy
