import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're seeking wisdom or sharing it, we have a plan that works for you.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Professionals Plan */}
          <Card className="border-2 border-muted hover:border-primary/20 transition-all duration-300 flex flex-col">
            <CardHeader className="text-center pb-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">For Professionals</h3>
              <CardDescription>Start sharing your expertise</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">₹499</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Verified "Expert" Badge</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority listing in search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Zero commission on first 3 sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Access to digital training tools</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Clients Plan */}
          <Card className="border-2 border-accent/50 bg-accent/5 hover:border-accent transition-all duration-300 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <CardHeader className="text-center pb-8">
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">For Clients</h3>
              <CardDescription>Access unlimited expertise</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">₹999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited messaging with experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced AI-matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority booking slots</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated support manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Looking for corporate solutions?</p>
          <Button variant="link" className="text-primary font-bold">Contact our Enterprise Team</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
