import { Player } from "@/types/player";
import { encodeTag } from "../coc/encode-tag";
import { apiClient } from "./client";

export async function getPlayer(tag: string): Promise<Player> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/players/${encodedTag}`;

  return apiClient<Player>(endpoint);
}
