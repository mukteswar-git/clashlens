"use client";

import { useRouter } from "next/navigation";

import { useRecentClans } from "@/hooks/use-recent-clans";
import { normalizeClanTag } from "@/lib/coc/normalize-tag";

import { RecentSearches } from "./recent-searches";

export function RecentSearchesContainer() {
  const router = useRouter();
  const { recentClans } = useRecentClans();

  if (recentClans.length === 0) {
    return null;
  }

  function handleSelect(tag: string) {
    const normalizedTag = normalizeClanTag(tag);

    router.push(`/dashboard/${normalizedTag.slice(1)}`);
  }

  return (
    <div
      className="
      absolute
      top-full
      left-0
      right-0
      mx-auto
      z-50
      mt-2
      w-[95%]
      rounded-2xl
      border
      bg-background
      p-3
      shadow-lg
      overflow-hidden
    "
    >
      <div className="max-h-80 overflow-y-auto">
        <RecentSearches recentClans={recentClans} onSelect={handleSelect} />
      </div>
    </div>
  );
}
