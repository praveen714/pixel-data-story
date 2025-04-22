
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, BarChart, PieChart, Table } from "lucide-react";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Project categories
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "dashboard", name: "Dashboards" },
    { id: "analysis", name: "Analysis" },
    { id: "etl", name: "ETL" },
  ];

  // Sample projects
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard with real-time KPI tracking, sales forecasting, and regional performance analysis.",
      image: "https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Sales+Dashboard",
      categories: ["dashboard"],
      tags: ["Tableau", "SQL", "Sales Analytics"],
      icon: <BarChart className="h-6 w-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "K-means clustering analysis to identify high-value customer segments and behavioral patterns.",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Customer+Segmentation",
      categories: ["analysis"],
      tags: ["Python", "ML", "Clustering"],
      icon: <PieChart className="h-6 w-6 text-purple-500" />,
    },
    {
      id: 3,
      title: "Automated ETL Pipeline",
      description: "Data integration system for merging CRM, ERP, and marketing data into a unified warehouse.",
      image: "https://via.placeholder.com/600x400/22c55e/ffffff?text=ETL+Pipeline",
      categories: ["etl"],
      tags: ["Python", "Airflow", "BigQuery"],
      icon: <Table className="h-6 w-6 text-green-500" />,
    },
    {
      id: 4,
      title: "Financial Performance Analytics",
      description: "Comprehensive financial dashboard with P&L analysis, budget variance, and forecasting.",
      image: "https://via.placeholder.com/600x400/f97316/ffffff?text=Financial+Analytics",
      categories: ["dashboard", "analysis"],
      tags: ["Power BI", "DAX", "Finance"],
      icon: <BarChart className="h-6 w-6 text-orange-500" />,
    },
    {
      id: 5,
      title: "Marketing Attribution Model",
      description: "Multi-touch attribution model to analyze campaign effectiveness and ROI across channels.",
      image: "https://via.placeholder.com/600x400/ec4899/ffffff?text=Marketing+Attribution",
      categories: ["analysis"],
      tags: ["R", "Marketing", "Analytics"],
      icon: <PieChart className="h-6 w-6 text-pink-500" />,
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain analytics with inventory optimization and demand forecasting.",
      image: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Supply+Chain",
      categories: ["dashboard", "etl"],
      tags: ["Tableau", "Python", "Forecasting"],
      icon: <Table className="h-6 w-6 text-teal-500" />,
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProjects();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeCategory]);

  const animateProjects = () => {
    const projects = projectsRef.current?.querySelectorAll(".project-card");
    projects?.forEach((project, index) => {
      setTimeout(() => {
        project.classList.add("animate-fade-in");
        project.classList.remove("opacity-0");
      }, 150 * index);
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding min-h-screen bg-muted/30 dark:bg-muted/10"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore my data analysis projects, from interactive dashboards to in-depth
            analytical studies and data pipeline implementations.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-primary/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div 
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card opacity-0 group relative rounded-xl overflow-hidden card-data hover:shadow-lg transition-all duration-300"
            >
              {/* Project image with overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs py-1 px-2 bg-white/20 rounded-full backdrop-blur-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    {project.icon}
                  </div>
                </div>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary group-hover:underline"
                >
                  <span>View Project</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
