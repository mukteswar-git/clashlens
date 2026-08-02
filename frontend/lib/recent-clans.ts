import type { RecentClan } from "@/types/recent-clan";

const STORAGE_KEY = "clashlens:recent-clans";
const MAX_RECENT_CLANS = 5;

export function getRecentClans(): RecentClan[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = localStorage.getItem(STORAGE_KEY);

    if (!value) {
      return [];
    }

    const recentClans = JSON.parse(value) as RecentClan[];

    return recentClans;
  } catch {
    return [];
  }
}

export function saveRecentClan(clan: RecentClan): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const recentClans = getRecentClans();

    const filteredClans = recentClans.filter((recentClan) => recentClan.tag !== clan.tag);

    const updatedClans = [clan, ...filteredClans];

    const limitedClans = updatedClans.slice(0, MAX_RECENT_CLANS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedClans));
  } catch {
    // Ignore localStorage errors
  }
}

export function removeRecentClan(tag: string): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const recentClans = getRecentClans();

    const filteredClans = recentClans.filter((recentClan) => recentClan.tag !== tag);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredClans));
  } catch {
    // Ignore localStorage errors
  }
}

export function clearRecentClans(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore localStorage errors
  }
}
