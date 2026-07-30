# Component Inventory

> **Document Version:** 2.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document provides an inventory of the reusable components used throughout ClashLens.

It documents the current implementation and serves as a reference for the application's component architecture, organization, and responsibilities.

This document should be updated whenever reusable components are added, removed, or significantly refactored.

---

# Component Architecture

```text
Application
├── Landing Components
│   ├── Layout
│   └── Marketing
│
├── Dashboard Components
│   ├── Layout
│   ├── Overview
│   └── Members
│
├── Common Components
└── UI Primitives
```

---

# Landing Components

Located in:

```text
app/components
```

## Layout

### Header

Provides the primary site navigation.

Contains:

- Desktop Navigation
- Mobile Navigation

---

### Footer

Displays site information and navigation.

Contains:

- Footer Brand
- Footer Links
- Footer Bottom

---

### Container

Provides consistent page width and horizontal spacing.

---

## Marketing

### Hero Section

Landing page hero and primary call-to-action.

---

### Features Section

Displays the core product features.

Uses:

- Feature Card

---

### Feature Highlights

Highlights key analytics capabilities.

Uses:

- Feature Highlight Card

---

### FAQ Section

Displays frequently asked questions.

Uses:

- FAQ Card

---

### Shared Badge

Reusable marketing badge.

---

# Dashboard Components

Located in:

```text
components/dashboard
```

---

## Layout Components

Shared across all dashboard pages.

### Sidebar

Primary dashboard navigation.

Uses:

- Sidebar Header
- Sidebar Navigation
- Sidebar Navigation Item
- Sidebar Footer

---

### Top Navigation

Global dashboard actions.

Provides:

- Current Clan
- Clan Search
- Refresh Data
- Last Updated

---

### Mobile Navigation

Responsive navigation for mobile devices.

Uses:

- Mobile Sidebar

---

# Overview Components

Used exclusively on the Overview page.

---

### Clan Summary

Displays:

- Clan Badge
- Clan Name
- Clan Tag
- Clan Level
- Member Count
- War League
- Capital League

---

### Overview Stats

Displays high-level clan statistics.

Examples:

- Members
- War Wins
- Win Rate
- Trophies

---

### Performance Overview

Displays aggregated performance metrics.

Uses:

- Performance Card

Examples:

- Average Donations
- Average Raid Medals
- War Win Streak

---

### Distribution Charts

Displays member distributions.

Components:

- Distribution Chart
- Town Hall Distribution Chart
- League Distribution Chart

---

### Quick Highlights

Displays important member highlights.

Uses:

- Highlight Card

Examples:

- Top Donor
- Highest Hero Progress
- Highest Trophy Player
- Highest Town Hall

---

### War Snapshot

Displays the current clan war.

Uses:

- War Stats Column

Displays:

- War State
- Team Size
- Stars
- Destruction
- Attack Usage
- Opponent Summary

---

# Members Components

Used exclusively on the Members page.

---

### Members View

Top-level page component.

---

### Desktop Table

Components:

- Desktop Member Table
- Desktop Member Row

---

### Mobile Table

Components:

- Mobile Member Table
- Mobile Member Row

---

### Toolbar

Components:

- Member Toolbar
- Mobile Member Toolbar

---

### Comparison Controls

- Compare Select
- Sort Select

---

### Reusable Table Cells

- Player Cell
- Town Hall Cell
- League Cell
- Donation Cell
- Progress Cell
- Role Badge
- Mobile Cell Renderer

These components keep the member comparison table modular and reusable.

---

# Common Components

Located in:

```text
components/common
```

### Clan Search

Reusable clan search component.

---

### Logo

Displays the ClashLens logo.

---

### Refresh Button

Refreshes live clan data.

---

### Stat Card

Reusable statistics card.

---

### Error State

Displays API errors and other recoverable failures.

---

### Skeleton Components

Reusable loading placeholders.

Available skeletons include:

- Overview Skeleton
- Clan Summary Skeleton
- Distribution Chart Skeleton
- Performance Card Skeleton
- Quick Highlights Skeleton
- War Snapshot Skeleton
- Members Page Skeleton
- Members Header Skeleton
- Members Toolbar Skeleton
- Members Table Skeleton
- Stat Card Skeleton
- Skeleton Text

---

# UI Components

Located in:

```text
components/ui
```

These reusable UI primitives are built using **shadcn/ui**.

Available components include:

- Accordion
- Badge
- Button
- Card
- Input
- Progress
- Select
- Separator
- Sheet
- Skeleton
- Table

These components should remain presentation-focused and free of application-specific business logic.

---

# Component Reuse

| Component           | Landing | Dashboard |
| ------------------- | :-----: | :-------: |
| Button              |    ✓    |     ✓     |
| Card                |    ✓    |     ✓     |
| Badge               |    ✓    |     ✓     |
| Input               |    ✓    |     ✓     |
| Progress            |    ✗    |     ✓     |
| Select              |    ✗    |     ✓     |
| Table               |    ✗    |     ✓     |
| Clan Search         |    ✓    |     ✓     |
| Logo                |    ✓    |     ✓     |
| Refresh Button      |    ✗    |     ✓     |
| Stat Card           |    ✗    |     ✓     |
| Error State         |    ✗    |     ✓     |
| Skeleton Components |    ✗    |     ✓     |

---

# Naming Convention

The project follows the following naming conventions.

| Item             | Convention                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| Component Files  | kebab-case                                                                 |
| Folder Names     | kebab-case                                                                 |
| React Components | PascalCase                                                                 |
| Hooks            | camelCase                                                                  |
| Utility Files    | kebab-case                                                                 |
| Route Files      | Next.js conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`) |

Example:

```text
performance-overview.tsx
town-hall-distribution-chart.tsx
sidebar-navigation-item.tsx
member-toolbar.tsx
```

```tsx
export function PerformanceOverview() {}
```

---

# Component Design Principles

Every reusable component should:

- Have a single responsibility.
- Be composable.
- Receive data through props.
- Minimize business logic.
- Be reusable where appropriate.
- Follow the ClashLens design system.
- Prefer Server Components unless client-side interactivity is required.

---

# Future Components

Future phases may introduce additional reusable components, including:

- War Analytics
- Activity Timeline
- Clan Health
- Donation Trends
- Historical Charts
- Recommendation Cards
- Weekly Reports
- Monthly Reports

These components are intentionally out of scope for Phase 1.

---

# Guiding Principle

> Build small, reusable components that can be composed into larger application features instead of creating page-specific implementations.

---

# Revision History

| Version | Date       | Changes                                                                                        |
| ------- | ---------- | ---------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Component Inventory                                                                    |
| 1.1     | 2026-07-12 | Updated inventory for the MVP architecture                                                     |
| 2.0     | 2026-07-30 | Rewritten to reflect the production Phase 1 implementation and current component architecture. |
