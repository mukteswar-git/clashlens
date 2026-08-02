import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import type { Feature } from "./feature.types";
import { featureColorVariants } from "./feature.constants";

type FeatureCardProps = Feature;

export function FeatureCard({
  icon: Icon,
  color,
  title,
  description,
  image,
  bullets,
}: FeatureCardProps) {
  const colors = featureColorVariants[color];

  return (
    <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 min-h-64 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg}`}
        >
          <Icon className={`h-7 w-7 ${colors.icon}`} />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        <ul className="space-y-4 sm:pr-20">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3">
              <CheckCircle2 className={`h-5 w-5 shrink-0 ${colors.check}`} />

              <span className="leading-none text-base">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-3 right-3 hidden sm:block">
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            width={60}
            height={60}
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </article>
  );
}
