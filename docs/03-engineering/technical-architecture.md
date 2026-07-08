# Technical Architecture

> **Document Version:** 1.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines the technical architecture of ClashLens.

It explains:

- Overall system design
- Project structure
- Rendering strategy
- Data flow
- API communication
- State management
- Error handling
- Performance strategy
- Future scalability

This document acts as the engineering blueprint of the project.

## System Overview

### Current Architecture (Phase 1)

```text
                    User
                     │
                     ▼
              Next.js Frontend
                     │
      ┌──────────────┴──────────────┐
      ▼                             ▼
Server Components          Client Components
      │                             │
      └──────────────┬──────────────┘
                     ▼
         Next.js Route Handlers
               (/api/clans)
                     │
                     ▼
      Clash of Clans Public API
```

### Future Architecture (Phase 3+)

```text
                      User
                        │
                        ▼
                Next.js Frontend
                        │
                        ▼
                 Route Handlers
                        │
                        ▼
                 PostgreSQL Database
                        ▲
                        │
                Synchronization Service
                        ▲
                        │
               Scheduled Cron Jobs
                        │
                        ▼
            Clash of Clans Public API
```

## Technology Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Icons

- Lucide React

### Package Manager

- pnpm

### Future Backend

- PostgreSQL
- Prisma ORM

### Deployment

- Vercel

## Planned Project Structure

```text
app/
│
├── (marketing)/
│
├── dashboard/
│
├── api/
│
├── globals.css
├── layout.tsx
└── page.tsx

components/
│
├── ui/
├── common/
├── layout/
├── overview/
├── members/
├── player/
├── war/
└── charts/

lib/
│
├── api/
├── constants/
├── utils/
└── validations/

hooks/

types/

services/

public/

docs/
```

## Rendering Strategy

### Default

Use **Server Components** by default.

Reasons

- Better performance
- Smaller JavaScript bundle
- Better SEO
- Faster initial page load

### Client Components

Use only when required.

Examples

- Search Input
- Filters
- Sorting
- Dialogs
- Theme Switcher
- Charts requiring interaction

### Rule

If no browser interaction is required,

the component should remain a Server Component.

## Data Flow

```text
User
  │
  ▼
Next.js Frontend
  │
  ▼
Route Handler
  │
  ▼
Clash of Clans API
  │
  ▼
Transform Data
  │
  ▼
Render UI
  │
  ▼
Browser
```

## API Layer

UI components should never communicate directly with external APIs.

All external API requests must go through Next.js Route Handlers, which are responsible for:

- Authenticating requests to external services
- Validating incoming data
- Transforming API responses
- Handling errors
- Enabling future caching and rate limiting

```text
UI Components
      │
      ▼
Route Handlers
      │
      ▼
Clash of Clans API
```

Advantages

- API token remains secure on the server
- Centralized error handling
- Centralized response transformation
- Request validation
- Easier future backend integration
- Support for caching and rate limiting

## Folder Responsibilities

### app/

Application routes.

### components/

Reusable UI components.

No API logic.

### lib/

Pure utility functions.

Examples

- formatNumbers()
- calculateDonationRatio()

### services/

Business logic.

Examples

- Clan Service
- Player Service
- War Service

### hooks/

Reusable React hooks.

### types/

Shared TypeScript interfaces.

### public/

Images and static assets.

## State Management

### Local State

Default choice.

Use React state when needed.

### URL State

Use search parameters for:

- Clan Tag
- Filters
- Sorting

### Global State

Avoid unless multiple unrelated pages require it.

## Data Fetching

### Fetch on the Server

Preferred.

### Client Fetching

Only for

- Refresh
- Interactive updates
- Live filtering

### Avoid Duplicate Requests

Reuse already available data whenever possible.

## Error Handling

Every request should handle

- Loading
- Success
- Empty
- Error

No page should crash because of an API failure.

## Caching Strategy

### Phase 1

Leverage Next.js caching and revalidation.

Suitable for live clan data that updates periodically.

### Phase 3

Introduce database-backed caching and synchronization for tracked clans.

## Environment Variables

Store all secrets in environment variables.

Examples

```env
COC_API_TOKEN=

COC_API_BASE_URL=

NEXT_PUBLIC_APP_URL=
```

Never expose private API keys to the client.

## Performance Strategy

### Images

Always use

Next.js Image Component.

### Components

Keep components small.

### Imports

Prefer tree-shakable imports.

### Code Splitting

Lazy load heavy components when appropriate.

### API

Avoid unnecessary requests.

## TypeScript Strategy

### Strict Mode

Always enabled.

### Shared Types

Centralize interfaces inside

types/

Avoid duplicate interfaces.

### No any

Avoid using any.

Prefer explicit typing.

## Styling Strategy

- Tailwind CSS
- Design Tokens
- Mobile First
- Responsive by default

Avoid

- Inline styles
- Hardcoded colors
- Duplicate utility combinations

## Security

- API Token remains server-side.
- Validate user input.
- Sanitize URL parameters.
- Never trust external responses.

## Logging

Development

- Console logging allowed.

Production

- Structured logging only.

Avoid leaving debug logs in production code.

## Testing Strategy

Phase 1

Manual testing.

Future

- Unit Tests
- Component Tests
- Integration Tests

## Scalability

The architecture should support:

- Authentication
- PostgreSQL
- Historical Analytics
- Recommendation Engine
- Background Jobs
- Scheduled Synchronization

without requiring major restructuring.

## Future Architecture

```text
                        User
                          │
                          ▼
                  Next.js Frontend
                          │
                          ▼
                   Route Handlers
                    │          │
          Read/Write│          │Fetch Live Data
                    ▼          ▼
               PostgreSQL   Clash of Clans API
                    │
                    ▼
          Historical Analytics
                    │
                    ▼
         Recommendation Engine
```

## Architectural Principles

- Server First
- Component Reusability
- Type Safety
- Mobile First
- Performance First
- Progressive Enhancement
- Clear Separation of Responsibilities

## What We Avoid

- Large page components
- Duplicate business logic
- Direct API calls from UI
- Global state without necessity
- Hardcoded values
- Premature optimization

## Guiding Principle

> Build today in a way that supports tomorrow.

Every architectural decision should reduce future complexity rather than increase it.

## Revision History

| Version | Date       | Changes                        |
| ------- | ---------- | ------------------------------ |
| 1.0     | 2026-07-07 | Initial Technical Architecture |
