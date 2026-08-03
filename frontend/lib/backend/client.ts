const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function backendClient<T>(endpoint: string): Promise<T> {
  if (!BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_BACKEND_URL environment variable.");
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new Error("UNAUTHORIZED");
        case 403:
          throw new Error("FORBIDDEN");
        case 404:
          throw new Error("NOT_FOUND");
        case 429:
          throw new Error("RATE_LIMITED");
        default:
          if (response.status >= 500) {
            throw new Error("SERVER_ERROR");
          }
          throw new Error("UNKNOWN_ERROR");
      }
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (
      error instanceof Error &&
      [
        "UNAUTHORIZED",
        "FORBIDDEN",
        "NOT_FOUND",
        "RATE_LIMITED",
        "SERVER_ERROR",
        "UNKNOWN_ERROR",
      ].includes(error.message)
    ) {
      throw error;
    }

    throw new Error("NETWORK_ERROR");
  }
}
