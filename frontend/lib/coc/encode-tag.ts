import { normalizeClanTag } from "./normalize-tag";

export function encodeTag(tag: string): string {
  const normalizedTag = normalizeClanTag(tag);

  return encodeURIComponent(normalizedTag);
}
