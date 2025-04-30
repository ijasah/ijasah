
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container">
        <motion.div 
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
            variants={item}
          >
            <span className="font-serif">Hello, I'm</span>{" "}
            <span className="text-primary relative inline-block">
              IJAS A H
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            variants={item}
          >
            Data Scientist & Generative AI Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl"
            variants={item}
          >
            Results-driven professional with over 5+ years of experience in building data-driven solutions
            and deploying large-scale AI applications. Based in Cochin, Kerala.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={item}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="px-6 rounded-md group relative overflow-hidden"
            >
              <span className="relative z-10">Get in touch</span>
              <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 rounded-md relative overflow-hidden group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 bg-primary/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute right-0 top-1/4 -z-10 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M42.7,-73.4C55.9,-65.5,67.4,-54.6,74.8,-41.2C82.2,-27.8,85.7,-11.9,83.6,2.9C81.6,17.7,74.1,31.4,65.4,44.2C56.6,56.9,46.7,68.7,34.3,75.3C21.9,81.9,7,83.3,-7.2,79.5C-21.3,75.7,-34.8,66.7,-45.9,56.1C-57.1,45.5,-65.9,33.3,-70.3,19.7C-74.7,6.1,-74.6,-8.8,-71,-22.9C-67.4,-37.1,-60.3,-50.5,-49.5,-59.1C-38.7,-67.7,-24.2,-71.4,-9.5,-70.6C5.3,-69.7,29.5,-81.2,42.7,-73.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
