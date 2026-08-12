"use client";

import Link from "next/link";
import { NAV_LINKS, TRY_IT_OUT_HREF } from "./navigation";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/button";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 md:flex" aria-label="Desktop navigation">
      {NAV_LINKS.map((link) => (
        <button
          key={link.href}
          type="button"
          className="nav-link"
          onClick={() => scrollToSection(link.href.replace("#", ""))}
        >
          {link.label}
        </button>
      ))}

      <Button asChild className="h-9 rounded-md px-4 text-sm font-medium shadow-sm">
        <Link href={TRY_IT_OUT_HREF}>Try It Out</Link>
      </Button>
    </nav>
  );
}
