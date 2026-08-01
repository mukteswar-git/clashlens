import { DistributionChart } from "@/components/dashboard/overview/distribution/distribution-chart";
import { DistributionItem } from "@/types/overview";

type LeagueDistributionChartProps = {
  distribution: DistributionItem[];
};

export function LeagueDistributionChart({
  distribution,
}: LeagueDistributionChartProps) {
  return <DistributionChart title="League Distribution" data={distribution} />;
}
