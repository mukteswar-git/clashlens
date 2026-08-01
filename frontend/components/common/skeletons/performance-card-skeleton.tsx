import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PerformanceCardSkeleton() {
  return (
    <Card className="flex items-center gap-5 p-6">
      {/* Icon */}
      <Skeleton className="size-14 shrink-0 rounded-lg" />

      {/* Content */}
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-40" />

        <Skeleton className="h-3 w-24" />

        <Skeleton className="h-10 w-20" />
      </div>
    </Card>
  );
}
