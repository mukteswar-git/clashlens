"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Hash, Search } from "lucide-react";

import { encodeTag } from "@/lib/coc/encode-tag";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MAX_CLAN_TAG_LENGTH } from "@/lib/coc/constants";

export function ClanSearch() {
  const [tag, setTag] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!tag.trim()) {
      setError("Please enter a clan tag.");
      return;
    }

    setError(null);

    const encodedTag = encodeTag(tag);

    router.push(`/dashboard?tag=${encodedTag}`);
  }

  return (
    <div>
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
        p-1.5
        shadow-lg

        sm:p-2
      "
      >
        <div className="flex items-center px-3 text-muted-foreground sm:px-4">
          <Hash className="size-4 sm:size-4.5" />
        </div>

        <Input
          type="text"
          maxLength={MAX_CLAN_TAG_LENGTH}
          value={tag}
          onChange={(e) => setTag(e.target.value.toUpperCase())}
          placeholder="Enter a clan tag"
          className="
          flex-1
          border-0
          px-0
          text-sm
          shadow-none
          placeholder:text-sm
          focus-visible:ring-0

          sm:text-base
          sm:placeholder:text-base
        "
        />

        <Button
          type="submit"
          size="lg"
          className="
          h-11
          rounded-xl
          px-4

          sm:h-12
          sm:px-6
        "
        >
          <Search className="size-4 sm:size-5" />

          <span className="hidden xs:inline">Analyze Clan</span>

          <span className="xs:hidden">Analyze</span>
        </Button>
      </form>

      <div className="mt-1 min-h-5">
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
