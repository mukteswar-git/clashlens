import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description?: string;
  iconClassName?: string;
};

export function StatCard({ icon: Icon, title, value, description, iconClassName }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-5 p-5 md:p-6">
        <div className={cn("rounded-full p-4", iconClassName)}>
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h3 className="text-2xl font-bold">{value}</h3>

          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
