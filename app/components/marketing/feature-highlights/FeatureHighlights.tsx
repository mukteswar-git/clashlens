import { Container } from "../../layout/Container";
import {
  ShieldCheck,
  Clock3,
  ChartNoAxesCombined,
  UserRoundCheck,
} from "lucide-react";

import { FeatureHighlightCard } from "./FeatureHighlightCard";

const featureHighlights = [
  {
    icon: ShieldCheck,
    title: "Official API",
    description: "Official API Integration",
  },
  {
    icon: Clock3,
    title: "Live Data",
    description: "Live updates from CoC API",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Actionable Insights",
    description: "Data that helps you lead",
  },
  {
    icon: UserRoundCheck,
    title: "Leader Focused",
    description: "Built for clan leaders",
  },
];

export function FeatureHighlights() {
  return (
    <section className="pb-16 lg:pb-24">
      <Container>
        <div className="rounded-3xl border border-border bg-background px-8 py-6 shadow-lg">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {featureHighlights.map((feature) => (
              <FeatureHighlightCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}