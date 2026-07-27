import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CompareMetric, MemberComparison, SortMetric } from "@/types/member";
import { MemberRow } from "./MemberRow";
import { COMPARE_OPTIONS, ROLE_PRIORITY } from "@/lib/coc/constants";

interface MemberTableProps {
  members: MemberComparison[];
  compareMetric: CompareMetric;
  sortMetric: SortMetric;
}

export function MemberTable({
  members,
  compareMetric,
  sortMetric,
}: MemberTableProps) {
  const sortedMembers = [...members];

  sortedMembers.sort((a, b) => {
    switch (sortMetric) {
      case "name":
        return a.clanMember.name.localeCompare(b.clanMember.name);

      case "townHall":
        return b.clanMember.townHallLevel - a.clanMember.townHallLevel;

      case "donations":
        return b.clanMember.donations - a.clanMember.donations;

      case "received":
        return b.clanMember.donationsReceived - a.clanMember.donationsReceived;

      case "trophies":
        return b.clanMember.trophies - a.clanMember.trophies;

      case "role":
        return (
          ROLE_PRIORITY[b.clanMember.role] - ROLE_PRIORITY[a.clanMember.role]
        );

      default:
        return 0;
    }
  });

  const compareLabel =
    COMPARE_OPTIONS.find((option) => option.value === compareMetric)?.label ??
    "";

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead className="w-70">Player</TableHead>
          <TableHead>TH</TableHead>
          <TableHead className="text-center">Role</TableHead>
          <TableHead>League</TableHead>
          <TableHead className="text-center">Donations/Received</TableHead>
          <TableHead className="text-center">Trophies</TableHead>
          <TableHead className="w-40 text-center">{compareLabel}</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {sortedMembers.map((member, index) => (
          <MemberRow
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
