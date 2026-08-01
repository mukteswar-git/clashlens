import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNavigation } from "./sidebar-navigation";

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
