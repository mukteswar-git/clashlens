import Image from "next/image";
import { LeagueTier } from "@/types/clan";

interface LeagueCellProps {
  league: LeagueTier;
}

export function LeagueCell({ league }: LeagueCellProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={league.iconUrls.small}
        alt={league.name}
        width={24}
        height={24}
      />

      <span>{league.name}</span>
    </div>
  );
}
