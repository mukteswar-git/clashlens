import type { RequestHandler } from "express";
import type { ZodSchema } from "zod";

import { ApiError } from "../utils/api-error.js";

export function validate(schema: ZodSchema): RequestHandler {
  return (req, _res, next) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      return next(
        new ApiError(400, "BAD_REQUEST", result.error.issues[0]?.message ?? "Invalid request.")
      );
    }

    next();
  };
}
