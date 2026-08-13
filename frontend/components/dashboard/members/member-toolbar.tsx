import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

import { CompareMetric, SortMetric } from "@/types/member";
import { CompareSelect } from "./compare-select";
import { SortSelect } from "./sort-select";

interface MemberToolbarProps {
  memberCount: number;
  compareMetric: CompareMetric;
  sortMetric: SortMetric;
  onCompareChange: (value: CompareMetric) => void;
  onSortChange: (value: SortMetric) => void;
  onExtract: () => void;
}

export function MemberToolbar({
  memberCount,
  compareMetric,
  sortMetric,
  onCompareChange,
  onSortChange,
  onExtract,
}: MemberToolbarProps) {
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle>Members ({memberCount})</CardTitle>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by</span>

            <SortSelect value={sortMetric} onValueChange={onSortChange} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Compare</span>

            <CompareSelect value={compareMetric} onValueChange={onCompareChange} />
          </div>

          <Button type="button" variant="outline" size="sm" onClick={onExtract}>
            <Download />
            Extract
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}
