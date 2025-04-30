
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 animate-fade-in">
            <span className="font-serif">Hello, I'm</span>{" "}
            <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
            Designer & Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "600ms" }}>
            I create minimalist, functional digital experiences that balance form and function.
            Let's work together to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "900ms" }}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="px-6 rounded-md"
            >
              Get in touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 rounded-md"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View my work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
