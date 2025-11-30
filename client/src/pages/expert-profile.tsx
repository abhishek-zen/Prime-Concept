import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useRoute } from "wouter";
import { EXPERTS, REVIEWS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, CheckCircle, Calendar } from "lucide-react";
import NotFound from "./not-found";

export default function ExpertProfile() {
  const [match, params] = useRoute("/expert/:id");
  const expert = EXPERTS.find(e => e.id === params?.id);

  if (!expert) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pb-20">
        {/* Profile Header */}
        <div className="bg-secondary/30 border-b border-border/60 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-background flex-shrink-0">
                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-white/50 text-primary border border-primary/10">
                    {expert.category}
                  </Badge>
                  {expert.verified && (
                    <span className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      <CheckCircle className="w-3 h-3 mr-1" /> Verified Expert
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {expert.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">{expert.title}</p>
                
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-accent fill-accent mr-1" />
                    <span className="text-foreground font-bold mr-1">{expert.rating}</span>
                    ({expert.reviewCount} reviews)
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {expert.experience} Years Exp.
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Online / Remote
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">₹{expert.hourlyRate}</span>
                  <span className="text-muted-foreground">/hour</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3" size="lg">
                  Book Session
                </Button>
                <Button variant="outline" className="w-full">
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {expert.bio}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Expertise & Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {expert.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-muted text-foreground rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Client Reviews</h2>
                <div className="space-y-6">
                  {REVIEWS.map((review) => (
                    <div key={review.id} className="border-b border-border/50 pb-6 last:border-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-bold text-primary">{review.user}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(review.rating) ? "text-accent fill-accent" : "text-muted-foreground/30"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Availability</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  {expert.availability}
                </div>
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                  * Times are displayed in your local timezone.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-blue-700">
                  Funds are held in escrow until the session is complete. If you're not satisfied, we offer a full refund.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
