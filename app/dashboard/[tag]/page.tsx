import { ClanSummary } from "@/components/dashboard/overview/ClanSummary";
import { OverviewStats } from "@/components/dashboard/overview/OverviewStats";
import { PerformanceOverview } from "@/components/dashboard/overview/PerformanceOverview";
import { LeagueDistributionChart } from "@/components/dashboard/overview/distribution/LeagueDistributionChart";
import { TownHallDistributionChart } from "@/components/dashboard/overview/distribution/TownHallDistributionChart";
import { QuickHighlights } from "@/components/dashboard/overview/highlights/QuickHighlights";
import { WarSnapshot } from "@/components/dashboard/overview/war/WarSnapshot";
import { getOverviewData } from "@/services/overview/overview.service";

type DashboardPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function DashboardPage({
  params,
}: DashboardPageProps) {
  const { tag } = await params;

  const overview = await getOverviewData(tag).catch(() => null);

  if (!overview) {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Clan not found</h1>
        <p>Please check the clan tag and try again.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 py-10">

      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="xl:basis-[40%]">
          <ClanSummary clan={overview.clan} />
        </div>

        <div className="xl:basis-[60%]">
          <OverviewStats stats={overview.stats} />
        </div>
      </div>

      <PerformanceOverview performance={overview.performance} />

      <TownHallDistributionChart data={overview.townHallDistribution} />

      <LeagueDistributionChart distribution={overview.leagueDistribution} />

      <WarSnapshot war={overview.warSnapshot} />

      <QuickHighlights highlights={overview.quickHighlights} />
    </main>
  );
}