import { GraduationCap, Calendar, Award } from 'lucide-react';

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

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-sm text-primary mb-2">{edu.institution}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                {edu.cgpa && (
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                )}
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{edu.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}