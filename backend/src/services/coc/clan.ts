import type { Clan } from "../../types/clan.js";
import { encodeTag } from "../../utils/coc/encode-tag.js";
import { apiClient } from "./client.js";

export async function getClan(tag: string): Promise<Clan> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/clans/${encodedTag}`;

  return apiClient<Clan>(endpoint);
}
