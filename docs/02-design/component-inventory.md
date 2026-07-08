# Component Inventory

> **Document Version:** 1.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines all reusable UI components used throughout ClashLens.

The primary goal is to encourage consistency, maintainability, and reusability.

Every reusable component should have a single responsibility and be designed for composition.

## Component Hierarchy

```text
Application
├── Layout
├── UI
├── Common
├── Dashboard
├── Members
├── Player
├── War
└── Feedback
```

## 1. Layout Components

These components define the overall application structure.

### App Layout

#### Purpose

Shared layout for every dashboard page.

#### Responsibilities

- Sidebar
- Top Navigation
- Main Content Area

### Sidebar

#### Purpose

Primary dashboard navigation.

#### Used In

- Dashboard

Contains

- Navigation Items
- Active Indicator

### Top Navigation

#### Purpose

Global dashboard actions.

Contains

- Logo
- Search Clan
- Last Updated
- Refresh

### Container

#### Purpose

Provide consistent content width.

Used throughout the application.

## 2. UI Components

These are generic reusable building blocks.

### Button

Variants

- Primary
- Secondary
- Ghost
- Outline

### Card

Base component used everywhere.

Examples

- KPI Card
- Hero Card
- Member Card
- War Card

### Badge

Examples

- League
- Role
- Labels

### Avatar

Displays

- Player
- Clan

### Input

Used for

- Search
- Forms

### Tooltip

Displays additional information.

### Separator

Visual divider.

### Dialog

Reusable modal component.

### Tabs

Reusable navigation.

## 3. Common Components

Reusable business components.

### Search Bar

Purpose

Search clan or members.

### Empty State

Examples

- No Clan Found
- No Active War
- No Results

### Error State

Displays API errors.

### Loading Skeleton

Shown while loading.

### Stat Card

Reusable statistics card.

Used for

- Donations
- Members
- Average Trophies
- Hero Strength

### Distribution Chart

Reusable chart component.

Examples

- TH Distribution
- League Distribution

## 4. Overview Components

Used only on the Overview page.

### Clan Summary Card

Displays

- Badge
- Name
- Level
- Members
- War League

### Quick Highlight Card

Displays

- Top Donor
- Strongest Hero
- Highest Trophy Player

### War Snapshot Card

Displays

- Stars
- Destruction
- Attacks Used

### KPI Grid

Container for multiple KPI cards.

## 5. Member Components

### Member Table

Primary member listing.

### Member Row

Single table row.

### Member Filters

Contains

- Town Hall
- Role
- League

### Donation Ratio

Small reusable badge.

### Hero Strength Indicator

Displays calculated hero strength.

## 6. Player Components

### Hero Card

Displays

- Hero
- Level

### Equipment Card

Displays hero equipment.

### Pet Card

Displays pets.

### Troop Card

Displays troops.

### Spell Card

Displays spells.

### Achievement Card

Displays achievements.

## 7. War Components

### War Scoreboard

Displays

- Clan
- Opponent
- Stars
- Destruction

### Attack Table

Displays all attacks.

### Attack Row

Displays one attack.

### War Status

Displays

- Preparation Day
- Battle Day
- War Ended

## 8. Feedback Components

### Loading

Reusable loading components.

### Error

Reusable error components.

### Empty

Reusable empty states.

### Not Found

Reusable 404 state.

## Component Reuse Matrix

| Component | Landing | Overview | Members | Player | War |
| ------------ | :-------: | :--------: | :-------: | :------: | :---: |
| Button | ✓ | ✓ | ✓ | ✓ | ✓ |
| Card | ✓ | ✓ | ✓ | ✓ | ✓ |
| Badge | ✓ | ✓ | ✓ | ✓ | ✓ |
| Search Bar | ✓ | ✓ | ✓ | ✗ | ✗ |
| Stat Card | ✗ | ✓ | ✗ | ✗ | ✗ |
| Clan Summary Card | ✗ | ✓ | ✗ | ✗ | ✗ |
| Member Table | ✗ | ✗ | ✓ | ✗ | ✗ |
| Hero Card | ✗ | ✗ | ✗ | ✓ | ✗ |
| War Scoreboard | ✗ | ✓ | ✗ | ✗ | ✓ |
| Attack Table | ✗ | ✗ | ✗ | ✗ | ✓ |

## Naming Convention

Components should use PascalCase.

Examples

```text
Button.tsx
Sidebar.tsx
MemberTable.tsx
HeroCard.tsx
WarScoreboard.tsx
```

## Component Principles

Every reusable component should:

- Have a single responsibility.
- Be reusable.
- Accept data through props.
- Avoid business logic when possible.
- Be composable.
- Follow the design system.

## Future Components

These are intentionally excluded from Phase 1.

- Recommendation Card
- Promotion Card
- Reliability Indicator
- Activity Timeline
- Clan Health Gauge
- Trend Charts
- Weekly Report Card

These will be introduced in future phases after historical tracking is implemented.

## Guiding Principle

> Build small, reusable components.
>
> Assemble pages from components rather than building large page-specific UI.

## Revision History

| Version | Date | Changes |
| --------- | ------ | --------- |
| 1.0 | 2026-07-07 | Initial Component Inventory |
