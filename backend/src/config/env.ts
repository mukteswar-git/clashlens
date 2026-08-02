import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  COC_API_BASE_URL: z.string().url(),
  COC_API_TOKEN: z.string().min(1),
});

export const env = envSchema.parse(process.env);
