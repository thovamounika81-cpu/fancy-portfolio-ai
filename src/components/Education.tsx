import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Web Technologies",
      gpa: "3.8/4.0"
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description: "Focus on Programming, Database Systems, and Network Architecture",
      gpa: "3.6/4.0"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "React Advanced Certification",
    "MongoDB Certified Developer"
  ];

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="glass-effect shadow-medium hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                          <p className="text-accent font-medium mb-1">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                          <p className="text-muted-foreground mb-2">{edu.description}</p>
                          <p className="text-sm font-semibold">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <Card className="glass-effect shadow-medium">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                        <span className="font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
