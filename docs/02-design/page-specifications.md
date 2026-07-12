# Page Specifications

> **Document Version:** 1.1 </br>
> **Status:** Active </br>
> **Last Updated:** July 2026

## Purpose

This document defines the purpose, responsibilities, content, behavior, and success criteria of every page in ClashLens.

It serves as the implementation blueprint during development.

Each page should have a single responsibility and avoid overlapping with other pages.

## Phase 1 Pages

- Landing Page
- Dashboard Overview
- Members

## 1. Landing Page

### Purpose

Introduce ClashLens and encourage users to search for a clan.

### Primary User

First-time visitor

### Primary Goal

Convert a visitor into an active user by encouraging them to search a public clan.

### Sections

- Hero
- Trusted Metrics
- Features
- Analytics Preview
- FAQ
- About
- Footer

### Primary Action

Search Clan

### Data Source

None

### Success Criteria

The user understands:

- What ClashLens is
- Who it is for
- Why it is useful

and proceeds to search for a clan.

## 2. Dashboard

### Purpose

Provide a high-level summary of the clan.

This page answers:

> "What is the current state of this clan?"

### Data Sources

- Clan Endpoint
- Player Endpoint (derived data where needed)
- Current War Endpoint

### Sections

#### Clan Summary

Display

- Clan Badge
- Clan Name
- Clan Tag
- Clan Level
- Members Count
- War League
- Capital League
- War Frequency
- Required Trophies
- Location

---

#### Distribution Charts

Display

- Town Hall Distribution
- League Distribution

---

#### Current War Snapshot

Display

- War State
- Team Size
- Clan Stars
- Opponent Stars
- Clan Destruction
- Opponent Destruction
- Attacks Used
- Remaining Attacks
- Opponent Information

This is a high-level summary only.

---

#### Quick Highlights

Display standout members.

Display

- Top Donor
- Strongest Heroes
- Highest Trophy Player
- Highest Town Hall
- Top Capital Contributor

---

### Does NOT Include

- Member Comparison Table
- Individual Player Details
- Detailed War Analytics
- Historical Statistics

---

### Primary Action

Navigate to:

- Members

---

### Success Criteria

Within one minute a clan leader should understand:

- Current clan status
- Current war situation
- Overall clan composition
- Standout members

---

# Members

## Purpose

Compare and analyze every clan member.

This page answers:

> "How do my members compare right now?"

---

## Data Source

- Clan Endpoint
- Player Endpoint

---

## Main Component

### Member Comparison Table

#### Columns

- Rank
- Player
- Town Hall
- Role
- Donations / Received
- Dynamic Progress (%)

---

## Features

### Comparison

Compare member progression by:

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines

---

### Sorting

Sort members by:

- Selected Progress Metric
- Donations
- Town Hall
- Role

---

### Responsive Layout

Desktop

- Full comparison table

Tablet

- Simplified comparison table

Mobile

- Compact comparison table

---

### Does NOT Include

- Clan Summary
- Distribution Charts
- Detailed War Information
- Individual Player Profile

---

### Success Criteria

Within one minute a clan leader should be able to:

- Identify the strongest members
- Compare player progression
- Find top contributors
- Rank members by progression or contribution

---

## Navigation Rules

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

## General Page Rules

Every page must:

- Have one primary purpose.
- Avoid duplicate information.
- Load independently.
- Handle loading states.
- Handle API failures.
- Handle empty states.
- Be responsive.

## Design Principles

- Overview provides summaries and key insights.
- Members provide comparison and analysis.
- Each page has a single responsibility.
- No page should duplicate another page's responsibility.

No page should duplicate another page's responsibility.

## Guiding Principle

> Every page should answer one important question.
>
> If a page answers multiple unrelated questions, it should be redesigned.

## Revision History

| Version | Date       | Changes                                                   |
| ------- | ---------- | --------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Page Specifications                               |
| 1.1     | 2026-07-12 | Updated MVP page structure and member comparison workflow |
