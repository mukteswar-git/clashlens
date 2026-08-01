import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { QuickHighlightCardSkeleton } from "./quick-highlight-card-skeleton";

export function QuickHighlightsSkeleton() {
  return (
    <Card className="space-y-6 p-6">
      <div>
        <Skeleton className="mb-2 h-7 w-44" />
        <Skeleton className="h-4 w-40" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <QuickHighlightCardSkeleton key={index} />
        ))}
      </div>
    </Card>
  );
}
