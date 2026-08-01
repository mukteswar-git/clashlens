"use client";

import { MOBILE_SORT_OPTIONS } from "@/lib/coc/constants";
import { CompareMetric, SortMetric } from "@/types/member";

import { CompareSelect } from "./compare-select";
import { SortSelect } from "./sort-select";

interface MobileMemberToolbarProps {
  memberCount: number;
  compareMetric: CompareMetric;
  sortMetric: SortMetric;
  onCompareChange: (value: CompareMetric) => void;
  onSortChange: (value: SortMetric) => void;
}

export function MobileMemberToolbar({
  memberCount,
  compareMetric,
  sortMetric,
  onCompareChange,
  onSortChange,
}: MobileMemberToolbarProps) {
  return (
    <div className="space-y-4 border-b p-4">
      <h2 className="text-lg font-semibold">Members ({memberCount})</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Sort By
          </label>

          <SortSelect
            value={sortMetric}
            onValueChange={onSortChange}
            options={MOBILE_SORT_OPTIONS}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Compare
          </label>

          <CompareSelect
            value={compareMetric}
            onValueChange={onCompareChange}
          />
        </div>
      </div>
    </div>
  );
}
