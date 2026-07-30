const BASE_URL = process.env.COC_API_BASE_URL;
const API_TOKEN = process.env.COC_API_TOKEN;

if (!BASE_URL || !API_TOKEN) {
  throw new Error("Missing Clash of Clans API configuration.");
}

export async function apiClient<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
  } catch {
    throw new Error("NETWORK_ERROR");
  }

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error("BAD_REQUEST");

      case 401:
        throw new Error("UNAUTHORIZED");

      case 403:
        throw new Error("FORBIDDEN");

      case 404:
        throw new Error("NOT_FOUND");

      case 429:
        throw new Error("RATE_LIMITED");

      case 500:
      case 502:
      case 503:
      case 504:
        throw new Error("SERVER_ERROR");

      default:
        throw new Error("UNKNOWN_ERROR");
    }
  }

  return (await response.json()) as T;
}
