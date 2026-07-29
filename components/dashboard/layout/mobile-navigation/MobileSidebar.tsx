"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarNavigation, SidebarFooter } from "../sidebar";
import { Logo } from "@/components/common/logo/Logo";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex w-72 max-w-[85vw] flex-col p-0">
        <div className="border-b px-6 py-4">
          <Logo />
        </div>

        <SidebarNavigation />

        <SidebarFooter />
      </SheetContent>
    </Sheet>
  );
}
