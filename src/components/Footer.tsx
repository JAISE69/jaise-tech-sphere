import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <Card className="p-12 shadow-card mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a tech chat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:jaisejohn69@gmail.com" className="font-medium hover:text-primary transition-smooth">
                  jaisejohn69@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91-8296005662</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Mangalore, Karnataka</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/jaiseajohn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-smooth"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="lg" className="gradient-primary hover-glow">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </Card>

        {/* Bottom Footer */}
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center space-x-2">
            <span>© 2024 JAISE A. JOHN. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </p>
          <p className="mt-2 text-sm">
            Future-ready developer building secure, smart, and scalable solutions
          </p>
        </div>
      </div>
    </footer>
  );
}