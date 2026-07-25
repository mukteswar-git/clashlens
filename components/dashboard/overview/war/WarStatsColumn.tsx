import { Flame, Star, Swords } from "lucide-react";

type WarStatsColumnProps = {
  stars: number;
  attacks: number;
  destruction: number;
  maxAttacks: number;
};

export function WarStatsColumn({
  stars,
  attacks,
  destruction,
  maxAttacks,
}: WarStatsColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 shrink-0 text-yellow-500" />

        <div>
          <p className="text-2xl font-bold leading-none">{stars}</p>

          <p className="text-sm text-muted-foreground">Stars</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Swords className="h-5 w-5 shrink-0 text-blue-500" />

        <div>
          <p className="text-2xl font-bold leading-none">
            {attacks}/{maxAttacks}
          </p>

          <p className="text-sm text-muted-foreground">Attacks</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Flame className="h-5 w-5 shrink-0 text-orange-500" />

        <div>
          <p className="text-2xl font-bold leading-none">{destruction}%</p>

          <p className="text-sm text-muted-foreground">Destruction</p>
        </div>
      </div>
    </div>
  );
}
