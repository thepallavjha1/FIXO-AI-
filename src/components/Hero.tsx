import { ArrowRight, Play, Brain, Radar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/src/assets/brewery-ai-hero.jpg";
import breweryImage from "/src/assets/Brewery.png";
import armImage from "/src/assets/arm.png";
import prodImage from "/src/assets/prod.png";
import FeatureCard from "./FeatureCard";



const Hero = () => {


  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-x-hidden">

       
        {/* Content */}
          <div className="relative z-10 w-100 px-6 text-center">

            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-display mb-8 leading-none">
                <span className="text-foreground">Elevate Your</span>
                <br />
                <span className="brewery-gradient bg-clip-text text-transparent inline-block px-2">
                  Quality Control
                </span>

                <br />
                <span className="text-foreground">with AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                Transform QA across manufacturing, logistics, and services with intelligent automation,
                real-time IoT monitoring, computer vision, and autonomous drone systems for consistent, compliant quality at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="tech-gradient text-white px-8 py-6 text-lg font-semibold hover:scale-105 transition-bounce shadow-glow"
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                      modal.innerHTML = `
                        <div class="bg-white rounded-lg p-8 max-w-md mx-4 relative shadow-2xl">
                          <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl" onclick="this.closest('.fixed').remove()">&times;</button>
                          <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Us for Quality Assessment</h2>
                          <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                              </div>
                              <div>
                                <p class="font-semibold text-gray-700">Email</p>
                                <p class="text-gray-600">contact@fixonow.com</p>
                              </div>
                            </div>
                            <div class="flex items-center space-x-3">
                              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                              </div>
                              <div>
                                <p class="font-semibold text-gray-700">Phone</p>
                                <p class="text-gray-600">+91 8005539249</p>
                              </div>
                            </div>
                            <div class="flex items-center space-x-3">
                              <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <p class="font-semibold text-gray-700">Address</p>
                                <p class="text-gray-600">Incubation Cell, IIT Madras, Chennai, Tamil Nadu, India</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                  >
                  Get Quality Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                {/* <Button 
                  variant="ghost" 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold hover:bg-accent/10 transition-smooth"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button> */}
              </div>
            </div>
          </div>


        {/* Picture */}
          <div className="absolute top-0 right-[-29%] z-0 hidden lg:block">
            <img 
              src={breweryImage} 
              alt="Quality control visual element" 
              className="w-[530px] xl:w-[680px] h-auto pointer-events-none"
            />
          </div>

        {/* Dots */}
          <div className="absolute top-60 left-3/4 animate-pulse opacity-25 delay-1500">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
          </div>

          <div className="absolute top-40 left-1/4 animate-pulse opacity-25 delay-500">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
          </div>

          <div className="absolute bottom-10 right-7/8 animate-pulse opacity-25 delay-1000">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
          </div>

      </section>
    </>
  );
};

export default Hero;