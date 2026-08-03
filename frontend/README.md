# ClashLens Frontend

Frontend application for **ClashLens**, a Clash of Clans analytics platform built with **Next.js**, **React**, and **TypeScript**. It provides a fast, responsive interface for exploring live clan statistics, member analytics, and overall clan performance using the official Clash of Clans API.

---

## Features

- Live clan search
- Clan overview dashboard
- Member analytics
- Town Hall distribution
- League distribution
- War snapshot
- Quick highlights
- Recent clan searches
- Responsive design
- Modern UI built with shadcn/ui

---

## Tech Stack

### Framework

- Next.js
- React
- TypeScript

### Styling

- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Data

- Backend REST API
- Clash of Clans Public API (via backend)

---

## Architecture

The frontend follows a component-based architecture with a clear separation between pages, reusable UI components, and data fetching.

```text
User
   │
   ▼
Next.js Pages
   │
   ▼
UI Components
   │
   ▼
Backend API
   │
   ▼
Clash of Clans API
```

---

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
pnpm install
```

Create an environment file.

```bash
cp .env.example .env.local
```

Start the development server.

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

| Variable              | Description          |
| --------------------- | -------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Available Scripts

| Command       | Description                 |
| ------------- | --------------------------- |
| `pnpm dev`    | Start development server    |
| `pnpm build`  | Create production build     |
| `pnpm start`  | Start production server     |
| `pnpm lint`   | Run ESLint                  |
| `pnpm format` | Format code using Prettier  |
| `pnpm check`  | Run format, lint, and build |

---

## Project Structure

```text
src
├── app
├── components
│   ├── common
│   ├── dashboard
│   └── ui
├── hooks
├── lib
├── types
└── utils
```

---

## Pages

| Route              | Description              |
| ------------------ | ------------------------ |
| `/`                | Landing page             |
| `/dashboard/[tag]` | Clan analytics dashboard |

---

## Dashboard Features

- Clan summary
- Overview statistics
- Performance metrics
- Town Hall distribution
- League distribution
- War snapshot
- Quick highlights
- Recent searches

---

## Design Principles

The frontend is designed with a focus on:

- Component reusability
- Type safety
- Responsive layouts
- Accessible UI
- Server-first rendering with Next.js
- Clean separation of concerns

---

## Current Status

**Phase 1 – Complete**

Current capabilities:

- Live clan analytics
- Responsive dashboard
- Backend API integration
- Production-ready frontend foundation

Current limitations:

- Historical analytics not available
- Authentication not implemented
- Offline support not available

---

## Roadmap

Upcoming improvements include:

- User authentication
- Saved clans
- Historical analytics
- Advanced member insights
- Dashboard customization
- Theme personalization

---

## License

This project is licensed under the MIT License.
