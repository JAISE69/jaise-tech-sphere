import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBackground from '@/assets/hero-background.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            JAISE A. JOHN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-primary mb-8 font-medium">
            Future-ready developer. Building secure, smart, and scalable tech solutions.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slide-up">
          <Card className="p-4 hover-lift shadow-card">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">Mangalore, Karnataka</span>
            </div>
          </Card>
          <Card className="p-4 hover-lift shadow-card">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:jaisejohn69@gmail.com" className="text-sm hover:text-primary transition-smooth">
                jaisejohn69@gmail.com
              </a>
            </div>
          </Card>
          <Card className="p-4 hover-lift shadow-card">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">+91-8296005662</span>
            </div>
          </Card>
          <Card className="p-4 hover-lift shadow-card">
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5 text-primary" />
              <a 
                href="https://linkedin.com/in/jaiseajohn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-smooth"
              >
                LinkedIn Profile
              </a>
            </div>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="lg" className="gradient-primary hover-glow">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}