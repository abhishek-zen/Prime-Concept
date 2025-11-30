import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExpertCard from "@/components/ExpertCard";
import { EXPERTS, CATEGORIES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function BrowseExperts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExperts = EXPERTS.filter((expert) => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          expert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          expert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || expert.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary">Find an Expert</h1>
          <p className="text-muted-foreground">Browse verified professionals tailored to your needs.</p>
        </div>

        {/* Filters & Search */}
        <div className="bg-card rounded-lg p-4 border border-border shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search by name, title, or skill..." 
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-64">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="outline" className="w-full md:w-auto gap-2">
            <Filter size={16} /> More Filters
          </Button>
        </div>

        {/* Results Grid */}
        {filteredExperts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-muted-foreground mb-2">No experts found</h3>
            <p className="text-muted-foreground/70">Try adjusting your search or filters.</p>
            <Button variant="link" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
              Clear all filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
