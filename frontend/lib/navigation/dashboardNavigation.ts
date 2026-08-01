import { LayoutDashboard, Users, type LucideIcon } from "lucide-react";

export interface DashboardNavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardNavigation: DashboardNavigationItem[] = [
  {
    title: "Overview",
    href: "",
    icon: LayoutDashboard,
  },
  {
    title: "Members",
    href: "/members",
    icon: Users,
  },
];
