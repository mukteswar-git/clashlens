import { DistributionChart } from "@/components/dashboard/overview/distribution/DistributionChart";
import { DistributionItem } from "@/types/overview";

type LeagueDistributionChartProps = {
  distribution: DistributionItem[];
};

export function LeagueDistributionChart({
  distribution,
}: LeagueDistributionChartProps) {
  return <DistributionChart title="League Distribution" data={distribution} />;
}
