import { Skeleton } from "@/components/ui/skeleton";

interface MembersTableSkeletonProps {
  rows?: number;
}

export function MembersTableSkeleton({ rows = 12 }: MembersTableSkeletonProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {Array.from({ length: 9 }).map((_, index) => (
              <th key={index} className="px-4 py-4">
                <Skeleton className="h-4 w-16" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              <td className="px-4 py-4">
                <Skeleton className="h-4 w-4" />
              </td>

              <td className="px-4 py-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </td>

              <td className="px-4 py-4">
                <Skeleton className="h-4 w-10" />
              </td>

              <td className="px-4 py-4">
                <Skeleton className="h-6 w-20 rounded-full" />
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="size-5 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </td>

              <td className="px-4 py-4">
                <Skeleton className="h-4 w-16" />
              </td>

              <td className="px-4 py-4">
                <Skeleton className="h-4 w-16" />
              </td>

              <td className="px-4 py-4">
                <Skeleton className="h-4 w-12" />
              </td>

              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-3 flex-1 rounded-full" />
                  <Skeleton className="h-4 w-8" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
