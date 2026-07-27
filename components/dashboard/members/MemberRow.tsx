import { TableCell, TableRow } from "@/components/ui/table";
import { CompareMetric, MemberComparison } from "@/types/member";
import { PlayerCell } from "./PlayerCell";
import { TownHallCell } from "./TownHallCell";
import { DonationCell } from "./DonationCell";
import { LeagueCell } from "./LeagueCell";
import { RoleBadge } from "./RoleBadge";
import { ProgressCell } from "./ProgressCell";

interface MemberRowProps {
  rank: number;
  member: MemberComparison;
  compareMetric: CompareMetric;
}

export function MemberRow({ rank, member, compareMetric }: MemberRowProps) {
  let progress = 0;

  switch (compareMetric) {
    case "heroes":
      progress = member.heroProgress;
      break;

    case "troops":
      progress = member.troopProgress;
      break;

    case "spells":
      progress = member.spellProgress;
      break;

    case "equipment":
      progress = member.equipmentProgress;
      break;
  }
  return (
    <TableRow>
      <TableCell className="font-medium">{rank}</TableCell>
      <TableCell>
        <PlayerCell member={member} />
      </TableCell>
      <TableCell>
        <TownHallCell level={member.clanMember.townHallLevel} />
      </TableCell>
      <TableCell className="text-center">
        <RoleBadge role={member.clanMember.role} />
      </TableCell>
      <TableCell>
        <LeagueCell league={member.clanMember.leagueTier} />
      </TableCell>
      <TableCell className="text-center">
        <DonationCell
          donated={member.clanMember.donations}
          received={member.clanMember.donationsReceived}
        />
      </TableCell>
      <TableCell className="text-center">
        {member.clanMember.trophies}
      </TableCell>

      <TableCell>
        <ProgressCell value={progress} />
      </TableCell>
    </TableRow>
  );
}
