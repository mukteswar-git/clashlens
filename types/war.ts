import { BadgeUrls } from "./clan";

// Shared Types

export type WarState = "notInWar" | "preparation" | "inWar" | "warEnded";

export interface WarAttack {
  attackerTag: string;
  defenderTag: string;

  stars: number;
  destructionPercentage: number;

  order: number;
  duration: number;
}

export interface WarMember {
  tag: string;
  name: string;

  townHallLevel: number;
  mapPosition: number;

  attacks?: WarAttack[];

  bestOpponentAttack?: WarAttack;
}

export interface WarClan {
  tag: string;
  name: string;
  badgeUrls: BadgeUrls;

  clanLevel: number;

  stars: number;
  destructionPercentage: number;
  expEarned: number;

  attacks: number;

  members: WarMember[];
}

// Main Type

export interface War {
  state: WarState;

  teamSize: number;

  clan: WarClan;
  opponent: WarClan;

  preparationStartTime: string;
  startTime: string;
  endTime: string;
}
