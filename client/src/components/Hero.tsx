import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@assets/generated_images/hero_image_of_senior_professionals_collaborating.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-secondary/30">
      {/* Background Gradient / Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm tracking-wide mb-2 border border-accent/20">
              Bridging Generations
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-[1.1]">
              Experience on Demand.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Connect with verified retired professionals for mentorship, consulting, and specialized advice. Affordable expertise from those who’ve been there.
            </p>
            
            {/* Search Box */}
            <div className="bg-background p-2 rounded-lg shadow-lg border border-border max-w-md flex items-center gap-2">
              <Search className="text-muted-foreground ml-3 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Try 'Marketing Consultant' or 'Physics Tutor'" 
                className="border-0 shadow-none focus-visible:ring-0 bg-transparent text-base"
              />
              <Link href="/browse">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-md">
                  Search
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> 120+ Experts Online
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Verified Profiles
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in slide-in-from-right-5 duration-700 fade-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Senior professionals collaborating" 
                className="w-full h-full object-cover aspect-video"
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute top-8 -left-6 bg-white p-4 rounded-lg shadow-xl border border-border/50 max-w-[200px] hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">40+</div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Experience</p>
                    <p className="text-sm font-bold text-primary">Years Average</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-border/50 max-w-[200px] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold">5.0</div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Rating</p>
                    <p className="text-sm font-bold text-primary">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element behind */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
