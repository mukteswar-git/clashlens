import { getClan, getCurrentWar } from "@/lib/api";
import { Clan, ClanMember } from "@/types/clan";
import { getTownHallDistribution } from "./distribution.service";
import { getLeagueDistribution } from "./distribution.service";
import { QuickHighlightsData, WarSnapshotData } from "@/types/overview";
import { War } from "@/types/war";

export async function getOverviewData(tag: string) {
  const clan = await getClan(tag);
  const townHallDistribution = getTownHallDistribution(clan.memberList);
  const leagueDistribution = getLeagueDistribution(clan.memberList);
  const quickHighlights = getQuickHighlights(clan.memberList);

  const war = await getCurrentWar(tag);

  return {
    clan,
    war,
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

  const highestTrophies = getHighestMember(
    members,
    (member) => member.trophies
  );

  const highestTownHall = getHighestMember(
    members,
    (member) => member.townHallLevel
  );

  const leader = members.find((member) => member.role === "leader")!;
  return {
    topDonor,
    highestTrophies,
    highestTownHall,
    leader,
  };
}
