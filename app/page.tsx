import { Header } from "./components/layout/Header";
import { FeaturesSection } from "./components/marketing/features/FeaturesSection";
import { Hero } from "./components/marketing/hero/HeroSection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesSection />
    </main>
  );
}
