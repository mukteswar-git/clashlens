import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Clan } from "@/types/clan";

type ClanSummaryProps = {
  clan: Clan;
};

export function ClanSummary({ clan }: ClanSummaryProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-5">
          <Image
            src={clan.badgeUrls.medium}
            alt={clan.name}
            width={84}
            height={84}
            priority
            className="shrink-0"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{clan.name}</h2>

            <p className="mt-1 text-sm text-muted-foreground">{clan.tag}</p>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Clan War League</p>

                <p className="font-medium">{clan.warLeague.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Clan Capital League
                </p>

                <p className="font-semibold">{clan.capitalLeague.name}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
