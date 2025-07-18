import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Users, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Strong foundation in both frontend and backend technologies"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Passionate about AI and ML applications in real-world solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experienced in cross-functional teamwork and leadership"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Focused on applying technology to solve real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science engineering student with a passion for building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <div className="space-y-6">
            <Card className="p-8 shadow-card hover-lift">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a Computer Science engineering student with a strong foundation in 
                  <span className="text-primary font-medium"> full-stack development</span>, 
                  <span className="text-primary font-medium"> machine learning</span>, and 
                  <span className="text-primary font-medium"> cross-functional teamwork</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  My passion lies in applying technology to solve real-world problems and 
                  streamline digital processes. I believe in continuous learning and staying 
                  updated with the latest technological advancements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover-lift shadow-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-3">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}