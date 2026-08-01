import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DistributionItem } from "@/types/overview";
import Image from "next/image";

type DistributionChartProps = {
  title: string;
  data: DistributionItem[];
};

export function DistributionChart({ title, data }: DistributionChartProps) {
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

  const totalMembers = data.reduce((sum, item) => sum + item.count, 0);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {data.map((item) => {
          const width = Math.max((item.count / totalMembers) * 100, 4);

          return (
            <div key={item.label} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  {item.iconUrl && (
                    <Image
                      src={item.iconUrl}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                  )}
                  <span>{item.label}</span>
                </div>
                <span className="text-muted-foreground">{item.count}</span>
              </div>

              <div
                className="bg-muted h-2.5 overflow-hidden rounded-full"
                role="progressbar"
                aria-label={`${item.label} distribution`}
                aria-valuenow={item.count}
                aria-valuemin={0}
                aria-valuemax={totalMembers}
              >
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
