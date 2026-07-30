"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleRefresh() {
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <Button
      variant="outline"
      onClick={handleRefresh}
      disabled={isPending}
      aria-label="Refresh data"
    >
      <RefreshCw
        className={`mr-2 h-4 w-4 ${isPending ? "animate-spin" : ""}`}
      />

      {isPending ? "Refreshing..." : "Refresh"}
    </Button>
  );
}
