import { Container } from "../container";
import { legalLinks, productLinks, resourceLinks } from "./footer-data";
import { FooterLinks } from "./footer-links";
import { Logo } from "../../../../components/common/logo/logo";

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
                Independent analytics platform built for Clash of Clans clan leaders.
              </p>
            </div>

            <div className="mt-6 border-t pt-6 text-center text-xs leading-relaxed text-muted-foreground">
              <p>
                ClashLens is an independent fan project and is not affiliated with, endorsed,
                sponsored, or specifically approved by Supercell. Clash of Clans is a trademark of
                Supercell. Data is provided by the official Clash of Clans API.{" "}
                <a
                  href="https://supercell.com/fan-content-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Supercell Fan Content Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
