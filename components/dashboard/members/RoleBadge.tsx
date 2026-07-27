import { Badge } from "@/components/ui/badge";
import { ROLE_LABELS, ROLE_VARIANTS } from "@/lib/coc/constants";
import { ClanRole } from "@/types/clan";

interface RoleBadgeProps {
  role: ClanRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return <Badge variant={ROLE_VARIANTS[role]}>{ROLE_LABELS[role]}</Badge>;
}
