import { getClan, getCurrentWar } from "@/lib/api";
import { Clan } from "@/types/clan";

export async function getOverviewData(tag: string) {
  const clan = await getClan(tag);

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

  if (totalWars === 0) return null;

  return Math.round((clan.warWins / totalWars) * 100);
}
