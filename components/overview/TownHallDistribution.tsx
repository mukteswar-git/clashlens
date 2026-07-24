import { DistributionChart } from "./DistributionChart";
import { DistributionItem } from "@/types/overview";

type TownHallDistributionProps = {
  data: DistributionItem[];
};

export function TownHallDistribution({ data }: TownHallDistributionProps) {
  return (
    <DistributionChart
      title="Town Hall Distribution"
      data={data}
      formatLabel={(value) => `TH${value}`}
    />
  );
}
