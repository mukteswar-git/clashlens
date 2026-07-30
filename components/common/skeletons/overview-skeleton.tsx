import {
  ClanSummarySkeleton,
  DistributionChartSkeleton,
  PerformanceCardSkeleton,
  QuickHighlightsSkeleton,
  StatCardSkeleton,
  WarSnapshotSkeleton,
} from "@/components/common/skeletons";

export function OverviewSkeleton() {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <section className="grid gap-4 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <ClanSummarySkeleton />
        </div>

        <div className="grid gap-4 sm:grid-cols-3 xl:col-span-7">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      </section>

      {/* Performance */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Performance Overview</h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <PerformanceCardSkeleton />
          <PerformanceCardSkeleton />
        </div>
      </section>

      {/* Distribution */}
      <section className="space-y-4">
        <DistributionChartSkeleton rows={3} />
        <DistributionChartSkeleton rows={12} />
      </section>

      {/* War */}
      <WarSnapshotSkeleton />

      {/* Quick Highlights */}
      <QuickHighlightsSkeleton />
    </div>
  );
}
