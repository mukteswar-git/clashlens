import Image from "next/image";
import { History } from "lucide-react";

import type { RecentClan } from "@/types/recent-clan";

interface RecentSearchesProps {
  recentClans: RecentClan[];
  onSelect: (tag: string) => void;
}

export function RecentSearches({ recentClans, onSelect }: RecentSearchesProps) {
  if (recentClans.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <History className="size-4 text-muted-foreground" />

        <h3 className="text-sm font-medium text-muted-foreground">Recent Searches</h3>
      </div>

      <div className="space-y-1.5">
        {recentClans.map((clan) => (
          <button
            key={clan.tag}
            type="button"
            onClick={() => onSelect(clan.tag)}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              border
              px-3
              py-2.5
              text-left
              transition-colors
              hover:bg-muted
            "
          >
            <Image
              src={clan.badgeUrl}
              alt={clan.name}
              width={40}
              height={40}
              className="rounded-md"
            />

            <div className="min-w-0">
              <p className="truncate font-medium">{clan.name}</p>

              <p className="text-sm text-muted-foreground">{clan.tag}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
