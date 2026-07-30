import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ClanSummarySkeleton() {
  return (
    <Card className="flex items-center gap-5 p-6">
      <Skeleton className="size-20 rounded-xl shrink-0" />

      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-28" />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-5 w-32" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>
      </div>
    </Card>
  );
}
