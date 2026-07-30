import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/header";
import { FAQSection } from "./components/marketing/faq/faq-section";
import { FeaturesSection } from "./components/marketing/features/features-section";
import { Hero } from "./components/marketing/hero/hero-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Modern analytics platform for Clash of Clans clan leaders. Explore live clan data, member performance, and actionable insights.",
};
export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
