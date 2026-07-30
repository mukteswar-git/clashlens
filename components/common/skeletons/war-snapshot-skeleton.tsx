import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function WarClanSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Badge */}
      <Skeleton className="size-20 rounded-xl" />

      {/* Clan Name */}
      <Skeleton className="h-6 w-36" />

      {/* Stats */}
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2"
          >
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WarSnapshotSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b p-6">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      <div className="grid gap-8 p-8 md:grid-cols-2">
        <WarClanSkeleton />
        <WarClanSkeleton />
      </div>

      <div className="flex items-center justify-between border-t px-6 py-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </Card>
  );
}