import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import CtaSection from "./components/CtaSection";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <ActivitiesSection />
        <CtaSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}