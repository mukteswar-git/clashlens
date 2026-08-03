# ClashLens

> Production-grade analytics platform for Clash of Clans clan leaders built with Next.js, Express, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Express](https://img.shields.io/badge/Express-5-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Status](https://img.shields.io/badge/Status-Phase%201%20Complete-success)
![License](https://img.shields.io/badge/License-MIT-green)

ClashLens is a modern analytics platform that helps **Clash of Clans clan leaders** understand their clan through live analytics, member comparison, and performance insights using the official Clash of Clans API.

The project follows a modern full-stack architecture with a **Next.js frontend**, an **Express backend**, and production deployment using **Vercel**, **Nginx**, and **PM2**.

---

# 🌐 Live Demo

### Frontend

https://www.clashlens.app

### Backend API

https://api.clashlens.app

### Swagger Documentation

https://api.clashlens.app/docs

---

# 🎨 Design

### Figma

https://www.figma.com/design/fRU9Ly1t93PMJQLs2VOckH/MDev

---

# Features

## Dashboard

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
- Donation comparison
- Progress comparison
- Sorting
- Responsive member table

## Backend API

- RESTful API
- Official Clash of Clans API integration
- Swagger (OpenAPI)
- Request validation
- Global error handling
- Rate limiting
- Helmet security
- Configurable CORS
- Response compression
- PM2 process management
- Nginx reverse proxy
- Custom domain

## Platform

- Server-side rendering
- Responsive design
- Mobile-first UI
- Component-based architecture
- Shared TypeScript models
- Monorepo using pnpm Workspace

---

# Screenshots

## Landing Page

![Landing](docs/screenshots/landing.png)

## Dashboard Overview

![Overview](docs/screenshots/overview.png)

## Members

![Members](docs/screenshots/members.png)

---

# Architecture

```text
                    User
                      │
                      ▼
          www.clashlens.app
            (Next.js + React)
                      │
                      ▼
          api.clashlens.app
             (Express API)
                      │
                      ▼
      Clash of Clans Public API
```

The frontend communicates exclusively with the backend API. The Clash of Clans API token never leaves the backend.

---

# Repository Structure

```text
clashlens/
├── backend/                # Express REST API
├── frontend/               # Next.js application
├── docs/                   # Product & engineering documentation
├── README.md
├── package.json
└── pnpm-workspace.yaml
```

---

# Tech Stack

| Category        | Technology                       |
| --------------- | -------------------------------- |
| Frontend        | Next.js 16, React 19, TypeScript |
| Backend         | Express 5, TypeScript            |
| Styling         | Tailwind CSS v4, shadcn/ui       |
| Validation      | Zod                              |
| Documentation   | Swagger (OpenAPI)                |
| Testing         | Vitest, Supertest                |
| Security        | Helmet, CORS, Rate Limiting      |
| Performance     | Compression                      |
| Deployment      | Vercel, VPS, Nginx, PM2          |
| Package Manager | pnpm Workspace                   |
| Data Source     | Clash of Clans Public API        |

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

## Clone the repository

```bash
git clone https://github.com/mukteswar-git/clashlens.git
cd clashlens
```

---

## Install dependencies

```bash
pnpm install
```

---

## Configure Environment Variables

### Frontend

Create:

```text
frontend/.env.local
```

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

---

### Backend

Create:

```text
backend/.env
```

```env
PORT=3001

FRONTEND_URL=http://localhost:3000

COC_API_TOKEN=YOUR_API_TOKEN
COC_API_BASE_URL=https://api.clashofclans.com/v1
```

---

## Run the Backend

```bash
cd backend

pnpm dev
```

Backend:

```
http://localhost:3001
```

Swagger:

```
http://localhost:3001/docs
```

---

## Run the Frontend

```bash
cd frontend

pnpm dev
```

Frontend:

```
http://localhost:3000
```

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
- [x] API testing
- [x] Responsive UI
- [x] Production deployment

---

## 🚧 Phase 2 — Decision Support

- [ ] Player evaluation framework
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

## 🤖 Phase 4 — AI Insights

- [ ] AI-powered recommendations
- [ ] Clan health analysis
- [ ] Weekly reports
- [ ] Monthly reports

---

# Project Goals

- Build a production-grade full-stack application.
- Follow modern Next.js and Express architecture.
- Build reusable and scalable components.
- Integrate with the official Clash of Clans API.
- Provide meaningful analytics for clan leaders.
- Build a strong foundation for historical analytics and AI-powered insights.

---

# License

This project is licensed under the **MIT License**.

---

# Author

**Mukteswar Tripathy**

GitHub: https://github.com/mukteswar-git

---

If you found this project useful, consider giving it a ⭐ on GitHub.
