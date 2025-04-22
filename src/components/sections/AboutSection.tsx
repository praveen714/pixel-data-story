
import { Database, BarChart, FileSpreadsheet, PieChart, LayoutDashboard } from "lucide-react";
import { useEffect, useRef } from "react";
import { scrollToSection } from "../../utils/useScrollSpy";

const AboutSection = () => {
  // Timeline items with tool icons and years
  const timelineItems = [
    {
      year: "2019",
      title: "SQL Mastery",
      description: "Database querying, data transformation, and advanced joins",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      year: "2020",
      title: "Excel/Spreadsheets",
      description: "Advanced formulas, pivot tables, and data modeling",
      icon: <FileSpreadsheet className="h-8 w-8 text-secondary" />,
    },
    {
      year: "2021",
      title: "Python for Data",
      description: "Data analysis with pandas, numpy, and matplotlib",
      icon: <BarChart className="h-8 w-8 text-accent" />,
    },
    {
      year: "2022",
      title: "Tableau",
      description: "Dynamic dashboards and interactive visualizations",
      icon: <PieChart className="h-8 w-8 text-primary" />,
    },
    {
      year: "2023",
      title: "Power BI",
      description: "Business intelligence dashboards and DAX mastery",
      icon: <LayoutDashboard className="h-8 w-8 text-secondary" />,
    },
  ];

  // References for animation
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
            timelineItems?.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in");
                item.classList.remove("opacity-0");
              }, 300 * index);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding min-h-screen flex flex-col justify-center bg-muted/50 dark:bg-muted/20"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mb-6 rounded-full"></div>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a data analyst with a passion for transforming complex information into clear, actionable insights. 
              My journey in the data world has equipped me with a diverse set of skills and tools.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              I specialize in data cleaning, exploratory analysis, and creating compelling visualizations 
              that tell a story. My mission is to help businesses make data-driven decisions that drive growth and efficiency.
            </p>
            
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }} 
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all cursor-pointer"
            >
              Let's Connect
            </a>
          </div>
          
          <div className="w-full lg:w-1/2" ref={timelineRef}>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">My Skills Journey</h3>
            
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="timeline-item opacity-0 relative"
                >
                  <div className="absolute -left-[41px] p-2 rounded-full bg-background shadow-md">
                    {item.icon}
                  </div>
                  
                  <div className="card-data hover:border-primary/50 transition-all">
                    <span className="text-xs font-semibold text-primary">{item.year}</span>
                    <h4 className="text-xl font-semibold mt-1 mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
