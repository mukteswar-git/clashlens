import Link from "next/link";

import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 shadow-sm">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo />

          <div className="flex items-center gap-10">
            <Link href="#home" className="nav-link">
              Home
            </Link>
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#faq" className="nav-link">
              FAQ
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
