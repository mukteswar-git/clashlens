import { Swords, Trophy, Users } from "lucide-react";
import { StatCard } from "@/components/common/stat-card/StatCard";

type OverviewStatsProps = {
  stats: {
    members: number;
    warWins: number;
    winRate: number | null;
  };
};

export function OverviewStats({ stats }: OverviewStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard
        icon={Users}
        title="Members"
        value={`${stats.members}/50`}
        description="Clan Members"
        iconClassName="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
      />

      <StatCard
        icon={Swords}
        title="Win Rate"
        value={stats.winRate !== null ? `${stats.winRate}%` : "--"}
        description="Overall Win Rate"
        iconClassName="bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
      />

      <StatCard
        icon={Trophy}
        title="Wars Won"
        value={stats.warWins}
        description="Total Clan Wins"
        iconClassName="bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400"
      />
    </div>
  );
}
