import { MemberComparison } from "@/types/member";

interface PlayerCellProps {
  member: MemberComparison;
}

export function PlayerCell({ member }: PlayerCellProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="min-w-0 space-y-0.5">
        <p className="truncate font-semibold leading-none">
          {member.clanMember.name}
        </p>

        <p className="truncate text-xs text-muted-foreground">
          {member.clanMember.tag}
        </p>
      </div>
    </div>
  );
}
