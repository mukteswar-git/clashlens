import { RefreshCw } from "lucide-react";

import { ClanSearch } from "@/components/common/clan-search/ClanSearch";
import { Button } from "@/components/ui/button";

export default function TopNavigation() {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between gap-6 px-6 py-4">
        <div className="w-full max-w-xl">
          <ClanSearch showError={false} />
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">Last updated just now</p>

          <Button variant="ghost" size="sm">
            <RefreshCw className="size-4" />
            Refresh
          </Button>
        </div>
      </div>
    </header>
  );
}
