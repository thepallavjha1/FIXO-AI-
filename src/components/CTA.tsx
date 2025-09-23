import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-t from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto">
        <Card className="surface-glass border-0 shadow-glow overflow-hidden">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-display mb-6 leading-tight">
              Ready to <span className="brewery-gradient bg-clip-text text-transparent">Transform</span>
              <br />Your Brewery?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 150+ breweries worldwide who've revolutionized their operations with AI-powered optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="tech-gradient text-white px-10 py-6 text-lg font-semibold hover:scale-105 transition-bounce shadow-glow"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="px-10 py-6 text-lg font-semibold border-2 hover:bg-accent/10 hover:border-accent transition-smooth"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm">
                No commitment required • Free consultation included • Results in 30 days
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;