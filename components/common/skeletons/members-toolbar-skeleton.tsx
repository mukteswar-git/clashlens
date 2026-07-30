import { Skeleton } from "@/components/ui/skeleton";

export function MembersToolbarSkeleton() {
  return (
    <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">
      <Skeleton className="h-7 w-36" />

      <div className="flex gap-4">
        <Skeleton className="h-10 w-36 rounded-md" />
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>
    </div>
  );
}