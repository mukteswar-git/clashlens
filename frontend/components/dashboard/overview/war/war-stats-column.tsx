import { Flame, Star, Swords } from "lucide-react";

type WarStatsColumnProps = {
  stars: number;
  attacks: number;
  destruction: number;
  maxAttacks: number;
};

export function WarStatsColumn({ stars, attacks, destruction, maxAttacks }: WarStatsColumnProps) {
  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <div className="flex items-center gap-2">
        <Star className="size-5 shrink-0 text-yellow-500" />

        <div>
          <p className="text-xl font-bold leading-none md:text-2xl">{stars}</p>

          <p className="text-xs text-muted-foreground md:text-sm">Stars</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Swords className="size-5 shrink-0 text-blue-500" />

        <div>
          <p className="text-xl font-bold leading-none md:text-2xl">
            {attacks}/{maxAttacks}
          </p>

          <p className="text-xs text-muted-foreground md:text-sm">Attacks</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Flame className="size-5 shrink-0 text-orange-500" />

        <div>
          <p className="text-xl font-bold leading-none md:text-2xl">{destruction}%</p>

          <p className="text-xs text-muted-foreground md:text-sm">Destruction</p>
        </div>
      </div>
    </div>
  );
}
