import { getOverviewData } from "@/services/overview";

type DashboardPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { tag } = await params;

  try {
    await getOverviewData(tag);
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
      <p>Overview UI coming soon...</p>
    </main>
  );
}
