# Component Inventory

> **Document Version:** 1.1  
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
├── Overview
├── Members
└── Feedback
```

## 1. Layout Components

These components define the overall application structure.

### AppLayout

#### Purpose

Shared layout for every dashboard page.

#### Responsibilities

- Sidebar
- Top Navigation
- Main Content Area

### Sidebar

#### Purpose

Primary dashboard navigation.

#### Contains

- Navigation Items
- Active Indicator

### TopNavigation

#### Purpose

Global dashboard actions.

#### Contains

- Logo
- Search Clan
- Refresh
- Last Updated

### Container

#### Purpose

Provide consistent content width.

## 2. UI Components

Generic reusable building blocks.

### Button

Variants

- Primary
- Secondary
- Ghost
- Outline

### Card

Base component.

Used for

- Summary Cards
- Highlight Cards
- War Snapshot
- Distribution Cards

### Badge

Examples

- Role
- League
- Status

### Avatar

Displays

- Clan
- Player

### Input

Used for

- Search

### Progress

Displays percentage-based progression.

Used for

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines

### Status

Displays live status.

Examples

- Live
- In War
- Preparation Day
- War Ended

### Tooltip

Displays additional information.

### Separator

Visual divider.

## 3. Common Components

Reusable business components.

### SearchBar

Used to search clans.

### LoadingSkeleton

Displayed while data loads.

### ErrorState

Displays API failures.

### EmptyState

Examples

- No Clan Found
- No Active War
- No Results

### StatCard

Reusable statistics card.

Examples

- Members
- Clan Level
- War League
- Capital League

### DistributionChart

Reusable chart component.

Examples

- Town Hall Distribution
- League Distribution

## 4. Overview Components

Used only on the Overview page.

### ClanSummaryCard

Displays

- Badge
- Name
- Tag
- Level
- Members
- War League
- Capital League

### QuickHighlightCard

Displays

- Top Donor
- Strongest Heroes
- Highest Trophy Player
- Highest Town Hall
- Top Capital Contributor

### WarSnapshotCard

Displays

- War State
- Team Size
- Stars
- Destruction
- Attacks Used
- Remaining Attacks
- Opponent Summary

### DistributionSection

Container for distribution charts.

## 5. Members Components

Used only on the Members page.

### MemberTable

Main comparison table.

### MemberRow

Displays a single member.

### CompareSelect

Allows switching comparison category.

Options

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines

### SortSelect

Allows sorting members.

Examples

- Progress
- Donations
- Town Hall
- Role

### ProgressIndicator

Displays progression percentage.

Used for

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines

## 6. Feedback Components

### Loading

Reusable loading component.

### Error

Reusable error component.

### Empty

Reusable empty state.

### NotFound

Reusable 404 state.

## Component Reuse Matrix

| Component          | Landing | Overview | Members |
| ------------------ | :-----: | :------: | :-----: |
| Button             |    ✓    |    ✓     |    ✓    |
| Card               |    ✓    |    ✓     |    ✓    |
| Badge              |    ✓    |    ✓     |    ✓    |
| Avatar             |    ✗    |    ✓     |    ✓    |
| Input              |    ✓    |    ✓     |    ✗    |
| SearchBar          |    ✓    |    ✓     |    ✗    |
| StatCard           |    ✗    |    ✓     |    ✗    |
| DistributionChart  |    ✗    |    ✓     |    ✗    |
| ClanSummaryCard    |    ✗    |    ✓     |    ✗    |
| QuickHighlightCard |    ✗    |    ✓     |    ✗    |
| WarSnapshotCard    |    ✗    |    ✓     |    ✗    |
| MemberTable        |    ✗    |    ✗     |    ✓    |
| MemberRow          |    ✗    |    ✗     |    ✓    |
| CompareSelect      |    ✗    |    ✗     |    ✓    |
| SortSelect         |    ✗    |    ✗     |    ✓    |
| ProgressIndicator  |    ✗    |    ✗     |    ✓    |
| Status             |    ✗    |    ✓     |    ✓    |

### Naming Convention

Components should use PascalCase.

Examples

```text
Button.tsx
Sidebar.tsx
TopNavigation.tsx
ClanSummaryCard.tsx
QuickHighlightCard.tsx
WarSnapshotCard.tsx
MemberTable.tsx
MemberRow.tsx
CompareSelect.tsx
SortSelect.tsx
ProgressIndicator.tsx
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

- WarAnalyticsCard
- ActivityTimeline
- ClanHealthGauge
- RecommendationCard
- PromotionCard
- RemovalRecommendationCard
- TrendChart
- WeeklyReportCard
- MonthlyReportCard

## Guiding Principle

> Build small, reusable components.
>
> Assemble pages from reusable components rather than building page-specific UI.

## Revision History

| Version | Date       | Changes                                                                                                              |
| ------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Component Inventory                                                                                          |
| 1.1     | 2026-07-12 | Removed Player and War components, added member comparison components, aligned inventory with final MVP architecture |
