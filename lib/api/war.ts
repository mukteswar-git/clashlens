import { War } from "@/types/war";
import { encodeTag } from "../coc/encode-tag";
import { apiClient } from "./client";

export async function getCurrentWar(tag: string): Promise<War> {
  const encodedTag = encodeTag(tag);
  const endpoint = `/clans/${encodedTag}/currentwar`;

  return apiClient<War>(endpoint);
}
