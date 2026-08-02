import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app.js";

describe("CORS", () => {
  it("should return the correct CORS headers", async () => {
    const response = await request(app).get("/health").set("Origin", "http://localhost:3000");

    expect(response.status).toBe(200);

    expect(response.headers["access-control-allow-origin"]).toBe("http://localhost:3000");

    expect(response.headers["access-control-allow-credentials"]).toBe("true");
  });
});
