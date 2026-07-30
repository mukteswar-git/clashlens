import { Container } from "../container";
import { Logo } from "../../../../components/common/logo/logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 shadow-sm">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo priority />

          <DesktopNav />

          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
