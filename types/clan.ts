// Shared Types

export interface BadgeUrls {
  small: string;
  medium: string;
  large: string;
}

export interface LeagueIconUrls {
  small: string;
  tiny: string;
}

export interface League {
  id: number;
  name: string;
  iconUrls: LeagueIconUrls;
}

export interface LeagueTierIconUrls {
  small: string;
  medium: string;
  large: string;
}

export interface LeagueTier {
  id: number;
  name: string;
  iconUrls: LeagueTierIconUrls;
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
}

export interface LabelIconUrls {
  small: string;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: LabelIconUrls;
}

// Member Types

export type ClanRole = "member" | "admin" | "coLeader" | "leader";

export interface ClanMember {
  tag: string;
  name: string;
  role: ClanRole;

  townHallLevel: number;
  expLevel: number;

  league: League;
  leagueTier: LeagueTier;

  trophies: number;
  builderBaseTrophies: number;

  donations: number;
  donationsReceived: number;

  clanRank: number;
}

// Clan Type

export interface Clan {
  tag: string;
  name: string;
  badgeUrls: BadgeUrls;

  clanLevel: number;
  clanPoints: number;

  members: number;
  memberList: ClanMember[];

  warLeague: League;
  capitalLeague: League;

  labels: Label[];

  location: Location;

  requiredTrophies: number;

  warWins: number;
  warWinStreak: number;
  warTies: number;
  warLosses: number;
}
