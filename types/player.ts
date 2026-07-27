import { BadgeUrls, ClanRole, League } from "./clan";

// Shared Types

export interface PlayerClan {
  tag: string;
  name: string;
  badgeUrls: BadgeUrls;
  clanLevel: number;
}

export type Village = "home" | "builderBase";

export interface ProgressionItem {
  name: string;
  level: number;
  maxLevel: number;
  village: Village;
}

// Player

export interface Player {
  tag: string;
  name: string;

  badges: BadgeUrls; // ← Add this

  townHallLevel: number;
  townHallWeaponLevel: number;

  expLevel: number;

  trophies: number;
  bestTrophies: number;

  warStars: number;

  role: ClanRole;

  clan: PlayerClan;
  league: League;

  heroes: ProgressionItem[];
  heroEquipment: ProgressionItem[];
  pets: ProgressionItem[];
  troops: ProgressionItem[];
  spells: ProgressionItem[];
}
