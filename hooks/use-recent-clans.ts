"use client";

import { useCallback, useEffect, useState } from "react";

import {
  clearRecentClans,
  getRecentClans,
  removeRecentClan,
  saveRecentClan,
} from "@/lib/recent-clans";
import type { RecentClan } from "@/types/recent-clan";

export function useRecentClans() {
  const [recentClans, setRecentClans] = useState<RecentClan[]>([]);

  // Synchronize React state with browser localStorage after the component mounts.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRecentClans(getRecentClans());
  }, []);

  const refreshRecentClans = useCallback(() => {
    setRecentClans(getRecentClans());
  }, []);

  const saveClan = useCallback(
    (clan: RecentClan) => {
      saveRecentClan(clan);
      refreshRecentClans();
    },
    [refreshRecentClans]
  );

  const removeClan = useCallback(
    (tag: string) => {
      removeRecentClan(tag);
      refreshRecentClans();
    },
    [refreshRecentClans]
  );

  const clearHistory = useCallback(() => {
    clearRecentClans();
    setRecentClans([]);
  }, []);

  return {
    recentClans,
    saveClan,
    removeClan,
    clearHistory,
  };
}
