import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">S</span>
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                SilverWisdom
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bridging the gap between experience and opportunity. We connect seasoned professionals with those who need their expertise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/browse" className="hover:text-white transition-colors">Browse Experts</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/join" className="hover:text-white transition-colors">Join as Expert</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest updates on expert availability and new features.
            </p>
            <div className="flex space-x-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent w-full"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-bold hover:bg-accent/90 transition-colors">
                Go
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SilverWisdom. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
