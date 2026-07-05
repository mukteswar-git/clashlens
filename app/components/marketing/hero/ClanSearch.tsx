"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Hash, Search } from "lucide-react";
import { toast } from "sonner";

export function ClanSearch() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        items-center
        max-w-2xl
        rounded-2xl
        border
        border-border
        bg-background
        p-2
        shadow-lg
      "
    >
      <div className="flex items-center px-4 text-muted-foreground">
        <Hash className="size-4.5" />
      </div>

      <Input
        type="text"
        placeholder="Enter a clan tag (e.g. #2Y8Q9JOU)"
        className="
          flex-1
          border-0
          px-0
          text-base
          md:text-base
          shadow-none
          focus-visible:ring-0
          placeholder:text-base
        "
      />

      <Button
        type="submit"
        size="lg"
        className="h-12 rounded-xl px-6"
        onClick={() =>
          toast("🚧 Coming Soon", {
            description:
              "Clan analytics dashboard is currently under development.",
          })
        }
      >
        <Search className="size-5" />
        Analyze Clan
      </Button>
    </form>
  );
}
