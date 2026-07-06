"use client";

import { NAV_LINKS } from "./navigation";
import { scrollToSection } from "@/lib/scroll";

export function DesktopNav() {

  return (
    <nav
      className="hidden items-center gap-10 md:flex"
      aria-label="Desktop navigation"
    >
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
    </nav>
  );
}