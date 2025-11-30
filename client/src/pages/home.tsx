import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import ExpertCard from "@/components/ExpertCard";
import { EXPERTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const featuredExperts = EXPERTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Featured Experts Section */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Featured Experts
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Highly rated professionals ready to share their knowledge.
              </p>
            </div>
            <Link href="/browse">
              <Button variant="outline" className="mt-4 md:mt-0 gap-2">
                View All Experts <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </section>

        {/* Value Proposition / How it Works */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Why Choose SilverWisdom?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We unlock a hidden reservoir of talent that traditional job markets overlook.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Decades of Experience</h3>
                <p className="text-muted-foreground">
                  Our experts aren't just trained; they are battle-tested. They bring 20+ years of real-world problem-solving skills.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Verified & Vetted</h3>
                <p className="text-muted-foreground">
                  Every professional is manually verified for their credentials, work history, and expertise.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Affordable Mentorship</h3>
                <p className="text-muted-foreground">
                  Get access to C-suite level advice and senior mentorship at a fraction of the typical consulting cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Ready to share your wisdom?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
                Join thousands of retired professionals who are finding purpose and income by mentoring the next generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto">
                    Join as an Expert
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 font-bold text-lg px-8 py-6 h-auto">
                    Find an Expert
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
