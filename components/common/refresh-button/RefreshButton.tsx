import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RefreshButton() {
  return (
    <Button variant="ghost" className="justify-start px-0">
      <RefreshCw className="mr-0.5 size-4" />
      Refresh
    </Button>
  );
}
