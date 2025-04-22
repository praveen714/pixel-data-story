
import { useState, useRef, useEffect } from "react";
import { BarChart, PieChart, TrendingUp, Filter } from "lucide-react";

const DataPlaygroundSection = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const charts = [
    {
      id: "sales",
      title: "Sales Performance",
      description: "Interactive sales performance dashboard by region and product category",
      icon: <BarChart className="h-5 w-5" />,
      embedUrl: "https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Interactive+Sales+Dashboard",
      filters: ["Region", "Time Period", "Product Category"],
    },
    {
      id: "customer",
      title: "Customer Segments",
      description: "Customer segmentation analysis with interactive filtering",
      icon: <PieChart className="h-5 w-5" />,
      embedUrl: "https://via.placeholder.com/1200x600/8b5cf6/ffffff?text=Customer+Segmentation+Dashboard",
      filters: ["Age Group", "Purchase Frequency", "Lifetime Value"],
    },
    {
      id: "forecast",
      title: "Revenue Forecast",
      description: "Forecasting model with adjustable parameters",
      icon: <TrendingUp className="h-5 w-5" />,
      embedUrl: "https://via.placeholder.com/1200x600/22c55e/ffffff?text=Revenue+Forecast+Model",
      filters: ["Scenario", "Growth Rate", "Time Horizon"],
    },
  ];

  const activeChart = charts.find((chart) => chart.id === activeTab) || charts[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            chartRef.current?.classList.add("animate-fade-in");
            chartRef.current?.classList.remove("opacity-0");
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
  }, [activeTab]);

  return (
    <section
      id="playground"
      ref={sectionRef}
      className="section-padding min-h-screen bg-muted/30 dark:bg-muted/10"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Data Playground</h2>
          <div className="h-1 w-20 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore interactive data visualizations and dashboards. Filter, sort, and analyze
            the data to uncover insights on your own.
          </p>
        </div>

        {/* Tabs for different visualizations */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {charts.map((chart) => (
            <button
              key={chart.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === chart.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab(chart.id)}
            >
              {chart.icon}
              <span>{chart.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive visualization area */}
        <div className="card-data border-primary/20 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="w-full lg:w-3/4">
              <h3 className="text-2xl font-semibold mb-2">{activeChart.title}</h3>
              <p className="text-foreground/70">{activeChart.description}</p>
            </div>

            {/* Filters */}
            <div className="w-full lg:w-1/4 lg:border-l lg:border-border lg:pl-6">
              <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                <Filter className="h-5 w-5" />
                <span>Dashboard Filters</span>
              </div>
              <div className="space-y-4">
                {activeChart.filters.map((filter, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm font-medium">{filter}</label>
                    <select className="w-full p-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none">
                      <option value="all">All {filter}s</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization embed */}
          <div
            ref={chartRef}
            className="opacity-0 w-full bg-background overflow-hidden rounded-lg border border-border"
          >
            <img
              src={activeChart.embedUrl}
              alt={activeChart.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4 bg-muted/30 text-center">
              <p className="text-sm text-foreground/60">
                Note: This is a placeholder for an interactive dashboard. In a real implementation, this would be an embedded
                Tableau Public visualization, a Plotly chart, or a similar interactive tool.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-2 text-primary hover:underline text-sm font-medium"
              >
                <span>Open in full screen</span>
                <ArrowRightIcon className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the arrow icon
const ArrowRightIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default DataPlaygroundSection;
