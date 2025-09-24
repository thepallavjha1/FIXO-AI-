import { Brain, Radar, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import hopsAiIcon from "/src/assets/hops-ai-icon.png";
import droneIcon from "/src/assets/drone-brewery-icon.png";
import prodImage from "/src/assets/prod.png";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Process Optimization",
      description: "Advanced machine learning algorithms analyze your brewing process in real-time, identifying bottlenecks and optimizing production efficiency.",
      stats: "35% Efficiency Boost",
      // image: hopsAiIcon,
      gradient: "tech-gradient"
    },
    {
      icon: Radar,
      title: "IoT Monitoring Network", 
      description: "Comprehensive sensor network monitors temperature, pressure, pH levels, and fermentation progress across all your brewing operations.",
      stats: "24/7 Monitoring",
      gradient: "brewery-gradient"
    },
    {
      icon: Zap,
      title: "Drone Analytics",
      description: "Autonomous drones provide aerial inspection of tanks, equipment maintenance insights, and facility security monitoring.",
      stats: "99.9% Uptime",
      // image: droneIcon,
      gradient: "tech-gradient"
    }
  ];

  return (
    <section className="py-4 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-display mb-6 leading-tight">
            <span className="text-foreground">Intelligent Brewing</span>
            <br />
            <span className="brewery-gradient bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three pillars of modern brewery optimization working in perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[90%] right-[-15%] w-90 h-auto">
            <img 
              src={prodImage} 
              alt="Floating brewery element" 
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[650px] h-auto pointer-events-none"
            />
      </div>
    </section>
  );
};

export default Features;