import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompareMetric } from "@/types/member";
import { COMPARE_OPTIONS } from "@/lib/coc/constants";

interface CompareSelectProps {
  value: CompareMetric;
  onValueChange: (value: CompareMetric) => void;
}

export function CompareSelect({ value, onValueChange }: CompareSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-36 md:w-40">
        <SelectValue placeholder="Compare" />
      </SelectTrigger>

      <SelectContent>
        {COMPARE_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
