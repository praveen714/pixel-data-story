
import { Database, Code, Table, PieChart, LayoutDashboard, BarChart } from "lucide-react";
import { useRef, useEffect } from "react";

const SkillsSection = () => {
  // Group skills by category
  const skillsCategories = [
    {
      title: "Data Manipulation",
      description: "Tools and languages for querying, cleaning, and transforming data",
      icon: <Database className="h-10 w-10" />,
      badgeClass: "skill-badge-data",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Excel", level: 90 },
        { name: "Python", level: 85 },
        { name: "R", level: 75 },
        { name: "ETL Pipelines", level: 80 },
      ],
    },
    {
      title: "Visualization",
      description: "Creating impactful charts, dashboards, and interactive reports",
      icon: <PieChart className="h-10 w-10" />,
      badgeClass: "skill-badge-viz",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "D3.js", level: 70 },
        { name: "Looker Studio", level: 80 },
        { name: "Data Storytelling", level: 95 },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Software and services for data storage, processing, and analysis",
      icon: <Code className="h-10 w-10" />,
      badgeClass: "skill-badge-tool",
      skills: [
        { name: "BigQuery", level: 85 },
        { name: "Snowflake", level: 80 },
        { name: "Alteryx", level: 75 },
        { name: "Git", level: 80 },
        { name: "Azure", level: 70 },
      ],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardsRef.current?.querySelectorAll(".skill-card");
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-scale-in");
                card.classList.remove("opacity-0");
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
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
      id="skills"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My toolkit for turning raw data into actionable business insights, 
            with expertise in various data technologies and visualization tools.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-card opacity-0 card-data hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <p className="text-foreground/70 mb-6">
                {category.description}
              </p>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className={category.badgeClass}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary group-hover:animate-pulse-glow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
