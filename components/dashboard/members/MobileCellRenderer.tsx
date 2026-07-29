import Image from "next/image";

import { MemberComparison, MobileColumn } from "@/types/member";

import { ProgressCell } from "./ProgressCell";
import { RoleBadge } from "./RoleBadge";
import { TownHallCell } from "./TownHallCell";

interface MobileCellRendererProps {
  member: MemberComparison;
  column: MobileColumn;
}

export function MobileCellRenderer({
  member,
  column,
}: MobileCellRendererProps) {
  switch (column) {
    case "role":
      return <RoleBadge role={member.clanMember.role} />;

    case "townHall":
      return <TownHallCell level={member.player.townHallLevel} />;

    case "league":
      return (
        <Image
          src={member.clanMember.leagueTier.iconUrls.small}
          alt={member.clanMember.leagueTier.name}
          width={20}
          height={20}
          className="mx-auto"
        />
      );

    case "donations":
      return <span>{member.clanMember.donations.toLocaleString()}</span>;

    case "received":
      return (
        <span>{member.clanMember.donationsReceived.toLocaleString()}</span>
      );

    case "trophies":
      return <span>{member.player.trophies.toLocaleString()}</span>;

    case "heroes":
      return <ProgressCell value={member.heroProgress} />;

    case "troops":
      return <ProgressCell value={member.troopProgress} />;

    case "spells":
      return <ProgressCell value={member.spellProgress} />;

    case "equipment":
      return <ProgressCell value={member.equipmentProgress} />;

    default:
      return null;
  }
}
