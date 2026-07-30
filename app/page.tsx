import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/header";
import { FAQSection } from "./components/marketing/faq/faq-section";
import { FeaturesSection } from "./components/marketing/features/features-section";
import { Hero } from "./components/marketing/hero/hero-section";

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
