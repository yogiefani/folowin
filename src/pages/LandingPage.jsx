import React from "react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorks from "../components/HowItWorks";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingButtons />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
