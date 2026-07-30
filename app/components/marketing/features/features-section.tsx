import { Container } from "@/app/components/layout/container";
import Image from "next/image";
import { FeatureCard } from "./feature-card";
import { FEATURES } from "./feature-data";
import { Badge } from "../../shared/badge";
import { BarChart3 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative -mt-12 z-10 py-16 lg:py-28" id="features">
      {/* Left Background Image */}
      <Image
        src="/images/features/trophy-bg.webp"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none 
          absolute 
          left-0 
          sm:left-10 
          md:left-20
          lg:left-40 
          xl:left-80
          -z-10 
          w-50 
          sm:w-60 
          md:w-80 
          h-auto 
          select-none 
          blur-[1px]"
      />
      {/* Right Background Image */}
      <Image
        src="/images/features/baloon.webp"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none 
          absolute 
          right-0 
          sm:right-10
          md:right-20 
          lg:right-40 
          xl:right-80
          -z-10 
          w-30 
          sm:w-40 
          md:w-50 
          h-auto 
          select-none 
          blur-[1px]"
      />
      <Container className="max-w-6xl flex flex-col gap-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            icon={<BarChart3 className="size-4 text-badge-icon stroke-2" />}
          >
            Features
          </Badge>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Powerful Analytics for{" "}
            <span className="whitespace-nowrap text-accent">
              Every Clan Leader
            </span>
          </h2>

          <p
            className="
            mt-6
            text-base
            leading-7
            text-muted-foreground

            sm:text-lg
            sm:leading-8
            "
          >
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
