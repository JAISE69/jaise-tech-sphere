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
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
      >
        <Download className="mr-2 h-4 w-4" />
        Resume
      </Button>

      {/* About Text */}
      <div className="max-w-2xl text-muted-foreground leading-relaxed">
        <p className="mb-4">
          I am a Computer Science engineering student with a strong foundation in full-stack development, 
          machine learning, and cross-functional teamwork. With a passion for applying technology to solve 
          real-world problems and streamline digital processes.
        </p>
        <p className="mb-4">
          My technical skills include secure coding practices, web development, and automation solutions. 
          I'm proficient in languages such as JavaScript, Python, Java, and C++, and have experience with 
          frameworks like React, UiPath, and various development tools.
        </p>
        <p>
          I'm constantly learning and staying updated with the latest technology trends to ensure that 
          I can address emerging challenges and opportunities effectively.
        </p>
      </div>

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