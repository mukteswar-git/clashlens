import { Crown, Gift, Castle, Trophy } from "lucide-react";

import { QuickHighlightsData } from "@/types/overview";

import { HighlightCard } from "./HighlightCard";

type QuickHighlightsProps = {
  highlights: QuickHighlightsData;
};

export function QuickHighlights({ highlights }: QuickHighlightsProps) {
  const { topDonor, highestTrophies, highestTownHall, leader } = highlights;

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Quick Highlights</h2>

        <p className="text-sm text-muted-foreground">
          Key members at a glance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <HighlightCard
          title="Top Donor"
          value={topDonor.name}
          subtitle={`${topDonor.donations} donations`}
          icon={<Gift className="h-6 w-6" />}
        />

        <HighlightCard
          title="Highest Trophies"
          value={highestTrophies.name}
          subtitle={`${highestTrophies.trophies.toLocaleString()} trophies`}
          icon={<Trophy className="h-6 w-6" />}
        />

        <HighlightCard
          title="Highest Town Hall"
          value={highestTownHall.name}
          subtitle={`Town Hall ${highestTownHall.townHallLevel}`}
          icon={<Castle className="h-6 w-6" />}
        />

        <HighlightCard
          title="Clan Leader"
          value={leader.name}
          subtitle="Leader"
          icon={<Crown className="h-6 w-6" />}
        />
      </div>
    </section>
  );
}
