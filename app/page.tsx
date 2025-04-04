import { ClickEffect } from "@/components/click-effect";
import HeroSection from "@/components/hero";
import DemoSection from "@/components/demo-section";
import FeatureSection from "@/components/features";
import Roadmap from "@/components/roadmap";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function PluginLandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Click effect component */}
      <ClickEffect />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <DemoSection />
        <FeatureSection />
        <Roadmap />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
