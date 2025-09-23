import fixoLogo from "@/assets/fixo-logo.png";
import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 surface-glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={fixoLogo} 
                alt="FIXO" 
                className="h-8 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(1158%) hue-rotate(16deg) brightness(96%) contrast(91%)'
                }}
              />
            </div>
            <span className="text-2xl font-black text-display">
              <span style={{ color: 'hsl(35, 84%, 55%)' }}>FIXO</span>
              <span className="text-foreground ml-1">AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-accent transition-smooth font-semibold">
              Features
            </a>
            <a href="#results" className="text-foreground hover:text-accent transition-smooth font-semibold">
              Results
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-smooth font-semibold">
              Contact
            </a>
            <Button 
              className="tech-gradient text-white px-6 py-2 font-semibold hover:scale-105 transition-bounce"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;