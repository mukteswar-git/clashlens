import { TableCell, TableRow } from "@/components/ui/table";

import { CompareMetric, MemberComparison, SortMetric } from "@/types/member";

import { PlayerCell } from "./player-cell";
import { MobileCellRenderer } from "./mobile-cell-renderer";

import Image from "next/image";

interface MobileMemberRowProps {
  member: MemberComparison;
  index: number;
  sortBy: SortMetric;
  compareBy: CompareMetric;
}

export function MobileMemberRow({ member, index, sortBy, compareBy }: MobileMemberRowProps) {
  return (
    <TableRow>
      <TableCell className="px-2 py-3">{index + 1}</TableCell>

      <TableCell className="px-2 py-3">
        <PlayerCell member={member} />
      </TableCell>

      <TableCell className="hidden md:table-cell lg:hidden text-center">
        TH{member.clanMember.townHallLevel}
      </TableCell>

      <TableCell className="hidden md:table-cell lg:hidden text-center">
        {member.clanMember.league?.iconUrls?.tiny ? (
          <Image
            src={member.clanMember.leagueTier.iconUrls.small}
            alt={member.clanMember.leagueTier.name}
            width={24}
            height={24}
            className="mx-auto"
          />
        ) : (
          "—"
        )}
      </TableCell>
      <TableCell className="px-2 py-3 text-center">
        <MobileCellRenderer member={member} column={sortBy} />
      </TableCell>

      <TableCell className="px-2 py-3 text-center">
        <MobileCellRenderer member={member} column={compareBy} />
      </TableCell>
    </TableRow>
  );
}
