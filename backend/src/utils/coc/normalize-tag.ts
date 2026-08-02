export function normalizeClanTag(tag: string): string {
  const normalized = tag.trim().toUpperCase();

  return normalized.startsWith("#") ? normalized : `#${normalized}`;
}
