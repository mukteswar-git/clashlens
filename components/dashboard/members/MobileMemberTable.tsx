import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MOBILE_COLUMN_LABELS } from "@/lib/coc/constants";
import { sortMembers } from "@/lib/members/sort-members";

import { CompareMetric, MemberComparison, SortMetric } from "@/types/member";

import { MobileMemberRow } from "./MobileMemberRow";

interface MobileMemberTableProps {
  members: MemberComparison[];
  sortBy: SortMetric;
  compareBy: CompareMetric;
}

export function MobileMemberTable({
  members,
  sortBy,
  compareBy,
}: MobileMemberTableProps) {
  const sortedMembers = sortMembers(members, sortBy);

  return (
    <div className="overflow-x-auto px-2">
      <Table className="min-w-max">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">#</TableHead>

            <TableHead className="w-32">Player</TableHead>

            <TableHead className="hidden md:table-cell lg:hidden text-center">
              TH
            </TableHead>

            <TableHead className="hidden md:table-cell lg:hidden text-center">
              League
            </TableHead>

            <TableHead className="text-center">
              {MOBILE_COLUMN_LABELS[sortBy]}
            </TableHead>

            <TableHead className="min-w-20 text-center">
              {MOBILE_COLUMN_LABELS[compareBy]}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedMembers.map((member, index) => (
            <MobileMemberRow
              key={member.player.tag}
              member={member}
              index={index}
              sortBy={sortBy}
              compareBy={compareBy}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
