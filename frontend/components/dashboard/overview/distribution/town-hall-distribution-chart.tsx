import { DistributionChart } from "./distribution-chart";
import { DistributionItem } from "@/types/overview";

type TownHallDistributionChartProps = {
  data: DistributionItem[];
};

export function TownHallDistributionChart({ data }: TownHallDistributionChartProps) {
  return <DistributionChart title="Town Hall Distribution" data={data} />;
}
