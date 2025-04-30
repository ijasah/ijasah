
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "blog", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">
            <span className="font-serif">Portfolio</span>
          </div>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium hover:text-primary relative py-1",
                      activeSection === item.id 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
