import { Brain, Radar, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Process Optimization",
      description: "Advanced machine learning algorithms analyze your brewing process in real-time, identifying bottlenecks and optimizing production efficiency.",
      stats: "35% Efficiency Boost",
      iconBg: "bg-primary"
    },
    {
      icon: Radar,
      title: "IoT Monitoring Network", 
      description: "Comprehensive sensor network monitors temperature, pressure, pH levels, and fermentation progress across all your brewing operations.",
      stats: "24/7 Monitoring",
      iconBg: "bg-orange"
    },
    {
      icon: Zap,
      title: "Drone Analytics",
      description: "Autonomous drones provide aerial inspection of tanks, equipment maintenance insights, and facility security monitoring.",
      stats: "99.9% Uptime",
      iconBg: "bg-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-display mb-4 leading-tight">
            <span className="text-foreground">Intelligent Brewing</span>
            <br />
            <span className="text-orange">Technology Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars of modern brewery optimization working in perfect harmony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default Features;