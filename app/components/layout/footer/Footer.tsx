import { Container } from "../Container";
import { legalLinks, productLinks, resourceLinks } from "./footer-data";
import { FooterLinks } from "./FooterLinks";
import { Logo } from "../../../../components/common/logo/Logo";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Brand */}
          <div className="mb-10 lg:mb-12">
            <Logo />

            <p className="mt-5 max-w-xs text-muted-foreground">
              Data-driven analytics platform for Clash of Clans clan leaders.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-[1fr_1fr_1.2fr]">
            <FooterLinks title="Product" links={productLinks} />
            <FooterLinks title="Resource" links={resourceLinks} />

            <div className="col-span-2 lg:col-span-1">
              <FooterLinks title="Legal" links={legalLinks} />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t pt-6 lg:mt-16 lg:pt-8">
            <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
              <p>© 2026 ClashLens. All rights reserved.</p>

              <p>
                Built by <span className="font-medium">Mukteswar Tripathy</span>
              </p>

              <p className="max-w-sm">
                ClashLens is an independent analytics platform and is not
                affiliated with, endorsed by, or sponsored by Supercell.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
