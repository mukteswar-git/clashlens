import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import { FAQSection } from "./components/marketing/faq/FAQSection";
import { FeaturesSection } from "./components/marketing/features/FeaturesSection";
import { Hero } from "./components/marketing/hero/HeroSection";

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
