import { SortMetric } from "@/types/member";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SORT_OPTIONS } from "@/lib/coc/constants";

interface SortSelectProps {
  value: SortMetric;
  onValueChange: (value: SortMetric) => void;
  options?: readonly (typeof SORT_OPTIONS)[number][];
}

export function SortSelect({ value, onValueChange, options = SORT_OPTIONS }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-36 md:w-40">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
