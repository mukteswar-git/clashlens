# Page Specifications

> **Document Version:** 2.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines the purpose, responsibilities, data sources, content, and success criteria for every page in ClashLens.

Each page should have a single responsibility and contribute to a clear, predictable user experience.

This document reflects the current Phase 1 implementation.

---

# Phase 1 Pages

- Landing
- Dashboard Overview
- Members

---

# 1. Landing

## Purpose

Introduce ClashLens and encourage users to explore live Clash of Clans analytics by searching for a clan.

---

## Primary User

- First-time visitors
- Returning visitors searching for another clan

---

## Primary Goal

Convert a visitor into an active user by encouraging them to search for a public clan.

---

## Sections

- Header
- Hero
- Features
- Feature Highlights
- FAQ
- Footer

---

## Primary Actions

- Search Clan
- View Features

---

## Data Source

None

---

## Success Criteria

The visitor should understand:

- What ClashLens is
- Who it is built for
- What problems it solves

and proceed to search for a clan.

---

# 2. Dashboard Overview

## Purpose

Provide a high-level summary of the current clan.

This page answers:

> **"What is the current state of this clan?"**

---

## Data Sources

- Clan Endpoint
- Player Endpoint (derived metrics)
- Current War Endpoint

---

## Sections

### Clan Summary

Displays

- Clan Badge
- Clan Name
- Clan Tag
- Clan Level
- Member Count
- War League
- Capital League
- War Frequency
- Required Trophies
- Location

---

### Overview Statistics

Displays summary statistics.

Examples

- Members
- War Wins
- Win Rate
- Trophies

---

### Performance Overview

Displays key performance metrics.

Examples

- Average Donations
- Average Raid Medals
- War Win Streak

---

### Distribution Charts

Displays

- Town Hall Distribution
- League Distribution

---

### Quick Highlights

Displays standout members.

Examples

- Top Donor
- Highest Hero Progress
- Highest Trophy Player
- Highest Town Hall
- Top Capital Contributor

---

### Current War Snapshot

Displays

- War State
- Team Size
- Clan Stars
- Opponent Stars
- Clan Destruction
- Opponent Destruction
- Attacks Used
- Remaining Attacks
- Opponent Summary

This section provides only a live summary of the current war.

---

## Does NOT Include

- Member comparison
- Individual player profiles
- Historical analytics
- War history
- Recommendations

---

## Primary Actions

- Refresh Live Data
- Search Another Clan
- Navigate to Members

---

## Success Criteria

Within one minute, a clan leader should understand:

- Overall clan health
- Current war status
- Clan composition
- Standout members
- Overall performance

---

# 3. Members

## Purpose

Compare every clan member using live player progression and contribution metrics.

This page answers:

> **"How do my members compare right now?"**

---

## Data Sources

- Clan Endpoint
- Player Endpoint

---

## Main View

### Member Comparison Table

Displays

- Rank
- Player
- Town Hall
- Role
- Donations
- Donations Received
- League
- Selected Progress Metric

---

## Comparison Metrics

Members can be compared by:

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines

---

## Sorting

Supports sorting by:

- Selected Progress Metric
- Donations
- Town Hall
- Role

---

## Responsive Layout

### Desktop

Full comparison table.

### Tablet

Optimized comparison table.

### Mobile

Compact member cards optimized for touch interaction.

---

## Does NOT Include

- Clan summary
- Distribution charts
- War analytics
- Historical progression
- Individual player profiles

---

## Success Criteria

Within one minute, a clan leader should be able to:

- Compare player progression
- Identify the strongest members
- Identify top contributors
- Sort members by different criteria

---

# Navigation Flow

```text
Landing
    │
    ▼
Dashboard Overview
    │
    ▼
Members
```

---

# Global Behavior

Every page must:

- Load live data from the Clash of Clans API.
- Display loading states.
- Handle API failures gracefully.
- Handle empty states.
- Support responsive layouts.
- Maintain consistent navigation.

---

# Page Responsibilities

| Page     | Primary Responsibility                           |
| -------- | ------------------------------------------------ |
| Landing  | Introduce the product and encourage clan search  |
| Overview | Summarize the current state of the clan          |
| Members  | Compare clan members using live progression data |

---

# Design Principles

- Every page has a single responsibility.
- Information should progress from summary to detail.
- Avoid duplicate information across pages.
- Prioritize clarity over feature density.
- Keep navigation simple and predictable.

---

# Guiding Principle

> Every page should answer one primary question clearly and efficiently. Additional detail should support that purpose rather than compete with it.

---

# Revision History

| Version | Date       | Changes                                                                                                                                                |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.0     | 2026-07-07 | Initial Page Specifications                                                                                                                            |
| 1.1     | 2026-07-12 | Updated MVP page structure and member comparison workflow                                                                                              |
| 2.0     | 2026-07-30 | Rewritten to reflect the production Phase 1 implementation, including Performance Overview, live dashboard behavior, and current navigation structure. |
