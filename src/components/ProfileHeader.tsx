import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 mb-16">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow p-1">
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
          J
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Jaise A. John</h1>
        <p className="text-xl text-muted-foreground">Computer Science Engineering Student</p>
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Mangalore, Karnataka</span>
        </div>
      </div>

      {/* Resume Button */}
      <a 
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          <Download className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </a>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
        <a href="mailto:jaisejohn69@gmail.com" className="flex items-center space-x-2 hover:text-primary transition-smooth">
          <Mail className="h-4 w-4" />
          <span>jaisejohn69@gmail.com</span>
        </a>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>+91-8296005662</span>
        </div>
        <a 
          href="https://linkedin.com/in/jaiseajohn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-primary transition-smooth"
        >
          <ExternalLink className="h-4 w-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}