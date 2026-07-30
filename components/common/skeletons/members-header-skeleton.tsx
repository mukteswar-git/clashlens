import { Skeleton } from "@/components/ui/skeleton";

export function MembersHeaderSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-10 w-40" />
      <Skeleton className="h-5 w-80 max-w-full" />
    </div>
  );
}