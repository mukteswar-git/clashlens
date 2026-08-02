import { z } from "zod";

const CLAN_TAG_REGEX = /^#[0289PYLQGRJCUV]+$/;

export const clanTagSchema = z.object({
  tag: z.string().regex(CLAN_TAG_REGEX, "Invalid clan tag."),
});
