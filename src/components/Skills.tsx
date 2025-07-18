import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Users, Languages } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "SQL", "JavaScript", "Go"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["MATLAB", "IoT", "UiPath", "Git/GitHub", "Networking Basics"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Collaboration", "Leadership", "Problem-solving", "Quick Learner"]
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English (Fluent)", "Hindi", "Malayalam", "Kannada"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift shadow-card">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <Card className="p-8 shadow-card">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">Core Competencies</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Specializing in <span className="text-primary font-medium">full-stack development</span> with 
                expertise in modern web technologies, <span className="text-primary font-medium">machine learning</span> applications, 
                and <span className="text-primary font-medium">automation solutions</span>. 
                Strong foundation in data structures, algorithms, and software engineering principles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}