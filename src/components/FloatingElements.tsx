import floatingHops from "@/assets/floating-hops.png";
import floatingBarrel from "@/assets/floating-barrel.png";
import floatingWheat from "@/assets/floating-wheat.png";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Hops */}
      <div className="absolute top-20 right-10 animate-bounce opacity-20" style={{ animationDelay: '0s', animationDuration: '4s' }}>
        <img src={floatingHops} alt="" className="w-16 h-16 rotate-12" />
      </div>
      
      <div className="absolute top-1/3 left-10 animate-bounce opacity-15" style={{ animationDelay: '2s', animationDuration: '5s' }}>
        <img src={floatingHops} alt="" className="w-12 h-12 -rotate-6" />
      </div>

      {/* Floating Barrels */}
      <div className="absolute bottom-1/3 right-1/4 animate-pulse opacity-10" style={{ animationDelay: '1s', animationDuration: '6s' }}>
        <img src={floatingBarrel} alt="" className="w-20 h-20 rotate-45" />
      </div>

      <div className="absolute top-1/2 right-20 animate-pulse opacity-15" style={{ animationDelay: '3s', animationDuration: '4s' }}>
        <img src={floatingBarrel} alt="" className="w-14 h-14 -rotate-12" />
      </div>

      {/* Floating Wheat */}
      <div className="absolute bottom-20 left-1/4 animate-bounce opacity-20" style={{ animationDelay: '0.5s', animationDuration: '7s' }}>
        <img src={floatingWheat} alt="" className="w-10 h-10 rotate-90" />
      </div>

      <div className="absolute top-40 left-1/3 animate-pulse opacity-10" style={{ animationDelay: '4s', animationDuration: '5s' }}>
        <img src={floatingWheat} alt="" className="w-8 h-8 -rotate-45" />
      </div>

      <div className="absolute bottom-40 right-10 animate-bounce opacity-15" style={{ animationDelay: '6s', animationDuration: '6s' }}>
        <img src={floatingWheat} alt="" className="w-12 h-12 rotate-30" />
      </div>

      {/* Additional scattered elements */}
      <div className="absolute top-60 right-1/3 animate-pulse opacity-10" style={{ animationDelay: '2.5s', animationDuration: '8s' }}>
        <img src={floatingHops} alt="" className="w-6 h-6 rotate-180" />
      </div>

      <div className="absolute bottom-60 left-20 animate-bounce opacity-20" style={{ animationDelay: '5s', animationDuration: '4s' }}>
        <img src={floatingBarrel} alt="" className="w-8 h-8 rotate-90" />
      </div>
    </div>
  );
};

export default FloatingElements;