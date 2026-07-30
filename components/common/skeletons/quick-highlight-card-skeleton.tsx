import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function QuickHighlightCardSkeleton() {
  return (
    <Card className="space-y-4 p-5">
      <Skeleton className="size-10 rounded-full" />

      <div className="space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-4 w-24" />
      </div>
    </Card>
  );
}