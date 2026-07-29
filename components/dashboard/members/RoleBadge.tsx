import { Badge } from "@/components/ui/badge";
import { ROLE_LABELS, ROLE_VARIANTS } from "@/lib/coc/constants";
import { ClanRole } from "@/types/clan";

interface RoleBadgeProps {
  role: ClanRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <Badge
      variant={ROLE_VARIANTS[role]}
      className="px-1.5 py-0 text-[10px] font-medium md:px-2.5 md:py-0.5 md:text-xs"
    >
      {ROLE_LABELS[role]}
    </Badge>
  );
}
