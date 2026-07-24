import { Container } from "../../layout/Container";
import Image from "next/image";
import { Badge } from "../../shared/Badge";
import { Crown, ShieldCheck } from "lucide-react";
import { ClanSearch } from "../../../../components/common/clan-search/ClanSearch";
import { FeatureHighlights } from "../feature-highlights/FeatureHighlights";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28"
      id="home"
    >
      {/* Background image */}
      <Image
        src="/images/hero/background.webp"
        alt=""
        fill
        priority
        className="-z-20 object-cover object-bottom select-none pointer-events-none"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-white/60 to-transparent" />
      <Container className="flex flex-col gap-14 lg:gap-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="max-w-2xl space-y-7">
            <Badge icon={<Crown className="size-4 text-badge-icon stroke-2" />}>
              Built for Clash of Clans Leaders
            </Badge>
            <h1
              className="
                max-w-[9ch]
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:max-w-xl
                sm:text-5xl
              "
            >
              Understand Your Clan.
              <br />
              <span className="text-accent">Make Smarter Decisions.</span>
            </h1>
            <p className="max-w-md text-base text-muted-foreground">
              ClashLens helps you track member activity, donations, war
              performance, and clan health with powerful data-driven analytics.
            </p>
            <div className="mx-auto w-full max-w-2xl">
              <ClanSearch />
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-3 text-[10px] sm:text-xs lg:text-sm text-muted-foreground">
              <ShieldCheck className="size-3 sm:size-4 text-primary" />

              <span>100% Safe</span>

              <span className="mx-1 h-1 w-1 rounded-full bg-muted-foreground/40" />

              <span>Official Clash of Clans API</span>

              <span className="mx-1 h-1 w-1 rounded-full bg-muted-foreground/40" />

              <span>No Login Required</span>
            </div>
          </div>
          {/* Right */}
          <div className="flex justify-center">
            <Image
              src="/images/hero/dashboard-preview-new.webp"
              alt="Dashboard Image"
              height={1600}
              width={900}
            />
          </div>
        </div>
        <FeatureHighlights />
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
    </section>
  );
}
