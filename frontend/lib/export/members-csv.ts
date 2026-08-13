import { ClanRole } from "@/types/clan";
import type { MemberComparison } from "@/types/member";

import type { ExportColumn, ExportSortField, MemberExportOptions } from "@/types/member-export";

const COLUMN_HEADERS: Record<ExportColumn, string> = {
  name: "Name",
  tag: "Player Tag",
  role: "Role",
  townHall: "Town Hall",
  league: "League",
  donations: "Donations",
  received: "Received",
  trophies: "Trophies",
};

const ROLE_LABELS: Record<ClanRole, string> = {
  member: "Member",
  admin: "Elder",
  coLeader: "Co-Leader",
  leader: "Leader",
};

const ROLE_RANK: Record<ClanRole, number> = {
  member: 1,
  admin: 2,
  coLeader: 3,
  leader: 4,
};

function getColumnValue(member: MemberComparison, column: ExportColumn): string | number {
  switch (column) {
    case "name":
      return member.clanMember.name;

    case "tag":
      return member.clanMember.tag;

    case "role":
      return ROLE_LABELS[member.clanMember.role];

    case "townHall":
      return member.clanMember.townHallLevel;

    case "league":
      return member.clanMember.leagueTier.name;

    case "donations":
      return member.clanMember.donations;

    case "received":
      return member.clanMember.donationsReceived;

    case "trophies":
      return member.clanMember.trophies;
  }
}

function getSortValue(member: MemberComparison, sortBy: ExportSortField): string | number {
  if (sortBy === "role") {
    return ROLE_RANK[member.clanMember.role];
  }

  if (sortBy === "league") {
    return member.clanMember.leagueTier.id;
  }

  return getColumnValue(member, sortBy);
}

function compareValues(a: string | number, b: string | number): number {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return String(a).localeCompare(String(b), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

function escapeCsvValue(value: string | number): string {
  const stringValue = String(value);

  if (
    stringValue.includes(",") ||
    stringValue.includes('"') ||
    stringValue.includes("\n") ||
    stringValue.includes("\r")
  ) {
    return `"${stringValue.replaceAll('"', '""')}"`;
  }

  return stringValue;
}

export function generateMembersCsv(
  members: MemberComparison[],
  options: MemberExportOptions
): string {
  const { columns, sortBy, sortOrder } = options;

  const sortedMembers = [...members].sort((a, b) => {
    const result = compareValues(getSortValue(a, sortBy), getSortValue(b, sortBy));

    return sortOrder === "asc" ? result : -result;
  });

  const header = ["S.No.", ...columns.map((column) => COLUMN_HEADERS[column])]
    .map(escapeCsvValue)
    .join(",");

  const rows = sortedMembers.map((member, index) => {
    const values = [index + 1, ...columns.map((column) => getColumnValue(member, column))];

    return values.map(escapeCsvValue).join(",");
  });

  return [header, ...rows].join("\r\n");
}
