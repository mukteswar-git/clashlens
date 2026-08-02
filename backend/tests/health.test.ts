import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("GET /health", () => {
  it("should return the server status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);

    expect(response.headers["content-type"]).toContain("application/json");

    expect(response.body).toEqual({
      status: "ok",
      environment: "test",
    });
  });
});
