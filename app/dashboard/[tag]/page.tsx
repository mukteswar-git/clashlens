import { ClanSummary } from "@/components/dashboard/overview/clan-summary";
import { OverviewStats } from "@/components/dashboard/overview/overview-stats";
import { PerformanceOverview } from "@/components/dashboard/overview/performance-overview";
import { LeagueDistributionChart } from "@/components/dashboard/overview/distribution/league-distribution-chart";
import { TownHallDistributionChart } from "@/components/dashboard/overview/distribution/town-hall-distribution-chart";
import { QuickHighlights } from "@/components/dashboard/overview/highlights/quick-highlights";
import { WarSnapshot } from "@/components/dashboard/overview/war/war-snapshot";
import { getOverviewData } from "@/services/overview/overview.service";
import { ErrorState } from "@/components/common/error-state";

type DashboardPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { tag } = await params;

  let overview;

  try {
    overview = await getOverviewData(tag);
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    switch (error.message) {
      case "NOT_FOUND":
        return (
          <ErrorState
            title="Clan not found"
            description="We couldn't find a clan with this tag. Please check the tag and try again."
          />
        );

      case "UNAUTHORIZED":
        return (
          <ErrorState
            title="Authentication failed"
            description="Unable to authenticate with the Clash of Clans API. Please try again later."
          />
        );

      case "FORBIDDEN":
        return (
          <ErrorState
            title="Access denied"
            description="Unable to access the Clash of Clans API at the moment. Please try again later."
          />
        );

      case "RATE_LIMITED":
        return (
          <ErrorState
            title="Too many requests"
            description="The Clash of Clans API rate limit has been reached. Please wait a moment and try again."
          />
        );

      case "SERVER_ERROR":
        return (
          <ErrorState
            title="Service unavailable"
            description="The Clash of Clans API is currently unavailable. Please try again later."
          />
        );

      case "NETWORK_ERROR":
        return (
          <ErrorState
            title="Network error"
            description="Unable to connect to the Clash of Clans API. Please check your internet connection and try again."
          />
        );

      default:
        return (
          <ErrorState
            title="Something went wrong"
            description="An unexpected error occurred. Please try again."
          />
        );
    }
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
