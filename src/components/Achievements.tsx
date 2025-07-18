import { Trophy, Users, Zap, FileText } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: "KeyMint – Secure Password Generator",
      subtitle: "React Project • 2024",
      description: "A responsive password generator with customizable settings and real-time password strength analysis. Features dark mode support and clipboard functionality.",
      icon: FileText,
    },
    {
      title: "Resume Generator – UiPath Automation",
      subtitle: "Automation Project • 2024", 
      description: "An intelligent resume generator built using UiPath automation platform with data input forms, template selection, and automated PDF generation.",
      icon: FileText,
    },
    {
      title: "HackToFuture Hackathon",
      subtitle: "St. Joseph Engineering College • 2024",
      description: "Developed sustainability-focused tech solution in a 48-hour sprint, showcasing rapid prototyping and innovation skills.",
      icon: Trophy,
    },
    {
      title: "Community Volunteer",
      subtitle: "Local Community Initiative • 2023",
      description: "Led a community initiative for clothes and books distribution, demonstrating leadership and social responsibility skills.",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <achievement.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
              <p className="text-sm text-primary mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}