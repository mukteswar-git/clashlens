import { Clan, ClanMember } from "../../types/clan.js";
import { OverviewData, QuickHighlightsData, WarSnapshotData } from "../../types/overview.js";
import { War } from "../../types/war.js";
import { getClan } from "../coc/clan.js";
import { getCurrentWar } from "../coc/war.js";
import { getLeagueDistribution, getTownHallDistribution } from "./distribution.service.js";

export async function getOverviewData(tag: string): Promise<OverviewData> {
  const clan = await getClan(tag);
  const townHallDistribution = getTownHallDistribution(clan.memberList);
  const leagueDistribution = getLeagueDistribution(clan.memberList);
  const quickHighlights = getQuickHighlights(clan.memberList);

  const war = await getCurrentWar(tag);

  return {
    clan,
    stats: getOverviewStats(clan),
    performance: getPerformanceMetrics(clan),
    townHallDistribution,
    leagueDistribution,
    warSnapshot: getWarSnapshot(war),
    quickHighlights,
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
  const totalDonations = clan.memberList.reduce((sum, member) => sum + member.donations, 0);

  const averageDonations = clan.members > 0 ? Math.round(totalDonations / clan.members) : 0;

  return {
    averageDonations,
    warWinStreak: clan.warWinStreak,
  };
}

function getWarSnapshot(war: War): WarSnapshotData {
  return {
    state: war.state,
    teamSize: war.teamSize,
    clan: {
      name: war.clan.name,
      badgeUrl: war.clan.badgeUrls.medium,
      stars: war.clan.stars,
      destruction: war.clan.destructionPercentage,
      attacks: war.clan.attacks,
    },
    opponent: {
      name: war.opponent.name,
      badgeUrl: war.opponent.badgeUrls.medium,
      stars: war.opponent.stars,
      destruction: war.opponent.destructionPercentage,
      attacks: war.opponent.attacks,
    },
  };
}

function getHighestMember(
  members: ClanMember[],
  selector: (member: ClanMember) => number
): ClanMember {
  let best = members[0];

  for (const member of members) {
    if (selector(member) > selector(best)) {
      best = member;
    }
  }

  return best;
}

function getQuickHighlights(members: ClanMember[]): QuickHighlightsData {
  const topDonor = getHighestMember(members, (member) => member.donations);

  const highestTrophies = getHighestMember(members, (member) => member.trophies);

  const highestTownHall = getHighestMember(members, (member) => member.townHallLevel);

  const leader = members.find((member) => member.role === "leader")!;
  return {
    topDonor,
    highestTrophies,
    highestTownHall,
    leader,
  };
}
