import { TrendingUp, Clock, Target, Users } from "lucide-react";
import AnimatedGraph from "./AnimatedGraph";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "45%",
      label: "Production Increase",
      description: "Average output improvement",
      percentage: 85
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Savings",
      description: "Reduced manual monitoring", 
      percentage: 90
    },
    {
      icon: Target,
      value: "99.2%",
      label: "Quality Consistency", 
      description: "Batch-to-batch precision",
      percentage: 95
    },
    {
      icon: Users,
      value: "150+",
      label: "Happy Breweries",
      description: "Worldwide partnerships",
      percentage: 75
    }
  ];

  return (
    <section id="results" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-display mb-6">
            Results That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real metrics from breweries that chose intelligent optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedGraph
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              percentage={stat.percentage}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;