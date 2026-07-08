# Available Data Inventory

> **Document Version:** 1.0  
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

## Clan Endpoint

`GET /clans/{clanTag}`

### Basic Information

|Field|Phase|Usage|
|---|:-:|---|
|Clan Name|✅|Display|
|Clan Tag|✅|Unique Identifier|
|Clan Badge|✅|Clan Summary|
|Clan Level|✅|Clan Summary|
|Description|✅|Clan Summary|
|Clan Type|✅|Open / Invite / Closed|
|Required Trophies|✅|Clan Summary|
|Members Count|✅|Clan Summary|
|War League|✅|Clan Summary|
|War Frequency|✅|Clan Summary|
|Location|✅|Clan Summary|
|Labels|✅|Display|
|Capital League|🕒|Future Analytics|
|Capital Points|🕒|Future Analytics|

### Member Snapshot

Available for every member.

|Field|Phase|Usage|
|---|:-:|---|
|Player Tag|✅|Primary Key|
|Name|✅|Member Table|
|Role|✅|Member Table|
|Town Hall Level|✅|Progress|
|Experience Level|❌|Ignored|
|Trophies|✅|Rankings|
|Best Trophies|✅|Rankings|
|Builder Base Trophies|✅|Display|
|Donations|✅|Contribution|
|Donations Received|✅|Contribution|
|League|✅|Rankings|

## Player Endpoint

`GET /players/{playerTag}`

Used when viewing a specific player.

### Hero Information

|Field|Phase|Usage|
|---|:-:|---|
|Barbarian King|✅|Profile|
|Archer Queen|✅|Profile|
|Grand Warden|✅|Profile|
|Royal Champion|✅|Profile|
|Minion Prince|✅|Profile (when available)|

### Hero Equipment

|Field|Phase|Usage|
|---|:-:|---|
|Equipment Name|✅|Player Profile|
|Equipment Level|✅|Player Profile|

### Pets

|Field|Phase|Usage|
|---|:-:|---|
|Pet Name|✅|Profile|
|Pet Level|✅|Profile|

### Troops

|Field|Phase|Usage|
|---|:-:|---|
|Troops|✅|Player Progress|
|Spells|✅|Player Progress|
|Siege Machines|✅|Player Progress|

### Additional Information

|Field|Phase|Usage|
|---|:-:|---|
|Achievements|🕒|Future|
|Labels|🕒|Future|
|Builder Base|🕒|Future Expansion|

## War Endpoint

`GET /clans/{clanTag}/currentwar`

### War Information

| Field | Phase | Purpose |
| --- | :-: | --- |
| War State | ✅ | Display current war status |
| Team Size | ✅ | Display war format (15v15, 30v30, etc.) |
| Clan Stars | ✅ | Show clan performance |
| Opponent Stars | ✅ | Compare against opponent |
| Destruction Percentage | ✅ | Show war progress |
| Attacks Used | ✅ | Track attack usage |
| Remaining Attacks | ✅ | Show attacks still available |
| Opponent Information | ✅ | Display opponent clan details |

### Member War Data

| Field | Phase | Purpose |
| --- | :-: | --- |
| Attacks Used | ✅ | Display attacks used by the member |
| Stars Earned | ✅ | Display total stars earned |
| Destruction | ✅ | Display total destruction percentage |
| Defender Tag | ✅ | Link each attack to the defending base |

## Derived Metrics

Calculated using live API responses.

No database required.

|Metric|Formula|Phase|
|---|---|:-:|
|Donation Ratio|Donations ÷ Received|✅|
|Total Clan Donations|Sum of all member donations|✅|
|Total Clan Received|Sum of all received troops|✅|
|Average Clan Trophies|Mean of member trophies|✅|
|Average Builder Trophies|Mean of builder trophies|✅|
|Town Hall Distribution|Count members by TH|✅|
|League Distribution|Count members by League|✅|
|Hero Strength|Sum of hero levels|✅|
|Strongest Heroes Ranking|Sort by Hero Strength|✅|

## Historical Metrics

The following metrics **cannot** be calculated from live API responses.

These require ClashLens to store historical snapshots.

|Metric|Database Required|
|---|:-:|
|War Reliability|✅|
|War Performance|✅|
|Activity Score|✅|
|Promotion Score|✅|
|Removal Score|✅|
|Loyalty Score|✅|
|Clan Health|✅|
|Contribution Score|✅|
|Weekly Reports|✅|
|Monthly Reports|✅|
|Trends|✅|
|Predictions|✅|

## Phase 1 Features Enabled

Using only live API data, ClashLens can provide:

### Clan

- Clan Summary
- Labels
- Town Hall Distribution
- League Distribution

### Members

- Search
- Sort
- Filters
- Rankings

### War

- Live war status
- Opponent information
- Attack usage
- Stars earned
- Destruction percentage

### Player

- Hero Progress
- Hero Equipment
- Pets
- Troops
- Spells

### Leaderboards

- Top Donors
- Highest Hero Strength
- Highest Trophies
- Highest Best Trophy Count
- Highest Town Hall
- Highest Donation Ratio

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

| Version | Date | Changes |
| --------- | ------ | --------- |
| 1.0 | 2026-07-07 | Initial Available Data Inventory |
