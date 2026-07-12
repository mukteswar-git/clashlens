# Available Data Inventory

> **Document Version:** 1.1  
> **Status:** Active  
> **Last Updated:** July 2026

## Purpose

This document serves as the complete inventory of data available to ClashLens.

It defines:

- Which data is available from the Clash of Clans API.
- Which endpoint provides the data.
- How ClashLens uses the data.
- Whether the data is available in Phase 1.
- Whether historical tracking is required.

This document is the primary reference when designing new features.

## Data Classification

Every piece of data belongs to one of four categories.

### 1. Static Data

Information that rarely changes.

Examples:

- Clan Name
- Clan Badge
- Town Hall Level
- Hero Levels

### 2. Live Data

Information that changes frequently and is fetched directly from the Clash of Clans API.

Examples:

- Donations
- Trophies
- Current War
- League

### 3. Derived Data

Information calculated by ClashLens using live API responses.

Examples:

- Donation Ratio
- Hero Strength
- Town Hall Distribution
- Average Clan Trophies

No database is required.

### 4. Historical Data

Information that cannot be obtained from the API alone.

Requires ClashLens to collect data over time.

Examples:

- War Reliability
- Activity Trends
- Promotion Score
- Clan Health

# Clan Endpoint

`GET /clans/{clanTag}`

## Basic Information

| Field          | Phase | Usage        |
| -------------- | :---: | ------------ |
| Clan Name      |  ✅   | Clan Summary |
| Clan Tag       |  ✅   | Clan Summary |
| Clan Badge     |  ✅   | Clan Summary |
| Clan Level     |  ✅   | Clan Summary |
| Members Count  |  ✅   | Clan Summary |
| War League     |  ✅   | Clan Summary |
| Capital League |  ✅   | Clan Summary |

---

## Member Snapshot

Available for every member.

| Field              | Phase | Usage               |
| ------------------ | :---: | ------------------- |
| Player Tag         |  ✅   | Player Identifier   |
| Name               |  ✅   | Members Table       |
| Role               |  ✅   | Members Table       |
| Town Hall Level    |  ✅   | Members Table       |
| Donations          |  ✅   | Contribution        |
| Donations Received |  ✅   | Contribution        |
| League             |  ✅   | League Distribution |
| Trophies           |  ✅   | Quick Highlights    |

---

# Player Endpoint

`GET /players/{playerTag}`

Used to calculate player progression for member comparison.

## Hero Information

| Field          | Phase | Usage                     |
| -------------- | :---: | ------------------------- |
| Barbarian King |  ✅   | Hero Progress Calculation |
| Archer Queen   |  ✅   | Hero Progress Calculation |
| Grand Warden   |  ✅   | Hero Progress Calculation |
| Royal Champion |  ✅   | Hero Progress Calculation |
| Minion Prince  |  ✅   | Hero Progress Calculation |
| Dragon Duke    |  ✅   | Hero Progress Calculation |

---

## Hero Equipment

| Field           | Phase | Usage              |
| --------------- | :---: | ------------------ |
| Equipment Name  |  ✅   | Equipment Progress |
| Equipment Level |  ✅   | Equipment Progress |

---

## Pets

| Field     | Phase | Usage        |
| --------- | :---: | ------------ |
| Pet Name  |  ✅   | Pet Progress |
| Pet Level |  ✅   | Pet Progress |

---

## Troops

| Field          | Phase | Usage          |
| -------------- | :---: | -------------- |
| Troops         |  ✅   | Troop Progress |
| Spells         |  ✅   | Spell Progress |
| Siege Machines |  ✅   | Siege Progress |

---

## Additional Information

| Field        | Phase | Usage            |
| ------------ | :---: | ---------------- |
| Achievements |  🕒   | Future Analytics |
| Labels       |  🕒   | Future           |
| Builder Base |  🕒   | Future           |

---

# War Endpoint

`GET /clans/{clanTag}/currentwar`

## War Information

| Field                | Phase | Usage             |
| -------------------- | :---: | ----------------- |
| War State            |  ✅   | Overview Snapshot |
| Team Size            |  ✅   | Overview Snapshot |
| Clan Stars           |  ✅   | Overview Snapshot |
| Clan Destruction     |  ✅   | Overview Snapshot |
| Attacks Used         |  ✅   | Overview Snapshot |
| Remaining Attacks    |  ✅   | Overview Snapshot |
| Opponent Name        |  ✅   | Opponent Summary  |
| Opponent Badge       |  ✅   | Opponent Summary  |
| Opponent Clan Level  |  ✅   | Opponent Summary  |
| Opponent Stars       |  ✅   | Overview Snapshot |
| Opponent Destruction |  ✅   | Overview Snapshot |

---

# Derived Metrics

Calculated using live API responses.

No database required.

| Metric                  | Formula                                                                                  | Phase |
| ----------------------- | ---------------------------------------------------------------------------------------- | :---: |
| Town Hall Distribution  | Count members by Town Hall                                                               |  ✅   |
| League Distribution     | Count members by League                                                                  |  ✅   |
| Hero Progress           | (Total Hero Levels ÷ Maximum Hero Levels) × 100                                          |  ✅   |
| Hero Equipment Progress | (Total Current Hero Levels ÷ Total Maximum Hero Levels for the player's Town Hall) × 100 |  ✅   |
| Pet Progress            | (Total Pet Levels ÷ Maximum Pet Levels) × 100                                            |  ✅   |
| Troop Progress          | (Total Troop Levels ÷ Maximum Troop Levels) × 100                                        |  ✅   |
| Spell Progress          | (Total Spell Levels ÷ Maximum Spell Levels) × 100                                        |  ✅   |
| Siege Machine Progress  | (Total Siege Machine Levels ÷ Maximum Levels) × 100                                      |  ✅   |

---

# Member Comparison Metrics

Displayed dynamically in the Members page.

| Comparison     | Data Source     | Phase |
| -------------- | --------------- | :---: |
| Heroes         | Player Endpoint |  ✅   |
| Hero Equipment | Player Endpoint |  ✅   |
| Pets           | Player Endpoint |  ✅   |
| Troops         | Player Endpoint |  ✅   |
| Spells         | Player Endpoint |  ✅   |
| Siege Machines | Player Endpoint |  ✅   |

---

# Historical Metrics

The following metrics require historical snapshots and cannot be calculated from live Clash of Clans API responses.

| Metric          | Database Required |
| --------------- | :---------------: |
| Activity Score  |        ✅         |
| War Reliability |        ✅         |
| War Performance |        ✅         |
| Promotion Score |        ✅         |
| Removal Score   |        ✅         |
| Clan Health     |        ✅         |
| Weekly Reports  |        ✅         |
| Monthly Reports |        ✅         |
| Trends          |        ✅         |

## Phase 1 Features Enabled

Using only live Clash of Clans API data, ClashLens can provide:

### Clan

- Clan Summary
- Town Hall Distribution
- League Distribution
- Current War Snapshot

### Members

- Member Comparison
- Compare by:
  - Heroes
  - Hero Equipment
  - Pets
  - Troops
  - Spells
  - Siege Machines
- Dynamic progress calculation
- Independent sorting
- Member rankings

### War

- Current War Status
- Opponent Summary
- Stars Comparison
- Destruction Comparison
- Attack Usage

### Quick Highlights

- Top Donor
- Strongest Heroes
- Highest Trophies
- Highest Town Hall
- Top Capital Contributor

## Explicitly Out of Scope

The following are intentionally excluded from Phase 1.

- Member Evaluation
- Promotion Recommendations
- Removal Suggestions
- War Recommendations
- Clan Health
- Historical Charts
- Weekly Reports
- Predictive Analytics

These features require historical tracking and will be introduced in later phases.

## Guiding Principle

Every feature added to ClashLens must answer three questions:

1. **Is the required data available from the Clash of Clans API?**
2. **Can it be calculated using only live data?**
3. **If not, does it require historical tracking?**

If the answer to the third question is **yes**, the feature belongs to a later phase.

## Future Evolution

```text
Clash of Clans API
        │
        ▼
     Live Data
        │
        ▼
Derived Metrics
        │
        ▼
Historical Tracking
        │
        ▼
Decision Engine
        │
        ▼
Smart Recommendations
```

> **Raw data is the foundation. Historical behavior creates intelligence.**

## Revision History

| Version | Date       | Changes                                                                                                                                  |
| ------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 2026-07-07 | Initial Available Data Inventory                                                                                                         |
| 1.1     | 2026-07-12 | Added member comparison metrics, updated derived metrics, revised war data usage, and aligned Phase 1 features with the final MVP design |
