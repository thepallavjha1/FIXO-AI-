import fixoLogo from "@/assets/fixo-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* FIXO Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/LOGO.png" 
              alt="FIXO Logo" 
              className="h-10 w-auto object-contain"
            />
            
          </div>
          
          {/* Navigation - can be expanded later */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
              Stats
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
