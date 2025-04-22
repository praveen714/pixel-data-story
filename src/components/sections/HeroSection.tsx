
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "../../utils/useScrollSpy";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 data-flow-bg opacity-50 -z-10"></div>
      
      {/* Floating data elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 dark:opacity-30 text-primary"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
              fontSize: `${Math.random() > 0.5 ? '2rem' : '1.5rem'}`
            }}
          >
            {Math.random() > 0.7 ? '{data}' : Math.random() > 0.5 ? '</>' : 'SELECT *'}
          </div>
        ))}
      </div>

      <div className="container flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Turning Data</span> into <br />
          <span className="inline-block mt-2 animate-pulse-glow">Decisions</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 leading-relaxed">
          Data analyst specializing in transforming complex datasets into actionable business insights through powerful visualizations and data storytelling.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="btn-primary px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all cursor-pointer"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="btn-secondary px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-all cursor-pointer"
          >
            Get In Touch
          </a>
        </div>
        
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce mt-20 cursor-pointer"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
