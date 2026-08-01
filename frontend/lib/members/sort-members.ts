import { ROLE_PRIORITY } from "@/lib/coc/constants";
import { MemberComparison, SortMetric } from "@/types/member";

export function sortMembers(
  members: MemberComparison[],
  sortMetric: SortMetric
) {
  const sortedMembers = [...members];

  sortedMembers.sort((a, b) => {
    switch (sortMetric) {
      case "name":
        return a.clanMember.name.localeCompare(b.clanMember.name);

      case "townHall":
        return b.clanMember.townHallLevel - a.clanMember.townHallLevel;

      case "league":
        return b.clanMember.leagueTier.id - a.clanMember.leagueTier.id;

      case "donations":
        return b.clanMember.donations - a.clanMember.donations;

      case "received":
        return b.clanMember.donationsReceived - a.clanMember.donationsReceived;

      case "trophies":
        return b.clanMember.trophies - a.clanMember.trophies;

      case "role":
        return (
          ROLE_PRIORITY[b.clanMember.role] - ROLE_PRIORITY[a.clanMember.role]
        );

      default:
        return 0;
    }
  });

  return sortedMembers;
}
