import { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="space-y-4 text-muted-foreground leading-7">
        {children}
      </div>
    </section>
  );
}
