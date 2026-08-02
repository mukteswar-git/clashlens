"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Hash, Search } from "lucide-react";

import { normalizeClanTag } from "@/lib/coc/normalize-tag";
import { MAX_CLAN_TAG_LENGTH } from "@/lib/coc/constants";

import { RecentSearchesContainer } from "@/components/common/recent-searches/recent-searches-container";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ClanSearchProps = {
  placeholder?: string;
  buttonText?: string;
  showError?: boolean;
};

export function ClanSearch({
  placeholder = "Enter a clan tag",
  buttonText = "Analyze Clan",
  showError = true,
}: ClanSearchProps) {
  const [tag, setTag] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!tag.trim()) {
      setError("Please enter a clan tag.");
      return;
    }

    setError(null);

    const normalizedTag = normalizeClanTag(tag);
    const routeTag = normalizedTag.slice(1);

    router.push(`/dashboard/${routeTag}`);
  }

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="
        flex
        items-center
        w-full
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

        <label htmlFor="clan-tag" className="sr-only">
          Clan Tag
        </label>

        <Input
          id="clan-tag"
          name="clanTag"
          type="text"
          maxLength={MAX_CLAN_TAG_LENGTH}
          value={tag}
          onChange={(e) => setTag(e.target.value.toUpperCase())}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => setIsFocused(false), 150);
          }}
          placeholder={placeholder}
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

          <span className="hidden xs:inline">{buttonText}</span>

          <span className="xs:hidden">Analyze</span>
        </Button>
      </form>

      {isFocused && <RecentSearchesContainer />}

      {showError && (
        <div className="mt-1 min-h-5">
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      )}
    </div>
  );
}
