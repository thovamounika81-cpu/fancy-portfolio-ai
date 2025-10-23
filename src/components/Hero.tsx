import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    // This would link to your actual CV file
    console.log("Download CV clicked");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-large">
              JD
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Crafting elegant solutions with modern technologies. Passionate about creating 
            intuitive user experiences and scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-large hover-lift"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 shadow-medium hover-lift"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
