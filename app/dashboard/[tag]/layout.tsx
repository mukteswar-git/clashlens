import { ReactNode } from "react";

import { Sidebar, TopNavigation } from "@/components/layout";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavigation />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
