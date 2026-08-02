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
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:text-left">
          <Image
            src={clan.badgeUrls.medium}
            alt={clan.name}
            width={84}
            height={84}
            priority
            className="h-20 w-20 shrink-0 md:h-24 md:w-24"
          />

          <div className="flex-1 w-full">
            <h2 className="text-xl font-bold md:text-2xl">{clan.name}</h2>

            <p className="mt-1 text-sm text-muted-foreground">{clan.tag}</p>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Clan War League</p>

                <p className="font-medium">{clan.warLeague.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Clan Capital League</p>

                <p className="font-semibold">{clan.capitalLeague.name}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
