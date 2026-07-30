import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type PerformanceCardProps = {
  title: string;
  subtitle: string;
  value: string | number;
  icon: string;
};

export function PerformanceCard({
  title,
  subtitle,
  value,
  icon,
}: PerformanceCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-5 p-6">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="w-16 h-auto shrink-0 object-contain"
        />

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          <p className="text-4xl font-bold tracking-tight">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
