import { getClan, getCurrentWar } from "@/lib/api";

export async function getOverviewData(tag: string) {
  const clan = await getClan(tag);

  let war = null;

  try {
    war = await getCurrentWar(tag);
  } catch {
    war = null;
  }

  return {
    clan,
    war,
  };
}
