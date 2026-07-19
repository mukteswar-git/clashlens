type DashboardPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const { tag } = await searchParams;

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-4">Clan Tag: {tag}</p>
    </main>
  );
}
