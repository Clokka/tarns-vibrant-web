
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            TARN
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Photos
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              )}></span>
              <span className={cn(
                "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              )}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Photos
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
