import { Container } from "../Container";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 shadow-sm">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo />

          <DesktopNav />

          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
