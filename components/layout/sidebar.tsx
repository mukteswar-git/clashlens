import { SidebarFooter } from "./SidebarFooter";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-col border-r bg-background">
      <SidebarHeader />

      <div className="flex-1">
        <SidebarNavigation />
      </div>

      <SidebarFooter />
    </aside>
  );
}
