import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("GET /clan/:tag", () => {
  it("should return 400 for an invalid clan tag", async () => {
    const response = await request(app).get("/clan/INVALID");

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
      success: false,
      error: {
        code: "BAD_REQUEST",
        message: "Invalid clan tag.",
      },
    });
  });
});
