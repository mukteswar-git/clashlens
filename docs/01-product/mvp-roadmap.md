# MVP Roadmap

> **Document Version:** 1.0  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This roadmap defines the planned evolution of ClashLens from a live clan viewer into a complete decision-support platform for Clash of Clans clan leaders.

Each phase is independently usable while laying the foundation for future capabilities.

## Product Evolution

```text
Phase 1
Live Analytics
        │
        ▼
Phase 2
Decision Engine Design
        │
        ▼
Phase 3
Clan Tracking
        │
        ▼
Phase 4
Smart Recommendations
```

## Phase 1 — Live Analytics MVP

### Objective

Allow any player to search any public Clash of Clans clan and instantly explore its current statistics through a modern, responsive dashboard.

No account is required.

No historical data is stored.

No recommendations are generated.

### Why This Phase Exists

The primary objective is to remove friction.

Users should receive value immediately without creating an account.

This phase validates that players find the platform useful before introducing more advanced features.

### Core Features

#### Landing Page

- Responsive marketing website
- Product overview
- Feature highlights
- FAQ
- Search call-to-action

#### Clan Search

- Search by clan tag
- Input validation
- Invalid clan handling
- Loading states

### Dashboard

#### Overview

- Clan Summary
- Town Hall Distribution
- League Distribution
- Hero Strength Overview
- Donation Leaderboard
- Current War Summary

#### Members

- Search members
- Sort members
- Filter members
- Player profile navigation

#### Player Profile

Display player progression including:

- Heroes
- Hero Equipment
- Pets
- Troops
- Spells
- Siege Machines
- Achievements

#### War

Display:

- War status
- Opponent clan
- Stars earned
- Destruction percentage
- Attacks used

### User Experience

- Responsive Design
- Skeleton Loading
- Error States
- Empty States
- Optimized Performance

### Technical Scope

#### Data Source

Official Clash of Clans Public API

#### Storage

No historical database.

Only temporary application state.

### Success Criteria

Users can:

- Search any public clan.
- Understand the current state of the clan.
- Compare members.
- Explore player progression.
- Review the current war.
- Navigate the application easily.

## Phase 2 — Decision Engine Design

### Objective

Design a transparent and explainable evaluation framework for clan management.

This phase defines _how_ ClashLens will make recommendations.

No historical calculations are implemented yet.

### Why This Phase Exists

Statistics alone do not solve leadership problems.

Before building analytics, we must define what makes:

- A reliable player
- A valuable contributor
- A promotion candidate
- A removal candidate

The goal is to establish clear rules before writing implementation code.

### Deliverables

Design documentation for:

- War Reliability
- War Performance
- Activity Evaluation
- Donation Evaluation
- Clan Games Evaluation
- Capital Raid Evaluation
- Loyalty Evaluation

### Decision Rules

Design evaluation logic for:

- Promotion Recommendation
- War Selection
- Removal Recommendation
- Recognition Awards

### Success Criteria

Every recommendation is:

- Explainable
- Objective
- Based on measurable criteria

## Phase 3 — Clan Tracking

### Objective

Allow clan leaders to track their clans and begin collecting historical data.

Historical analytics start from the day tracking is enabled.

### Why This Phase Exists

The Clash of Clans API only provides live information.

Historical insights require data collected over time.

### User Flow

```text
Search Clan
↓
Track This Clan
↓
Create Account
↓
Historical Data Collection Begins
↓
Advanced Analytics Unlock
```

---

### Technical Features

- User Authentication
- PostgreSQL
- Prisma ORM
- Scheduled Data Synchronization
- Background Jobs

### Historical Data

Store:

- War History
- Member Snapshots
- Donation History
- Hero Progression
- Clan Growth

### Success Criteria

Tracked clans accumulate reliable historical data for future analytics.

## Phase 4 — Smart Recommendations

### Objective

Transform historical data into actionable recommendations.

ClashLens becomes a decision-support platform.

### Features

#### Player Recommendations

- Promotion Candidates
- Removal Candidates
- Members Requiring Attention
- Top Contributors

#### War Recommendations

- Recommended War Team
- War Readiness
- Reliability Analysis

#### Clan Insights

- Clan Health
- Contribution Trends
- Activity Trends
- Donation Trends
- Growth Trends

### Reports

Automatically generate:

- Weekly Reports
- Monthly Reports
- Performance Summaries

### Success Criteria

Leaders rely on ClashLens for management decisions rather than manually evaluating every member.

## Product Growth Strategy

### Stage 1

Show live data better than the game.

↓

### Stage 2

Define how players should be evaluated.

↓

### Stage 3

Collect historical data.

↓

### Stage 4

Generate intelligent recommendations.

## Future Possibilities

The following features are intentionally outside the MVP roadmap but remain possible future expansions.

- Multi-clan management
- Clan comparison
- Recruitment assistant
- AI-powered strategy suggestions
- Discord integration
- Notification system
- Seasonal performance reports
- Public clan leaderboards

## Guiding Principles

Every new feature must satisfy at least one of the following goals:

- Improve clarity.
- Reduce manual work.
- Help leaders make better decisions.
- Be explainable using available data.

Features that do not support these goals should not be included in the MVP.

## Roadmap Summary

|Phase|Primary Goal|Historical Data|User Account|
|---|---|---|---|
|**Phase 1**|Live Analytics Dashboard|❌|❌|
|**Phase 2**|Decision Engine Design|❌|❌|
|**Phase 3**|Clan Tracking & Data Collection|✅|✅|
|**Phase 4**|Smart Recommendations & Reports|✅|✅|

---

## Roadmap Philosophy

> **First, help users understand their clan.**
>
> **Then, help them improve it.**

## Revision History

| Version | Date | Changes |
| --------- | ------ | --------- |
| 1.0 | 2026-07-07 | Initial MVP Roadmap |
