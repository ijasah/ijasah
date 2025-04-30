
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} IJAS A H. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#about" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#story" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#achievements" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
