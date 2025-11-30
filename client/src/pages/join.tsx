import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CATEGORIES } from "@/lib/mock-data";

export default function Join() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Join as an Expert</h1>
            <p className="text-muted-foreground text-lg">
              Turn your lifelong experience into a new income stream. Mentor the next generation.
            </p>
          </div>

          <Card className="border border-border shadow-md">
            <CardHeader className="bg-muted/30 border-b border-border/50 pb-8">
              <CardTitle className="font-serif text-2xl text-primary">Professional Profile</CardTitle>
              <CardDescription>Tell us about your career and expertise.</CardDescription>
            </CardHeader>
            
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="e.g. John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="e.g. Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Professional Title (Before Retirement)</Label>
                <Input id="title" placeholder="e.g. Chief Financial Officer, Senior Civil Engineer" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Primary Expertise</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.filter(c => c !== "All").map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="e.g. 35" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Briefly describe your career highlights and what you can offer..." 
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Hourly Rate (INR)</Label>
                <Input id="rate" type="number" placeholder="e.g. 1000" />
                <p className="text-xs text-muted-foreground">We recommend keeping this affordable to attract more clients.</p>
              </div>

              <div className="pt-6 flex justify-end">
                <Button size="lg" className="bg-primary text-white px-8 w-full md:w-auto">
                  Submit Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
