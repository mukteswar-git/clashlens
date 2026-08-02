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
    <>
      {/* Vertical: base and lg */}
      <div className="flex flex-col items-center gap-1 sm:hidden lg:flex xl:hidden">
        <span className="text-xs font-semibold">{value}%</span>

        <Progress value={value} className="h-2 w-16" indicatorClassName={progressColor} />
      </div>

      {/* Horizontal: sm → lg and xl+ */}
      <div className="hidden items-center gap-2 sm:flex lg:hidden xl:flex">
        <Progress value={value} className="h-2 w-16 flex-1" indicatorClassName={progressColor} />

        <span className="w-10 text-right text-xs font-medium">{value}%</span>
      </div>
    </>
  );
}
