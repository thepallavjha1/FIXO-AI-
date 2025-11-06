import { TrendingUp, Clock, Target, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "45%",
      label: "Defect Reduction",
      description: "Average decrease in non-conformities"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Inspection Time Savings",
      description: "Reduced manual checks"
    },
    {
      icon: Target,
      value: "99.2%",
      label: "Compliance Accuracy", 
      description: "Automated audit-ready logs"
    },
    {
      icon: Users,
      value: "150+",
      label: "Enterprises Served",
      description: "Global partnerships"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-display mb-6">
            Results That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real metrics from enterprises that chose intelligent quality control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="tech-gradient w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="brewery-gradient bg-clip-text text-transparent text-5xl font-black text-display mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;