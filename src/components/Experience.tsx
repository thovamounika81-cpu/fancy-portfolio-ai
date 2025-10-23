import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with design team to create responsive user interfaces.",
      achievements: [
        "Built 5+ production-ready applications",
        "Improved code coverage from 60% to 85%",
        "Introduced TypeScript to the codebase"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description: "Started career building features for SaaS products. Learned modern web development practices and agile methodologies.",
      achievements: [
        "Developed key features for main product",
        "Participated in code reviews and pair programming",
        "Completed training in React and Node.js"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-20 glass-effect shadow-medium hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Achievements:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
