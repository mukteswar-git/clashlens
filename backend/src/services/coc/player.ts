import type { Player } from "../../types/player.js";
import { encodeTag } from "../../utils/coc/encode-tag.js";
import { apiClient } from "./client.js";

export async function getPlayer(tag: string): Promise<Player> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/players/${encodedTag}`;

  return apiClient<Player>(endpoint);
}
