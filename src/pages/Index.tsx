console.log("Index loaded");
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhoWeWorkWith />
    <ProblemSolution />
    <ServicesSection />
    <ImpactSection />
    <TestimonialsSection />
    <TrustSection />
    <ProcessSection />
    <WhyChooseUs />
    <DifferentiatorSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;

