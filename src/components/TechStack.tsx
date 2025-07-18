import { Code, Database, Wrench, Globe, Terminal, Cpu, Settings, Zap, FileText, Shield, Brain, Users } from 'lucide-react';

export function TechStack() {
  const techStack = [
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    { name: 'Python', icon: Terminal, color: 'text-blue-400' },
    { name: 'Java', icon: Cpu, color: 'text-orange-400' },
    { name: 'C++', icon: Code, color: 'text-purple-400' },
    { name: 'React', icon: Globe, color: 'text-cyan-400' },
    { name: 'Node.js', icon: Settings, color: 'text-green-400' },
    { name: 'SQL', icon: Database, color: 'text-blue-400' },
    { name: 'Git', icon: Wrench, color: 'text-orange-400' },
    { name: 'UiPath', icon: FileText, color: 'text-purple-400' },
    { name: 'MATLAB', icon: Brain, color: 'text-red-400' },
    { name: 'IoT', icon: Zap, color: 'text-green-400' },
    { name: 'Go', icon: Terminal, color: 'text-cyan-400' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-3 group">
            <div className={`w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
              <tech.icon className="h-6 w-6" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}