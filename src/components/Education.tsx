import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "St. Joseph Engineering College",
      period: "2022 – 2026",
      cgpa: "7.45",
      status: "Currently Pursuing"
    },
    {
      degree: "10+2 (Pre-University)",
      institution: "St. Aloysius PU College",
      period: "2022",
      status: "Completed"
    },
    {
      degree: "10th Grade",
      institution: "Lourdes Central School",
      period: "2020",
      status: "Completed"
    }
  ];

  const experiences = [
    {
      title: "Community Volunteer",
      organization: "Local Community Initiative",
      period: "2023",
      description: "Led a community initiative for clothes and books distribution, demonstrating leadership and social responsibility.",
      type: "Volunteer"
    },
    {
      title: "HackToFuture Hackathon",
      organization: "Tech Competition",
      period: "2024",
      description: "Developed sustainability-focused tech solution in a 48-hour sprint, showcasing rapid prototyping and innovation skills.",
      type: "Competition"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and practical experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift shadow-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center">
                          <span className="font-medium">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-primary" />
              Experience & Activities
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-lift shadow-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.organization}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}