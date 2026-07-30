import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface DistributionChartSkeletonProps {
  rows?: number;
}

export function DistributionChartSkeleton({
  rows = 8,
}: DistributionChartSkeletonProps) {
  return (
    <Card className="space-y-6 p-6">
      {/* Title */}
      <Skeleton className="h-6 w-48" />

      {/* Distribution rows */}
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-24" />

            <div className="flex items-center gap-4">
              <Skeleton
                className="h-3 flex-1 rounded-full"
                style={{
                  width: `${100 - index * 8}%`,
                }}
              />

              <Skeleton className="h-4 w-6" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
