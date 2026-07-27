import { Progress } from "@/components/ui/progress";

interface ProgressCellProps {
  value: number;
}

export function ProgressCell({ value }: ProgressCellProps) {
  let progressColor = "";

  if (value >= 70) {
    progressColor = "bg-green-500";
  } else if (value >= 40) {
    progressColor = "bg-amber-500";
  } else {
    progressColor = "bg-red-500";
  }

  return (
    <div className="flex min-w-22.5 items-center gap-2">
      <Progress
        value={value}
        className="h-2 flex-1"
        indicatorClassName={progressColor}
      />
      <span className="w-10 text-right text-xs font-medium">{value}%</span>
    </div>
  );
}
