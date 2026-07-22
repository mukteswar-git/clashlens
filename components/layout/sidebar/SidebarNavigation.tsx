"use client";

import { dashboardNavigation } from "@/lib/navigation/dashboardNavigation";
import { useParams, usePathname } from "next/navigation";
import { SidebarNavigationItem } from "./SidebarNavigationItem";

export function SidebarNavigation() {
  const { tag } = useParams<{ tag: string }>();
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 py-2">
      {dashboardNavigation.map((navItem) => {
        const href = `/dashboard/${tag}${navItem.href}`;

        return (
          <SidebarNavigationItem
            key={navItem.title}
            title={navItem.title}
            href={href}
            icon={navItem.icon}
            isActive={pathname === href}
          />
        );
      })}
    </nav>
  );
}
