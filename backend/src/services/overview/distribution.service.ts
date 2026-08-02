import { ClanMember, LeagueTier } from "../../types/clan.js";
import { DistributionItem } from "../../types/overview.js";

export function getTownHallDistribution(members: ClanMember[]): DistributionItem[] {
  const distribution = new Map<number, number>();

  for (const member of members) {
    const currentCount = distribution.get(member.townHallLevel) ?? 0;

    distribution.set(member.townHallLevel, currentCount + 1);
  }

  return [...distribution.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([value, count]) => ({
      label: `TH${value}`,
      count,
    }));
}

export function getLeagueDistribution(members: ClanMember[]): DistributionItem[] {
  const distribution = new Map<number, { leagueTier: LeagueTier; count: number }>();

  for (const member of members) {
    const currentDistribution = distribution.get(member.leagueTier.id) ?? {
      leagueTier: member.leagueTier,
      count: 0,
    };

    distribution.set(member.leagueTier.id, {
      leagueTier: member.leagueTier,
      count: currentDistribution.count + 1,
    });
  }

  return [...distribution.values()]
    .sort((a, b) => {
      if (a.leagueTier.name === "Unranked") return 1;
      if (b.leagueTier.name === "Unranked") return -1;

      return b.leagueTier.id - a.leagueTier.id;
    })
    .map(({ leagueTier, count }) => ({
      label: leagueTier.name,
      iconUrl: leagueTier.iconUrls.small,
      count,
    }));
}
