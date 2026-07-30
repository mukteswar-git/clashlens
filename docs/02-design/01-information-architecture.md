# Information Architecture

> **Document Version:** 1.2  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines the overall structure of ClashLens.

It describes:

- Application hierarchy
- Navigation flow
- Screen organization
- Relationships between application sections
- Primary user journeys

This document does **not** define UI design or implementation details.

## Application Structure

```text
ClashLens
│
├── Landing
│
└── Dashboard
    │
    ├── Shared Layout
    │   ├── Top Navigation
    │   └── Sidebar
    │
    ├── Overview
    └── Members
```

## Navigation Flow

```text
Landing
│
├── Search Clan
│
▼
Dashboard
│
├── Overview
└── Members
```

## User Journey

### First-Time Visitor

```text
Open Website
↓
Learn about ClashLens
↓
Search Clan
↓
Explore Dashboard
↓
Leave or Search Another Clan
```

No account is required.

No setup is required.

### Returning User Journey

```text
Open Website
↓
Search Clan
↓
Open Dashboard
↓
Refresh Live Data (Optional)
↓
Explore Overview and Members
```

## Landing Page

### Purpose

Introduce ClashLens and encourage users to search for a clan.

### Sections

- Hero
- Trusted Metrics
- Features
- Analytics Preview
- FAQ
- About
- Footer

### Primary Action

```text
Search Clan
```

## Dashboard Layout

```text
+-----------------------------------------------------------+
| Top Navigation                                            |
+-----------------------------------------------------------+
| Sidebar |                                                 |
|         |                 Page Content                    |
|         |                                                 |
|         |                                                 |
+-----------------------------------------------------------+
```

The Top Navigation and Sidebar remain consistent while the page content changes.

## Top Navigation

Purpose

Provide global actions.

Contains

- ClashLens Logo
- Search Clan
- Refresh Data
- Last Updated
- Current Clan

These actions are available from every dashboard page.

## Sidebar Navigation

Purpose

Navigate between dashboard sections.

### Phase 1 Navigation

```text
Overview

Members
```

Future pages will be introduced in later phases.

## Dashboard Pages

### Overview

**Purpose**

Provide a high-level summary of the clan.

**Answers**

- What is the current state of the clan?
- What are the most important statistics?
- Who are the current standout members?
- What is the current war status?

**Includes**

- Clan Summary
- Performance Overview
- Town Hall Distribution
- League Distribution
- Quick Highlights
- Current War Snapshot

---

### Members

**Purpose**

Compare and analyze every clan member.

**Features**

- Member Comparison Table
- Compare Progress By:
  - Heroes
  - Hero Equipment
  - Pets
  - Troops
  - Spells
  - Siege Machines
- Independent Sorting
- Dynamic Member Rankings
- Responsive Comparison Table

---

## Current War Snapshot

The application displays a live war summary on the **Overview** page.

**Includes**

- War State
- Team Size
- Clan Stars
- Opponent Stars
- Clan Destruction
- Opponent Destruction
- Attacks Used
- Remaining Attacks
- Opponent Name
- Opponent Badge
- Opponent Clan Level

## Navigation Rules

### Global Navigation

Available throughout the application.

Navigation

- Landing Page
- Search Clan

Actions

- Search Clan
- Refresh Live Data

### Dashboard Navigation

Available only within the clan dashboard.

- Overview
- Members

## Page Relationships

```text
Landing
    │
    ▼
Dashboard
    │
    ├────────────┐
    ▼            ▼
Overview     Members
```

---

## Future Expansion

The architecture is intentionally designed to grow without restructuring.

Future pages include:

```text
Dashboard
│
├── Overview
├── Members
├── War Analytics
├── Activity
├── Donations
├── Clan Games
├── Capital Raids
├── Reports
└── Settings
```

These pages are **out of scope** for Phase 1.

## Information Hierarchy

Information should flow from general to specific.

```text
Clan
↓
Overview
↓
Members
```

Users should never encounter detailed information before understanding the overall context.

## Navigation Principles

### Keep Navigation Simple

Only include pages that provide clear value.

Avoid unnecessary menu items.

### Progressive Disclosure

Show the most important information first.

Allow users to explore deeper only when they need additional details.

### Minimize Clicks

Users should reach any major section within two clicks.

## Phase 1 Site Map

```text
Landing
│
├── Hero
├── Trusted Metrics
├── Features
├── Analytics Preview
├── FAQ
├── About
└── Footer

↓

Dashboard
├── Overview
└── Members
```

## Architectural Principles

- Every page must have a single clear purpose.
- Navigation should be predictable.
- Information should become progressively more detailed.
- Users should never feel lost.
- The architecture should support future expansion without requiring major redesign.

## Guiding Principle

> **Users should spend their time understanding their clan—not figuring out how to navigate the application.**

## Revision History

| Version | Date       | Changes                                                                                                   |
| ------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Information Architecture                                                                          |
| 1.1     | 2026-07-12 | Simplified dashboard architecture, removed Player Profile and War pages, added member comparison workflow |
| 1.2     | 2026-07-30 | Updated navigation and dashboard structure to match the public Phase 1 release.                           |
