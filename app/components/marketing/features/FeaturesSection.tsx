import { Container } from "@/app/components/layout/Container";
import Image from "next/image";
import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "./feature-data";
import { Badge } from "../../shared/Badge";
import { BarChart3 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 relative -mt-12 z-10" id="features">
      {/* Left Background Image */}
      <Image
        src="/images/features/trophy-bg.webp"
        alt=""
        width={300}
        height={300}
        className="pointer-events-none absolute left-50 -z-10 w-80 h-auto select-none blur-[1px]"
      />
      {/* Right Background Image */}
      <Image
        src="/images/features/baloon.webp"
        alt=""
        width={300}
        height={300}
        className="pointer-events-none absolute right-60 -z-10 w-50 h-auto select-none blur-[1px]"
      />
      <Container className="max-w-6xl flex flex-col gap-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            icon={<BarChart3 className="size-4 text-badge-icon stroke-2" />}
          >
            Features
          </Badge>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Powerful Analytics for{" "}
            <span className="whitespace-nowrap text-accent">Every Clan Leader</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ClashLens provides all the insights you need to manage your clan
            effectively, improve member performance, and build a stronger clan.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
