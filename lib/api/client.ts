const BASE_URL = process.env.COC_API_BASE_URL;
const API_TOKEN = process.env.COC_API_TOKEN;

if (!BASE_URL || !API_TOKEN) {
  throw new Error("Missing Clash of Clans API configuration.");
}

export async function apiClient<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) throw new Error(`API request failed: ${response.status}`);

  return (await response.json()) as T;
}
