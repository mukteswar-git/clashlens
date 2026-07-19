import { Clan } from "@/types/clan";
import { encodeTag } from "@/lib/coc/encode-tag";
import { apiClient } from "@/lib/api/client";

export async function getClan(tag: string): Promise<Clan> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/clans/${encodedTag}`;

  return apiClient<Clan>(endpoint);
}
