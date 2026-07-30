"use client";

import { Logo } from "@/components/common/logo/logo";

import { MobileSidebar } from "./mobile-sidebar";

export function MobileNavigation() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <Logo />
      </div>
    </header>
  );
}
