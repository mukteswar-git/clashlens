import { getClan } from "@/lib/coc/client";
import { NextResponse } from "next/server";

export async function GET() {
  const testClanTag = process.env.COC_TEST_CLAN_TAG;

  if (!testClanTag) throw new Error("Missing test clan tag.");

  const clan = await getClan(`#${testClanTag}`);

  return NextResponse.json({
    clan: {
      name: clan.name,
      level: clan.clanLevel,
      members: clan.members,
      trophies: clan.clanPoints,
    },
    members: clan.memberList,
  });
}
