import Image from "next/image";
import { Swords, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WAR_STATE_LABELS } from "@/lib/coc/constants";
import { WarSnapshotData } from "@/types/overview";

import { WarStatsColumn } from "./war-stats-column";

type WarSnapshotProps = {
  war: WarSnapshotData;
};

export function WarSnapshot({ war }: WarSnapshotProps) {
  if (war.state === "notInWar") {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <CardTitle>Current War</CardTitle>

          <Badge variant="secondary">{WAR_STATE_LABELS[war.state]}</Badge>
        </CardHeader>

        <CardContent className="flex min-h-80 flex-col items-center justify-center gap-4">
          <div className="rounded-full bg-muted p-4">
            <Swords className="size-8 text-muted-foreground" />
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold">No Active War</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Your clan is not currently participating in a clan war.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 max-[320px]:flex-col max-[320px]:items-start">
        <CardTitle className="text-lg md:text-xl">Current War Snapshot</CardTitle>

        <Badge variant="secondary" className="max-[320px]:self-start">
          {WAR_STATE_LABELS[war.state]}
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          {/* Clan */}
          <div className="flex flex-col items-center">
            <Image
              src={war.clan.badgeUrl}
              alt={war.clan.name}
              width={80}
              height={80}
              className="md:h-24 md:w-24"
            />

            <h3 className="mt-3 text-lg font-bold text-center md:mt-4 md:text-xl">
              {war.clan.name}
            </h3>

            <div className="mt-6 md:mt-8">
              <WarStatsColumn
                stars={war.clan.stars}
                attacks={war.clan.attacks}
                destruction={war.clan.destruction}
                maxAttacks={war.teamSize * 2}
              />
            </div>
          </div>

          {/* Opponent */}
          <div className="flex flex-col items-center">
            <Image
              src={war.opponent.badgeUrl}
              alt={war.opponent.name}
              width={80}
              height={80}
              className="md:h-24 md:w-24"
            />

            <h3 className="mt-3 text-lg font-bold text-center md:mt-4 md:text-xl">
              {war.opponent.name}
            </h3>

            <div className="mt-6 md:mt-8">
              <WarStatsColumn
                stars={war.opponent.stars}
                attacks={war.opponent.attacks}
                destruction={war.opponent.destruction}
                maxAttacks={war.teamSize * 2}
              />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-4 border-t">
        <div className="flex items-center gap-2">
          <Users className="size-4 text-muted-foreground" />

          <span className="text-sm text-muted-foreground">Team Size</span>
        </div>

        <span className="text-sm font-medium">
          {war.teamSize} vs {war.teamSize}
        </span>
      </CardFooter>
    </Card>
  );
}
