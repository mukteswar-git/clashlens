import { TableCell, TableRow } from "@/components/ui/table";
import { CompareMetric, MemberComparison } from "@/types/member";
import { PlayerCell } from "./player-cell";
import { TownHallCell } from "./town-hall-cell";
import { LeagueCell } from "./league-cell";
import { RoleBadge } from "./role-badge";
import { ProgressCell } from "./progress-cell";

interface MemberRowProps {
  rank: number;
  member: MemberComparison;
  compareMetric: CompareMetric;
}

export function DesktopMemberRow({
  rank,
  member,
  compareMetric,
}: MemberRowProps) {
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
      <TableCell className="text-center font-medium">
        {member.clanMember.donations.toLocaleString()}
      </TableCell>

      <TableCell className="text-center text-muted-foreground">
        {member.clanMember.donationsReceived.toLocaleString()}
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
