import { MembersView } from "@/components/dashboard/members/MembersView";
import { getMembersData } from "@/services/overview/members.service";

type MembersPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function MembersPage({ params }: MembersPageProps) {
  const { tag } = await params;

  const members = await getMembersData(tag);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Members</h1>
        <p className="text-muted-foreground">
          Compare the progression and performance of every clan member.
        </p>
      </div>

      <MembersView members={members} />
    </div>
  );
}
