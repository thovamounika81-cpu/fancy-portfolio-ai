import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Agile / Scrum", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <Card 
                key={catIndex} 
                className="glass-effect shadow-medium animate-fade-in"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
