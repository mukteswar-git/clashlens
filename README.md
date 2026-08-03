# ClashLens

> Modern analytics platform for Clash of Clans clan leaders.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Express](https://img.shields.io/badge/Express-5-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Status](https://img.shields.io/badge/Status-Phase%201%20Complete-success)
![License](https://img.shields.io/badge/License-MIT-green)

ClashLens is a modern analytics platform that helps **Clash of Clans clan leaders** explore live clan data, compare member progression, and understand overall clan performance using the official Clash of Clans API.

The project is built as a full-stack monorepo with a **Next.js frontend** and an **Express backend**, following modern architecture and engineering practices.

---

# 🌐 Live Demo

Frontend

**https://www.clashlens.app**

Backend API

**Coming Soon**

Swagger Documentation

**Coming Soon**

---

# 🎨 Design

Figma

https://www.figma.com/design/fRU9Ly1t93PMJQLs2VOckH/MDev

---

# Features

## Analytics Dashboard

- Live clan search
- Clan overview
- Clan summary
- Performance overview
- Town Hall distribution
- League distribution
- Current war snapshot
- Quick highlights

## Members

- Member comparison
- Progress comparison
- Sorting
- Responsive member table

## Backend API

- RESTful API
- Official Clash of Clans API integration
- Swagger documentation
- Request validation
- Global error handling
- Rate limiting
- Helmet security
- Configurable CORS
- Response compression

## Platform

- Responsive design
- Mobile-first UI
- Server-side rendering
- Component-based architecture
- Shared TypeScript domain models

---

# Planned Features

## Phase 2

- Decision support framework
- Player evaluation engine
- Recommendation system

## Phase 3

- PostgreSQL
- Prisma ORM
- Historical clan tracking
- Trend analysis
- Scheduled synchronization

## Phase 4

- AI-powered recommendations
- Clan health analysis
- Weekly reports
- Monthly reports

---

# Screenshots

## Landing Page

![Landing](docs/screenshots/landing.png)

## Dashboard Overview

![Overview](docs/screenshots/overview.png)

## Members

![Members](docs/screenshots/members.png)

---

# Repository Structure

```text
clashlens/
├── frontend/          # Next.js application
├── backend/           # Express REST API
├── docs/              # Product & engineering documentation
├── README.md
└── pnpm-workspace.yaml
```

---

# Architecture

```text
User
   │
   ▼
Next.js Frontend
   │
   ▼
Express Backend
   │
   ▼
Clash of Clans API
```

The project follows a layered architecture that separates presentation, API, business logic, and external integrations.

---

# Tech Stack

| Category        | Technology                                  |
| --------------- | ------------------------------------------- |
| Frontend        | Next.js 16, React 19, TypeScript            |
| Backend         | Express 5, TypeScript                       |
| Styling         | Tailwind CSS 4, shadcn/ui                   |
| Validation      | Zod                                         |
| Documentation   | Swagger (OpenAPI)                           |
| Testing         | Vitest, Supertest                           |
| Security        | Helmet, CORS, Rate Limiting, Compression    |
| Package Manager | pnpm Workspace                              |
| Deployment      | Vercel (Frontend), Railway/Render (Backend) |
| Data Source     | Clash of Clans Public API                   |

---

# Documentation

## Package Documentation

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)

## Product

- [Product Vision](docs/01-product/01-product-vision.md)
- [MVP Roadmap](docs/01-product/02-mvp-roadmap.md)
- [Available Data Inventory](docs/01-product/03-available-data-inventory.md)

## Design

- [Information Architecture](docs/02-design/01-information-architecture.md)
- [Page Specifications](docs/02-design/02-page-specifications.md)
- [Component Inventory](docs/02-design/03-component-inventory.md)

## Engineering

- [Technical Architecture](docs/03-engineering/01-technical-architecture.md)
- [Development Principles](docs/03-engineering/02-development-principles.md)

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/mukteswar-git/clashlens.git
cd clashlens
```

## 2. Install dependencies

```bash
pnpm install
```

## 3. Configure environment variables

Frontend

```text
frontend/.env.local
```

Backend

```text
backend/.env
```

Refer to the package-specific READMEs for the required environment variables.

## 4. Start the applications

Backend

```bash
cd backend
pnpm dev
```

Frontend

```bash
cd frontend
pnpm dev
```

Visit:

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:5000
```

Swagger

```text
http://localhost:5000/docs
```

---

# Project Goals

- Build a production-grade full-stack application
- Follow modern Next.js and Express architecture
- Integrate with the official Clash of Clans API
- Provide meaningful analytics for clan leaders
- Build a scalable foundation for historical analytics and intelligent recommendations

---

# Roadmap

## ✅ Phase 1 — Live Analytics

- [x] Next.js frontend
- [x] Express backend
- [x] Live Clash of Clans API integration
- [x] Dashboard overview
- [x] Members page
- [x] Swagger documentation
- [x] Security middleware
- [x] Basic API testing
- [x] Responsive UI

---

## 🚧 Phase 2 — Decision Support

- [ ] Evaluation framework
- [ ] Player scoring
- [ ] Recommendation engine

---

## 📈 Phase 3 — Historical Analytics

- [ ] PostgreSQL
- [ ] Prisma ORM
- [ ] Historical clan tracking
- [ ] Trend analysis
- [ ] Scheduled synchronization

---

## 🤖 Phase 4 — Intelligent Insights

- [ ] AI-powered recommendations
- [ ] Clan health analysis
- [ ] Weekly reports
- [ ] Monthly reports

---

# License

This project is licensed under the [MIT License](LICENSE).

---

# Author

**Mukteswar Tripathy**

GitHub: https://github.com/mukteswar-git

---

If you find this project useful, consider giving it a ⭐ on GitHub.
