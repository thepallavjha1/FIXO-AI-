import fixoLogo from "@/assets/fixo-logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <img 
          src={fixoLogo} 
          alt="FIXO AI" 
          className="h-12 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;