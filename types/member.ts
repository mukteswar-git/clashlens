import { ClanMember } from "./clan";
import { Player } from "./player";

export interface MemberComparison {
  clanMember: ClanMember;
  player: Player;
  heroProgress: number;
  troopProgress: number;
  spellProgress: number;
  equipmentProgress: number;
}

export type CompareMetric = "heroes" | "troops" | "spells" | "equipment";

export type SortMetric =
  | "role"
  | "townHall"
  | "league"
  | "donations"
  | "received"
  | "trophies"
  | "name";

export type MobileColumn = SortMetric | CompareMetric;
