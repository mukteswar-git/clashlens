import { Home, Users } from "lucide-react";

export const dashboardNav = [
  {
    title: "Overview",
    href: "",
    icon: Home,
  },
  {
    title: "Members",
    href: "/members",
    icon: Users,
  },
] as const;
