"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "./navigation";
import { useState } from "react";
import { scrollToSection } from "@/lib/scroll";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "../../../../components/common/logo/logo";

export function MobileNav() {
  const navLinkClass =
    "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent";
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="flex w-72 flex-col bg-background px-4 py-4">
          <Logo />

          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          <nav className="mt-6 flex flex-1 flex-col" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                className={`${navLinkClass} text-left`}
                onClick={() => {
                  setOpen(false);

                  setTimeout(() => {
                    scrollToSection(link.href.replace("#", ""));
                  }, 250);
                }}
              >
                {link.label}
              </button>
            ))}

            <div className="mt-auto pt-6">
              <Link
                href="#home"
                onClick={() => {
                  setTimeout(() => setOpen(false), 100);
                }}
              >
                <Button className="w-full">Analyze Clan</Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
