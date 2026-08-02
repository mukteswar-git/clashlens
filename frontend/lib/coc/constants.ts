import { ClanRole } from "@/types/clan";
import { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";

export const MAX_CLAN_TAG_LENGTH = 12;

export const WAR_STATE_LABELS = {
  preparation: "Preparation Day",
  inWar: "Battle Day",
  warEnded: "War Ended",
  notInWar: "No Active War",
} as const;

export const ROLE_LABELS: Record<ClanRole, string> = {
  leader: "Leader",
  coLeader: "Co-Leader",
  admin: "Elder",
  member: "Member",
};

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

export const ROLE_VARIANTS: Record<ClanRole, BadgeVariant> = {
  leader: "leader",
  coLeader: "coLeader",
  admin: "elder",
  member: "member",
};

export const COMPARE_OPTIONS = [
  {
    value: "heroes",
    label: "Heroes",
  },
  {
    value: "troops",
    label: "Troops",
  },
  {
    value: "spells",
    label: "Spells",
  },
  {
    value: "equipment",
    label: "Equipment",
  },
] as const;

export const SORT_OPTIONS = [
  {
    value: "role",
    label: "Role",
  },
  {
    value: "townHall",
    label: "Town Hall",
  },
  {
    value: "donations",
    label: "Donations",
  },
  {
    value: "received",
    label: "Received",
  },
  {
    value: "trophies",
    label: "Trophies",
  },
  {
    value: "name",
    label: "Name",
  },
] as const;

export const ROLE_PRIORITY = {
  leader: 4,
  coLeader: 3,
  admin: 2,
  member: 1,
} as const;

export const MOBILE_COLUMN_LABELS = {
  role: "Role",
  townHall: "TH",
  league: "League",
  donations: "Donations",
  received: "Received",
  trophies: "Trophies",
  name: "Name",

  heroes: "Heroes",
  troops: "Troops",
  spells: "Spells",
  equipment: "Equipment",
} as const;

export const MOBILE_SORT_OPTIONS = SORT_OPTIONS.filter((option) => option.value !== "name");
