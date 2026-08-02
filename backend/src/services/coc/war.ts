import type { War } from "../../types/war.js";
import { encodeTag } from "../../utils/coc/encode-tag.js";
import { apiClient } from "./client.js";

export async function getCurrentWar(tag: string): Promise<War> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/clans/${encodedTag}/currentwar`;

  return apiClient<War>(endpoint);
}
