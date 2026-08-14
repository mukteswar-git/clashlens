import { ClanSearch } from "@/components/common/clan-search/clan-search";
import { RefreshButton } from "@/components/common/refresh-button/refresh-button";
import { MobileNavigation } from "../mobile-navigation";
import { ThemeToggle } from "@/components/common/theme-toggle/theme-toggle";

export default function TopNavigation() {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between pr-6 lg:hidden">
        <MobileNavigation />
        <ThemeToggle />
      </div>

      <div className="border-t px-4 py-4">
        {/* Mobile */}
        <div className="space-y-3 md:hidden">
          <ClanSearch showError={false} />
          <RefreshButton />
        </div>

        {/* Tablet */}
        <div className="hidden items-center gap-4 md:flex lg:hidden">
          <div className="flex-1">
            <ClanSearch showError={false} />
          </div>

          <RefreshButton />
        </div>

        {/* Desktop */}
        <div className="hidden items-center justify-between gap-6 lg:flex">
          <div className="w-full max-w-xl">
            <ClanSearch showError={false} />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <RefreshButton />
          </div>
        </div>
      </div>
    </header>
  );
}
