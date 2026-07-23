import { PerformanceCard } from "./PerformanceCard";

type PerformanceMetric = {
  id: string;
  title: string;
  subtitle: string;
  value: string | number;
  icon: string;
};

type PerformanceOverviewProps = {
  performance: {
    averageDonations: number;
    warWinStreak: number;
  };
};

export function PerformanceOverview({ performance }: PerformanceOverviewProps) {
  const performanceMetrics: PerformanceMetric[] = [
    {
      id: "donations",
      title: "Avg. Donations per Member",
      subtitle: "Current Season",
      value: performance.averageDonations,
      icon: "/coc/icons/clan-castle.webp",
    },
    {
      id: "war-win-streak",
      title: "War Win Streak",
      subtitle: "Current Streak",
      value: performance.warWinStreak,
      icon: "/coc/icons/war-streak.webp",
    },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-2xl border p-6">
      <h2 className="text-xl font-semibold">Performance Overview</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {performanceMetrics.map((metric) => (
          <PerformanceCard key={metric.id} {...metric} />
        ))}
      </div>
    </div>
  );
}
