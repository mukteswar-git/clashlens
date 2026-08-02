import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CompareMetric, MemberComparison, SortMetric } from "@/types/member";
import { DesktopMemberRow } from "./desktop-member-row";
import { sortMembers } from "@/lib/members/sort-members";
import { COMPARE_OPTIONS } from "@/lib/coc/constants";

interface MemberTableProps {
  members: MemberComparison[];
  compareMetric: CompareMetric;
  sortMetric: SortMetric;
}

export function DesktopMemberTable({ members, compareMetric, sortMetric }: MemberTableProps) {
  const sortedMembers = sortMembers(members, sortMetric);

  const compareLabel =
    COMPARE_OPTIONS.find((option) => option.value === compareMetric)?.label ?? "";

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead className="w-70">Player</TableHead>
          <TableHead>TH</TableHead>
          <TableHead className="text-center">Role</TableHead>
          <TableHead className="text-center 2xl:text-left">League</TableHead>
          <TableHead className="text-center">Donations</TableHead>
          <TableHead className="text-center">Received</TableHead>
          <TableHead className="text-center">Trophies</TableHead>
          <TableHead className="w-40 text-center">{compareLabel}</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {sortedMembers.map((member, index) => (
          <DesktopMemberRow
            key={member.clanMember.tag}
            member={member}
            rank={index + 1}
            compareMetric={compareMetric}
          />
        ))}
      </TableBody>
    </Table>
  );
}
