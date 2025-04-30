
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";

const Index = () => {
  // Function to handle smooth reveal animations
  useEffect(() => {
    const initRevealAnimation = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = revealElements[i].getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
          }
        }
      };
      
      window.addEventListener('scroll', revealOnScroll);
      // Initial check to reveal elements that are already visible
      revealOnScroll();
      
      return () => window.removeEventListener('scroll', revealOnScroll);
    };
    
    initRevealAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
