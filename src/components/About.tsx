import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and seamless experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="space-y-8 animate-fade-in">
            <Card className="glass-effect shadow-medium">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with over 5 years of experience building 
                  web applications. I specialize in React, Node.js, and modern JavaScript frameworks, 
                  with a keen eye for design and user experience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in tech started with a curiosity about how things work, which evolved 
                  into a career dedicated to creating innovative solutions that make a difference. 
                  I believe in continuous learning and staying up-to-date with the latest technologies.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="glass-effect shadow-medium hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
