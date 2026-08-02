import type { MemberComparison } from "@/types/member";
import { backendClient } from "./client";

export async function getMembers(tag: string): Promise<MemberComparison[]> {
  return backendClient<MemberComparison[]>(`/members/${encodeURIComponent(tag)}`);
}
