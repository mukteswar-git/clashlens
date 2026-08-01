import { Clan } from "@/types/clan";
import { encodeTag } from "../coc/encode-tag";
import { apiClient } from "./client";

export async function getClan(tag: string): Promise<Clan> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/clans/${encodedTag}`;

  return apiClient<Clan>(endpoint);
}
