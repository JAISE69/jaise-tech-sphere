import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jaiseajohn",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: FileText,
      href: "#",
      label: "Resume"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <div className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a href="mailto:jaisejohn69@gmail.com" className="text-sm text-primary hover:text-primary-glow transition-colors">
              jaisejohn69@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+91-8296005662</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Mangalore, Karnataka, India</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}