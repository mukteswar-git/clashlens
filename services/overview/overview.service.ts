import { getClan, getCurrentWar } from "@/lib/api";
import { Clan } from "@/types/clan";
import { getTownHallDistribution } from "./distribution.service";

export async function getOverviewData(tag: string) {
  const clan = await getClan(tag);
  const townHallDistribution = getTownHallDistribution(clan.memberList);

  let war = null;

  try {
    war = await getCurrentWar(tag);
  } catch {
    war = null;
  }

  return {
    clan,
    war,
    stats: getOverviewStats(clan),
    performance: getPerformanceMetrics(clan),
    townHallDistribution,
  };
}

function getOverviewStats(clan: Clan) {
  return {
    members: clan.members,
    warWins: clan.warWins,
    winRate: calculateWinRate(clan),
  };
}

function calculateWinRate(clan: Clan): number | null {
  const totalWars = clan.warWins + clan.warLosses + clan.warTies;

  if (totalWars === 0) {
    return null;
  }

  return Math.round((clan.warWins / totalWars) * 100);
}

function getPerformanceMetrics(clan: Clan) {
  const totalDonations = clan.memberList.reduce(
    (sum, member) => sum + member.donations,
    0
  );

  const averageDonations =
    clan.members > 0 ? Math.round(totalDonations / clan.members) : 0;

  return {
    averageDonations,
    warWinStreak: clan.warWinStreak,
  };
}
