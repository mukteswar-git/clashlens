import { normalizeClanTag } from "./normalize-tag.js";

export function encodeTag(tag: string): string {
  const normalizedTag = normalizeClanTag(tag);

  return encodeURIComponent(normalizedTag);
}
