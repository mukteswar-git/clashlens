const BASE_URL = process.env.COC_API_BASE_URL;
const API_TOKEN = process.env.COC_API_TOKEN;

if (!BASE_URL || !API_TOKEN) {
  throw new Error("Missing Clash of Clans API configuration.");
}

export async function getClan(tag: string) {
  const url = `${BASE_URL}/clans/${encodeURIComponent(tag)}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!response.ok) throw new Error(`Clan data not found: ${response.status}`);

  return response.json();
}
