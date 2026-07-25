import { Card, CardContent } from "@/components/ui/card";

type HighlightCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
};

export function HighlightCard({
  title,
  value,
  subtitle,
  icon,
}: HighlightCardProps) {
  return (
    <Card className="h-full transition-colors hover:border-primary/30">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {title}
          </p>

          <p className="truncate text-base font-semibold">{value}</p>

          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
}
