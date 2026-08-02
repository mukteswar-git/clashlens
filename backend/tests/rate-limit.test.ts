import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("Rate Limiter", () => {
  it("should return 429 after exceeding the limit", async () => {
    await request(app).get("/health");
    await request(app).get("/health");
    await request(app).get("/health");

    const response = await request(app).get("/health");

    expect(response.status).toBe(429);
  });
});
