import { ClanSummary } from "@/components/dashboard/overview/ClanSummary";
import { getOverviewData } from "@/services/overview";

type DashboardPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { tag } = await params;

  const overview = await getOverviewData(tag).catch(() => null);

  if (!overview) {
    return (
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Clan not found</h1>
        <p>Please check the clan tag and try again.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <ClanSummary clan={overview.clan} />
    </main>
  );
}
