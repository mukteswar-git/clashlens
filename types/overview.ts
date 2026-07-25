import { ClanMember } from "./clan";
import { WarState } from "./war";

export interface DistributionItem {
  label: string;
  count: number;
  iconUrl?: string;
}

export interface WarSnapshotData {
  state: WarState;

  teamSize: number;

  clan: {
    name: string;
    badgeUrl: string;
    stars: number;
    destruction: number;
    attacks: number;
  };

  opponent: {
    name: string;
    badgeUrl: string;
    stars: number;
    destruction: number;
    attacks: number;
  };
}

export interface QuickHighlightsData {
  topDonor: ClanMember;
  highestTrophies: ClanMember;
  highestTownHall: ClanMember;
  leader: ClanMember;
}
