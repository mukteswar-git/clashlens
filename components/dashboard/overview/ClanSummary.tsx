import { Card, CardContent } from "@/components/ui/card";
import { Clan } from "@/types/clan";
import Image from "next/image";

type ClanSummaryProps = {
  clan: Clan;
};

export function ClanSummary({ clan }: ClanSummaryProps) {
  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Image
              src={clan.badgeUrls.medium}
              alt={clan.name}
              width={96}
              height={96}
              className="shrink-0"
            />

            <div className="flex flex-1 flex-col">
              <h2 className="text-xl font-semibold">{clan.name}</h2>

              <p className="text-sm text-muted-foreground">{clan.tag}</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Clan War League
                  </span>

                  <span className="font-medium">{clan.warLeague.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Clan Capital League
                  </span>

                  <span className="font-medium">{clan.capitalLeague.name}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
