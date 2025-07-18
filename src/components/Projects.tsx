import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, FileText, Settings } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "KeyMint – Secure Password Generator",
      description: "A responsive password generator with customizable settings and real-time password strength analysis. Features dark mode support, clipboard copy functionality, and modern UI design.",
      technologies: ["React", "JavaScript", "Vercel", "Lucide Icons"],
      icon: Shield,
      features: [
        "Customizable password settings",
        "Real-time strength analysis",
        "Dark/Light mode toggle",
        "One-click clipboard copy",
        "Responsive design"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Resume Generator – UiPath Automation",
      description: "An intelligent resume generator built using UiPath automation platform. Streamlines the resume creation process with data input forms, template selection, and automated PDF generation.",
      technologies: ["UiPath", "PDF Generation", "Automation", "Forms"],
      icon: FileText,
      features: [
        "Automated data input forms",
        "Multiple template selection",
        "PDF generation and export",
        "Data validation and formatting",
        "User-friendly interface"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-card">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="hover-glow">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-glow">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Settings className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button size="sm" className="gradient-primary hover-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                  <Button variant="outline" size="sm" className="hover-lift">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}