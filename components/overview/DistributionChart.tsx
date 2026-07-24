import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DistributionItem } from "@/types/overview";

type DistributionChartProps = {
  title: string;
  data: DistributionItem[];
  formatLabel: (value: number) => string;
};

export function DistributionChart({
  title,
  data,
  formatLabel,
}: DistributionChartProps) {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-sm">No data available.</p>
        </CardContent>
      </Card>
    );
  }

  // const maxCount = Math.max(...data.map((item) => item.count));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.map((item) => {
          const totalMembers = data.reduce((sum, item) => sum + item.count, 0);
          const width = Math.max((item.count / totalMembers) * 100, 4);

          return (
            <div key={item.value} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>{formatLabel(item.value)}</span>
                <span className="text-muted-foreground">{item.count}</span>
              </div>

              <div className="bg-muted h-2.5 overflow-hidden rounded-full">
                <div
                  className="bg-primary h-full rounded-full transition-all"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
