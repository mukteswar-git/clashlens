"use client";

import { useEffect } from "react";

import { useRecentClans } from "@/hooks/use-recent-clans";

type SaveRecentClanProps = {
  tag: string;
  name: string;
  badgeUrl: string;
};

export function SaveRecentClan({ tag, name, badgeUrl }: SaveRecentClanProps) {
  const { saveClan } = useRecentClans();

  useEffect(() => {
    saveClan({
      tag,
      name,
      badgeUrl,
      searchedAt: new Date().toISOString(),
    });
  }, [tag, name, badgeUrl, saveClan]);

  return null;
}
