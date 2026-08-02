import { env } from "../../config/env.js";
import { ApiError } from "../../utils/api-error.js";

export async function apiClient<T>(endpoint: string): Promise<T> {
  const url = `${env.COC_API_BASE_URL}${endpoint}`;

  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.COC_API_TOKEN}`,
      },
    });
  } catch {
    throw new ApiError(503, "NETWORK_ERROR", "Unable to connect to the Clash of Clans API.");
  }

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new ApiError(
          400,
          "BAD_REQUEST",
          "The request sent to the Clash of Clans API is invalid."
        );
      case 401:
        throw new ApiError(
          401,
          "UNAUTHORIZED",
          "Authentication with the Clash of Clans API failed."
        );
      case 403:
        throw new ApiError(403, "FORBIDDEN", "Access to the Clash of Clans API is forbidden.");
      case 404:
        throw new ApiError(404, "NOT_FOUND", "Clan not found.");
      case 429:
        throw new ApiError(
          429,
          "RATE_LIMITED",
          "The Clash of Clans API rate limit has been exceeded. Please try again later."
        );
      case 500:
      case 502:
      case 503:
      case 504:
        throw new ApiError(503, "SERVER_ERROR", "The Clash of Clans API is currently unavailable.");
      default:
        throw new ApiError(
          response.status,
          "UNKNOWN_ERROR",
          "An unexpected error occurred while communicating with the Clash of Clans API."
        );
    }
  }

  return (await response.json()) as T;
}
