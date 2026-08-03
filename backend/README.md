# ClashLens Backend

Backend API for **ClashLens**, a Clash of Clans analytics platform built with **Express** and **TypeScript**. It integrates with the official Clash of Clans API to provide live clan data, overview analytics, and member statistics through a secure, well-documented REST API.

---

## Features

- Official Clash of Clans API integration
- RESTful API built with Express
- TypeScript for type safety
- Request validation with Zod
- Global error handling
- Interactive API documentation with Swagger
- Configurable CORS
- Helmet security headers
- Rate limiting
- Response compression
- Automated API testing with Vitest and Supertest

---

## Tech Stack

### Runtime

- Node.js
- Express
- TypeScript

### Validation & Documentation

- Zod
- Swagger (OpenAPI)

### Security

- Helmet
- CORS
- Express Rate Limit
- Compression

### Testing

- Vitest
- Supertest

---

## Architecture

The backend follows a layered architecture that separates routing, validation, business logic, and external API communication.

```text
Client
   │
   ▼
Routes
   │
   ▼
Validation Middleware
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Clash of Clans API
```

Business logic is isolated within the service layer while controllers remain responsible only for handling HTTP requests and responses.

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
cp .env.example .env
```

Start the development server.

```bash
pnpm dev
```

The server will start at:

```text
http://localhost:5000
```

---

## Environment Variables

| Variable           | Description                             |
| ------------------ | --------------------------------------- |
| `PORT`             | Backend server port                     |
| `FRONTEND_URL`     | Allowed frontend origin                 |
| `COC_API_BASE_URL` | Clash of Clans API base URL             |
| `COC_API_TOKEN`    | Clash of Clans API authentication token |

---

## Available Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `pnpm dev`    | Start development server   |
| `pnpm build`  | Build the project          |
| `pnpm start`  | Run the production build   |
| `pnpm lint`   | Run ESLint                 |
| `pnpm format` | Format code using Prettier |
| `pnpm test`   | Run automated tests        |
| `pnpm check`  | Run format, lint, build    |

---

## API Documentation

Interactive API documentation is available through Swagger.

```text
http://localhost:5000/docs
```

---

## API Endpoints

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | `/health`        | Health check                 |
| GET    | `/clan/:tag`     | Retrieve clan information    |
| GET    | `/overview/:tag` | Retrieve overview statistics |
| GET    | `/members/:tag`  | Retrieve clan members        |
| GET    | `/docs`          | Swagger documentation        |

---

## Project Structure

```text
src
├── config
├── controllers
├── middleware
├── routes
├── schemas
├── services
│   ├── coc
│   ├── members
│   └── overview
├── types
├── utils
├── app.ts
└── server.ts
```

---

## Testing

Run the test suite with:

```bash
pnpm test
```

The project currently includes tests for:

- Health endpoint
- Validation middleware
- Rate limiting
- CORS configuration

---

## Security

The backend includes several production-ready security features.

- Helmet for secure HTTP headers
- Configurable CORS policy
- Request rate limiting
- Zod request validation
- Environment variable validation
- Compressed API responses

---

## Current Status

**Phase 1 – Complete**

Current capabilities:

- Live Clash of Clans data retrieval
- Overview analytics
- Member analytics
- Production-ready API foundation

Current limitations:

- No database persistence
- No authentication
- Historical analytics not yet available

---

## Roadmap

Upcoming improvements include:

- PostgreSQL
- Prisma ORM
- Historical clan data
- Background synchronization jobs
- JWT authentication
- Redis caching
- Advanced analytics

---

## License

This project is licensed under the MIT License.
