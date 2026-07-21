import { Logo } from "@/components/common/Logo";

export function SidebarHeader() {
  return (
    <nav className="py-2">
      <header className="border-b px-5 py-8">
        <Logo priority />
      </header>
    </nav>
  );
}
