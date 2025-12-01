import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl font-bold">S</span>
            </div>
            <span className="font-serif text-xl font-bold text-primary tracking-tight hidden md:inline-block">
              Silver-Wisdom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={isActive("/")}>Home</NavLink>
            <NavLink href="/browse" active={isActive("/browse")}>Browse Experts</NavLink>
            <NavLink href="/pricing" active={isActive("/pricing")}>Pricing</NavLink>
            <NavLink href="/join" active={isActive("/join")}>Join as Expert</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium text-foreground hover:text-primary">
              Log In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6">
              Book an Expert
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border p-4 bg-background animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/browse" onClick={() => setIsMobileMenuOpen(false)}>Browse Experts</MobileNavLink>
            <MobileNavLink href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</MobileNavLink>
            <MobileNavLink href="/join" onClick={() => setIsMobileMenuOpen(false)}>Join as Expert</MobileNavLink>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-center">Log In</Button>
              <Button className="w-full justify-center">Book an Expert</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link href={href} className={`text-sm font-medium transition-colors hover:text-primary ${active ? "text-primary font-bold" : "text-muted-foreground"}`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="text-base font-medium text-foreground hover:text-primary py-2 block">
      {children}
    </Link>
  );
}
