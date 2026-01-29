import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhySection } from "@/components/WhySection";
import { CoursesPreviewSection } from "@/components/CoursesPreviewSection";
import { InternshipPreviewSection } from "@/components/InternshipPreviewSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <CoursesPreviewSection />
        <InternshipPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
