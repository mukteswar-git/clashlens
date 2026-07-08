# Page Specifications

> **Document Version:** 1.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document defines the purpose, responsibilities, content, and behavior of every page in ClashLens.

It serves as the implementation blueprint during development.

Each page should have a single responsibility and avoid overlapping with other pages.

## Phase 1 Pages

- Landing Page
- Dashboard Overview
- Members
- Player Profile
- War

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

## 2. Dashboard Overview

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
- Members
- War League
- War Frequency
- Required Trophies
- Location

#### Key Metrics

Examples

- Total Donations
- Total Received
- Average Trophies
- Average Hero Strength
- Current War Status

Only metrics describing the entire clan.

#### Distribution Charts

- Town Hall Distribution
- League Distribution

#### Current War Snapshot

Display

- War State
- Stars
- Destruction
- Attacks Used
- Remaining Attacks

This is only a summary.

Detailed war information belongs to the War page.

#### Quick Highlights

Highlight standout members.

Examples

- Top Donor
- Strongest Heroes
- Highest Trophy Player
- Highest Town Hall

Each highlight links to the member profile.

### Does NOT Include

- Full Member Table
- Player Progression
- War Attack Log
- Hero Comparison Table

### Primary Action

Navigate to:

- Members
- War
- Player Profile

### Success Criteria

Within one minute a leader should understand:

- Current clan status
- Current war situation
- Strongest members
- Overall clan composition

## 3. Members

### Purpose

Explore every member in the clan.

This page answers:

> "How is each member performing right now?"

### Data Source

Clan Endpoint

Player Endpoint (when opening profile)

### Main Component

Member Table

#### Columns

- Name
- Town Hall
- Role
- League
- Trophies
- Best Trophies
- Donations
- Donations Received
- Donation Ratio
- Hero Strength
  
### Features

#### Search

Search by player name.

#### Filters

- Town Hall
- Role
- League

#### Sorting

- Donations
- Hero Strength
- Town Hall
- Trophies
- Donation Ratio

#### Row Click

Open Player Profile.

### Does NOT Include

- Clan Summary
- Charts
- War Summary

### Success Criteria

The leader can quickly compare and locate members.

## 4. Player Profile

### Purpose

Display detailed information for one player.

This page answers:

> "How strong is this player?"

### Data Source

Player Endpoint

### Sections

#### Basic Information

- Name
- Tag
- Clan
- Role
- League
- Town Hall

#### Heroes

Display

- Barbarian King
- Archer Queen
- Grand Warden
- Royal Champion
- Minion Prince

#### Hero Equipment

Display all available equipment and levels.

#### Pets

Display all unlocked pets.

#### Troops

Display troop levels.

#### Spells

Display spell levels.

#### Siege Machines

Display siege machine levels.

#### Achievements

Display achievements.

### Does NOT Include

- Clan Charts
- Rankings
- Recommendations

### Success Criteria

A leader can understand a player's current progression without opening the game.

## 5. War

### Purpose

Provide detailed information about the current clan war.

This page answers:

> "How is the current war progressing?"

### Data Source

War Endpoint

### Sections

#### War Summary

Display

- Clan
- Opponent
- War State
- Team Size

#### Scoreboard

Display

- Stars
- Destruction
- Attacks Used
- Remaining Attacks

#### Member Performance

For every participant

Display

- Player
- Attacks Used
- Stars
- Destruction

#### Attack Details

Display every attack.

### Empty State

If no active war exists

Display

"No active war found."

Future versions will show historical wars.

### Does NOT Include

- Donations
- Hero Comparison
- Clan Summary

### Success Criteria

The leader can understand the complete status of the current war.

## Navigation Rules

```text
Landing
↓
Overview
↓
Members
↓
Player Profile
Overview
↓
War
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

- Overview provides summaries.
- Members provide exploration.
- Player Profile provides details.
- War provides battle information.

No page should duplicate another page's responsibility.

## Guiding Principle

> Every page should answer one important question.
>
> If a page answers multiple unrelated questions, it should be redesigned.

## Revision History

| Version | Date | Changes |
| --------- | ------ | --------- |
| 1.0 | 2026-07-07 | Initial Page Specifications |
