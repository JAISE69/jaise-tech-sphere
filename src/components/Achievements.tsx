import { Trophy, Users, Zap, FileText, ExternalLink } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: "KeyMint – Secure Password Generator",
      subtitle: "React Project • 2024",
      description: "A responsive password generator with customizable settings and real-time password strength analysis. Features dark mode support and clipboard functionality.",
      icon: FileText,
      repoUrl: "https://github.com/JAISE69/KeyMint",
      isProject: true,
    },
    {
      title: "Resume Generator – UiPath Automation",
      subtitle: "Automation Project • 2024", 
      description: "An intelligent resume generator built using UiPath automation platform with data input forms, template selection, and automated PDF generation.",
      icon: FileText,
      repoUrl: "https://github.com/JAISE69/resume-generator-uipath",
      isProject: true,
    },
    {
      title: "HackToFuture Hackathon",
      subtitle: "St. Joseph Engineering College • 2024",
      description: "Developed sustainability-focused tech solution in a 48-hour sprint, showcasing rapid prototyping and innovation skills.",
      icon: Trophy,
      repoUrl: "https://github.com/JAISE69/hack-to-future-2024",
      isProject: true,
    },
    {
      title: "Community Volunteer",
      subtitle: "Local Community Initiative • 2023",
      description: "Led a community initiative for clothes and books distribution, demonstrating leadership and social responsibility skills.",
      icon: Users,
      repoUrl: null,
      isProject: false,
    },
  ];

  const handleProjectClick = (repoUrl: string) => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50 transition-colors ${
              achievement.isProject && achievement.repoUrl 
                ? 'hover:bg-card hover:border-primary cursor-pointer group' 
                : 'hover:bg-card'
            }`}
            onClick={achievement.isProject && achievement.repoUrl ? () => handleProjectClick(achievement.repoUrl!) : undefined}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <achievement.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                {achievement.isProject && achievement.repoUrl && (
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
              <p className="text-sm text-primary mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              {achievement.isProject && achievement.repoUrl && (
                <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view repository →
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}