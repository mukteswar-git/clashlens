import { ClanSummary } from "@/components/dashboard/overview/ClanSummary";
import { OverviewStats } from "@/components/dashboard/overview/OverviewStats";
import { PerformanceOverview } from "@/components/overview/PerformanceOverview";
import { TownHallDistribution } from "@/components/overview/TownHallDistribution";
import { getOverviewData } from "@/services/overview/overview.service";

type DashboardPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
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
    <main className="container mx-auto flex flex-col gap-8 py-10">
      <div className="flex gap-6">
        <div className="basis-[40%]">
          <ClanSummary clan={overview.clan} />
        </div>

        <div className="basis-[60%]">
          <OverviewStats stats={overview.stats} />
        </div>
      </div>

      <PerformanceOverview performance={overview.performance} />

      <TownHallDistribution data={overview.townHallDistribution} />
    </main>
  );
}
