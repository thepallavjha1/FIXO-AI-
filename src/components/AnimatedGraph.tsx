import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface AnimatedGraphProps {
  value: string;
  label: string;
  description: string;
  percentage: number;
  delay?: number;
}

const AnimatedGraph = ({ value, label, description, percentage, delay = 0 }: AnimatedGraphProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setAnimatedPercentage(prev => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className={`text-center group transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Circular Progress Graph */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        {/* Background Circle */}
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            fill="none"
          />
          {/* Animated Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${animatedPercentage * 3.14} 314`}
            className="transition-all duration-500 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 84%, 55%)" />
              <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="tech-gradient w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Value with animated counter */}
      <div className="brewery-gradient bg-clip-text text-transparent text-4xl font-black text-display mb-2">
        {value}
      </div>
      
      <h3 className="text-lg font-bold mb-2 text-foreground">
        {label}
      </h3>
      
      <p className="text-muted-foreground text-sm">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-border rounded-full h-2 mt-4 overflow-hidden">
        <div 
          className="brewery-gradient h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default AnimatedGraph;