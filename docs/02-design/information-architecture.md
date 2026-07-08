# Information Architecture

> **Document Version:** 1.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines the overall structure of ClashLens.

It describes:

- Application hierarchy
- Navigation flow
- Screen organization
- Relationships between pages
- Primary user journeys

This document does **not** define UI design or implementation details.

## Application Structure

```text
ClashLens
│
├── Landing
│
├── Search
│
└── Dashboard
    │
    ├── Overview
    ├── Members
    └── War
```

## Navigation Flow

```text
Landing Page
      │
      ▼
Search Clan
      │
      ▼
Dashboard
      │
      ├──────────────┐
      ▼              ▼
Overview         Members
                     │
                     ▼
              Player Profile

Dashboard
    │
    ▼
   War
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

### Returning Visitor

```text
Open Website
↓
Search Clan
↓
View Dashboard
↓
Explore Updated Clan Data
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
- Last Updated
- Refresh Data

These actions are available from every dashboard page.

## Sidebar Navigation

Purpose

Navigate between dashboard sections.

### Phase 1 Navigation

```text
Overview

Members

War
```

Future pages will be introduced in later phases.

## Dashboard Pages

### Overview

Purpose

Provide a high-level summary of the clan.

Answers:

- What is the current state of the clan?
- What are the most important statistics?
- Who are the current standouts?

### Members

Purpose

Explore every clan member.

Features

- Search
- Sort
- Filters
- Member comparison

Users can navigate to an individual player profile.

## Player Profile

Purpose

Display detailed information about one player.

Includes

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines
- Achievements

## War

### Purpose

Display live war information.

### Includes

- War status
- Opponent information
- Stars earned
- Destruction percentage
- Attack usage
- War members
- Attack details

## Navigation Rules

### Global Navigation

Available throughout the application.

Navigation

- Landing Page
- Search Clan

Actions

- Refresh clan data

### Dashboard Navigation

Available only within the clan dashboard.

- Overview
- Members
- War
  
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
                  │
                  ▼
          Player Profile

Dashboard
    │
    ▼
   War
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
├── Current War
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
Members
↓
Individual Player
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
├── Features
├── FAQ
└── Footer

↓

Dashboard
├── Overview
├── Members
|   └── Player Profile
└── War
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

| Version | Date | Changes |
| --------- | ------ | --------- |
| 1.0 | 2026-07-07 | Initial Information Architecture |
