import type { LucideIcon } from "lucide-react";

type FeatureHighlightCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureHighlightCard({
  icon: Icon,
  title,
  description,
}: FeatureHighlightCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Icon className="size-7 text-primary" />
      </div>

      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-semibold text-foreground">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}