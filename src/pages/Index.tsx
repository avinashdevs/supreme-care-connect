import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DoctorsSection />
    <BookingSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
