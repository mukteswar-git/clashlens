import { Container } from "../Container";
import { legalLinks, productLinks, resourceLinks } from "./footer-data";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <section className="border-t border-border/50 bg-secondary/20 pt-28" id="footer">
      <Container>
        <div className="grid gap-16 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          <FooterBrand />

          <FooterLinks title="Product" links={productLinks} />

          <FooterLinks title="Resource" links={resourceLinks} />

          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        <FooterBottom />
      </Container>
    </section>
  );
}
