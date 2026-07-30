# Technical Architecture

> **Document Version:** 2.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document describes the technical architecture of ClashLens.

It defines:

- Overall system architecture
- Project structure
- Rendering strategy
- Data flow
- Service layer
- API communication
- State management
- Error handling
- Performance strategy
- Scalability

This document reflects the current production implementation of Phase 1.

---

# System Overview

## Current Architecture (Phase 1)

```text
                    User
                      │
                      ▼
              Next.js Frontend
                      │
      ┌───────────────┴───────────────┐
      ▼                               ▼
Server Components             Client Components
      │                               │
      └───────────────┬───────────────┘
                      ▼
               Service Layer
                      │
                      ▼
              Internal API Client
                      │
                      ▼
          Next.js Route Handlers
                      │
                      ▼
        Clash of Clans Public API
```

---

## Future Architecture (Phase 3+)

```text
                      User
                        │
                        ▼
                Next.js Frontend
                        │
                        ▼
                 Service Layer
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
   PostgreSQL Database      Clash of Clans API
          ▲                           ▲
          │                           │
     Background Jobs          Scheduled Sync
          │
          ▼
Historical Analytics
          │
          ▼
Recommendation Engine
```

---

# Technology Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

---

## Icons

- Lucide React

---

## Package Manager

- pnpm

---

## Future Backend

- PostgreSQL
- Prisma ORM

---

## Deployment

- Vercel

---

# Project Structure

```text
app/
├── api/
├── components/
│   ├── layout/
│   ├── marketing/
│   ├── shared/
│   └── ui/
│
├── dashboard/
│   └── [tag]/
│       ├── page.tsx
│       └── members/
│
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── common/
├── dashboard/
│   ├── layout/
│   ├── overview/
│   └── members/
└── ui/

lib/
├── api/
├── coc/
├── members/
└── navigation/

services/
└── overview/

types/

docs/
```

---

# Folder Responsibilities

## app/

Application routes and page composition.

---

## app/components/

Landing page and marketing components.

---

## components/dashboard/

Dashboard-specific reusable components.

---

## components/common/

Shared application components.

Examples:

- Clan Search
- Refresh Button
- Stat Card
- Error State

---

## components/ui/

Reusable UI primitives built with shadcn/ui.

---

## lib/

Shared utilities and helper functions.

Examples:

- API client
- Clan tag utilities
- Navigation
- Member utilities

---

## services/

Business logic and data aggregation.

Responsibilities include:

- Combining API responses
- Computing derived metrics
- Preparing page-specific data
- Separating business logic from UI

---

## types/

Shared domain models used throughout the application.

---

## docs/

Project documentation.

---

# Rendering Strategy

## Server Components

Server Components are the default.

Benefits include:

- Smaller JavaScript bundles
- Faster initial page load
- Better SEO
- Secure server-side API access

---

## Client Components

Client Components are used only when browser interaction is required.

Examples:

- Clan Search
- Compare Select
- Sort Select
- Refresh Button
- Mobile Navigation

---

## Guideline

If browser interactivity is not required, the component should remain a Server Component.

---

# Data Flow

```text
User
 │
 ▼
Server Component
 │
 ▼
Service Layer
 │
 ▼
Internal API Client
 │
 ▼
Next.js Route Handler
 │
 ▼
Clash of Clans API
 │
 ▼
Transform & Derive Metrics
 │
 ▼
Render UI
```

---

# API Layer

UI components never communicate directly with external APIs.

All API requests pass through:

```text
UI
 │
 ▼
Service Layer
 │
 ▼
Internal API Client
 │
 ▼
Route Handler
 │
 ▼
Clash of Clans API
```

The API layer is responsible for:

- Authentication
- Request validation
- Response transformation
- Error handling
- Future caching
- Rate limiting

---

# Service Layer

Business logic is isolated inside reusable services.

Responsibilities include:

- Aggregating multiple API responses
- Computing derived metrics
- Preparing page-specific data
- Keeping UI components focused on rendering

Examples include:

- Overview Service
- Members Service
- Distribution Service

---

# State Management

## Local State

Preferred for component-specific interactions.

---

## URL State

Used for:

- Clan Tag

Future versions may also use URL state for filtering and sorting.

---

## Global State

Avoid unless multiple unrelated features require shared state.

---

# Data Fetching

## Server First

Data is fetched on the server whenever possible.

---

## Client Fetching

Reserved for interactive features such as:

- Refreshing live data
- User-triggered updates

---

## Avoid Duplicate Requests

Reuse previously fetched data whenever possible.

---

# Error Handling

Every page should support:

- Loading
- Success
- Empty
- Error

API failures should never cause the application to crash.

---

# Caching Strategy

## Phase 1

Leverage Next.js request caching and on-demand refresh for live data.

---

## Future

Introduce database-backed caching and synchronization for tracked clans.

---

# Environment Variables

Sensitive values must remain server-side.

Examples:

```env
COC_API_TOKEN=
COC_API_BASE_URL=
NEXT_PUBLIC_APP_URL=
```

Never expose API secrets to the client.

---

# Performance Strategy

## Server Rendering

Render data on the server whenever practical.

---

## Images

Use the Next.js Image component whenever possible.

---

## Components

Keep components focused and lightweight.

---

## Imports

Prefer tree-shakable imports.

---

## API Usage

Avoid unnecessary network requests.

---

# TypeScript Strategy

## Strict Typing

Always use strict typing.

Avoid `any` whenever possible.

---

## Shared Domain Models

Store reusable interfaces inside the `types` directory.

Avoid duplicate definitions.

---

# Styling Strategy

The application follows:

- Tailwind CSS
- Mobile-first design
- Responsive layouts
- Design system consistency

Avoid:

- Inline styles
- Hardcoded design values
- Duplicate utility combinations

---

# Security

- Keep API tokens server-side.
- Validate user input.
- Sanitize URL parameters.
- Never trust external API responses.

---

# Logging

## Development

Console logging is acceptable.

---

## Production

Use structured logging only.

Remove debugging statements before deployment.

---

# Testing Strategy

## Phase 1

Manual testing.

---

## Future

- Unit Tests
- Component Tests
- Integration Tests

---

# Naming Conventions

| Item             | Convention          |
| ---------------- | ------------------- |
| Directories      | kebab-case          |
| Component Files  | kebab-case          |
| React Components | PascalCase          |
| Utility Files    | kebab-case          |
| Shared Types     | `types/`            |
| Route Files      | Next.js conventions |

---

# Scalability

The architecture is designed to support:

- Authentication
- PostgreSQL
- Historical analytics
- Background jobs
- Scheduled synchronization
- Recommendation engine

without requiring significant restructuring.

---

# Architectural Principles

- Server First
- Feature-Based Organization
- Component Reusability
- Type Safety
- Mobile First
- Progressive Enhancement
- Clear Separation of Responsibilities

---

# What We Avoid

- Large page components
- Duplicate business logic
- Direct API calls from UI
- Unnecessary global state
- Hardcoded values
- Premature optimization
- Business logic inside UI components

---

# Guiding Principle

> Build software that is simple to understand, easy to extend, and capable of supporting future phases without major architectural changes.

---

# Revision History

| Version | Date       | Changes                                                                                                                                                           |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Technical Architecture                                                                                                                                    |
| 1.1     | 2026-07-12 | Updated project structure and aligned architecture with the MVP implementation                                                                                    |
| 2.0     | 2026-07-30 | Rewritten to reflect the production Phase 1 architecture, including the service layer, current project structure, rendering strategy, and component organization. |
