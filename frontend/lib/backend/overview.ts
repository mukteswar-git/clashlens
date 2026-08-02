import type { OverviewData } from "@/types/overview";
import { backendClient } from "./client";

export async function getOverview(tag: string): Promise<OverviewData> {
  return backendClient<OverviewData>(`/overview/${encodeURIComponent(tag)}`);
}
