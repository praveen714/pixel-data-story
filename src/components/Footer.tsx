
import { Heart } from "lucide-react";
import { scrollToSection } from "../utils/useScrollSpy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="text-xl font-bold text-gradient cursor-pointer"
            >
              Praveen Kumar Nagata
            </a>
            <p className="text-sm text-foreground/70 mt-1">
              Turning Data into Decisions
            </p>
          </div>
          
          <div className="text-sm text-foreground/70 flex items-center">
            <span>© {currentYear} All rights reserved</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and data
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
