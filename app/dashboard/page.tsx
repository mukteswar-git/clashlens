import { getClan } from "@/lib/api/clan";
import { Clan } from "@/types/clan";

type DashboardPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const { tag } = await searchParams;

  if (!tag) {
    return (
      <main className="container mx-auto py-10">
        <p>No clan tag provided.</p>
      </main>
    );
  }

  let clan: Clan;

  try {
    clan = await getClan(tag);
  } catch {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Clan not found</h1>
        <p>Please check the clan tag and try again.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p>
        <strong>Name:</strong> {clan.name}
      </p>

      <p>
        <strong>Tag:</strong> {clan.tag}
      </p>

      <p>
        <strong>Clan Level:</strong> {clan.clanLevel}
      </p>

      <p>
        <strong>Members:</strong> {clan.members}
      </p>

      <p>
        <strong>Clan Points:</strong> {clan.clanPoints}
      </p>

      <p>
        <strong>Required Trophies:</strong> {clan.requiredTrophies}
      </p>

      <p>
        <strong>War Wins:</strong> {clan.warWins}
      </p>

      <p>
        <strong>War Win Streak:</strong> {clan.warWinStreak}
      </p>
    </main>
  );
}
