import type { DashboardNavigationItem } from "@/lib/navigation/dashboardNavigation";
import Link from "next/link";

interface SidebarNavigationItemProps extends DashboardNavigationItem {
  isActive: boolean;
}

export function SidebarNavigationItem({
  title,
  href,
  icon: Icon,
  isActive,
}: SidebarNavigationItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-4 py-2 transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Icon className="size-5" />
      <span>{title}</span>
    </Link>
  );
}
