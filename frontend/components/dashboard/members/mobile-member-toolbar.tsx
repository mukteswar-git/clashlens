"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
  onExtract: () => void;
}

export function MobileMemberToolbar({
  memberCount,
  compareMetric,
  sortMetric,
  onCompareChange,
  onSortChange,
  onExtract,
}: MobileMemberToolbarProps) {
  return (
    <div className="space-y-4 border-b p-4">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-lg font-semibold">Members ({memberCount})</h2>

        {/* Tablet controls */}
        <div className="hidden items-center gap-4 md:flex lg:hidden">
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Sort by</label>

            <SortSelect
              value={sortMetric}
              onValueChange={onSortChange}
              options={MOBILE_SORT_OPTIONS}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Compare</label>

            <CompareSelect value={compareMetric} onValueChange={onCompareChange} />
          </div>

          <Button type="button" variant="outline" size="sm" onClick={onExtract}>
            <Download />
            Extract
          </Button>
        </div>
      </div>

      {/* Mobile controls */}
      <div className="space-y-4 md:hidden">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Sort By</label>

          <SortSelect
            value={sortMetric}
            onValueChange={onSortChange}
            options={MOBILE_SORT_OPTIONS}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Compare</label>

          <CompareSelect value={compareMetric} onValueChange={onCompareChange} />
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={onExtract}>
          <Download />
          Extract
        </Button>
      </div>
    </div>
  );
}
