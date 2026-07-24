import { ClanMember } from "@/types/clan";
import { DistributionItem } from "@/types/overview";

export function getTownHallDistribution(
  members: ClanMember[]
): DistributionItem[] {
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
