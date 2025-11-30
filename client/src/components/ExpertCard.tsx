import { Expert } from "@/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

interface ExpertCardProps {
  expert: Expert;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/60 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={expert.image} 
          alt={expert.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-primary backdrop-blur-sm shadow-sm font-semibold">
          {expert.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
              {expert.name}
              {expert.verified && <CheckCircle className="text-blue-500 w-4 h-4" fill="currentColor" stroke="white" />}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{expert.title}</p>
          </div>
          <div className="flex items-center bg-accent/10 px-2 py-1 rounded text-accent-foreground font-bold text-sm">
            <Star className="w-3 h-3 fill-accent text-accent mr-1" />
            {expert.rating}
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {expert.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {expert.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          {expert.skills.length > 3 && (
            <span className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded-full">
              +{expert.skills.length - 3} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-4 border-t border-border/40 bg-muted/20 flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-primary">₹{expert.hourlyRate}</span>
          <span className="text-xs text-muted-foreground">/hr</span>
        </div>
        <Link href={`/expert/${expert.id}`}>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
