
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Using Cohort Analysis to Understand Customer Retention",
      snippet: "Learn how cohort analysis can help you identify patterns in customer behavior and improve retention strategies.",
      image: "https://via.placeholder.com/600x400/0369a1/ffffff?text=Cohort+Analysis",
      date: "Mar 15, 2023",
      readTime: "6 min read",
      tags: ["Customer Analytics", "Retention", "Python"],
    },
    {
      id: 2,
      title: "Building Effective Dashboards: 5 Principles for Data Visualization",
      snippet: "Discover the key principles that make dashboards effective and how to apply them in your next data visualization project.",
      image: "https://via.placeholder.com/600x400/7c3aed/ffffff?text=Dashboard+Design",
      date: "Apr 22, 2023",
      readTime: "8 min read",
      tags: ["Visualization", "Dashboard Design", "UX"],
    },
    {
      id: 3,
      title: "From SQL to Python: When to Use Each for Data Analysis",
      snippet: "A comparison of SQL and Python for different data analysis tasks, with practical examples and performance considerations.",
      image: "https://via.placeholder.com/600x400/16a34a/ffffff?text=SQL+vs+Python",
      date: "Jun 10, 2023",
      readTime: "7 min read",
      tags: ["SQL", "Python", "Data Analysis"],
    },
    {
      id: 4,
      title: "A/B Testing: Statistical Methods for Data-Driven Decisions",
      snippet: "An in-depth guide to designing, implementing, and analyzing A/B tests for product and marketing optimization.",
      image: "https://via.placeholder.com/600x400/ea580c/ffffff?text=A/B+Testing",
      date: "Aug 5, 2023",
      readTime: "10 min read",
      tags: ["A/B Testing", "Statistics", "Experimentation"],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const posts = postsRef.current?.querySelectorAll(".blog-card");
            posts?.forEach((post, index) => {
              setTimeout(() => {
                post.classList.add("animate-fade-in");
                post.classList.remove("opacity-0");
              }, 150 * index);
            });
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
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Insights</h2>
          <div className="h-1 w-20 bg-primary mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Sharing my knowledge and experiences through articles on data analysis,
            visualization techniques, and solving real business problems with data.
          </p>
        </div>

        <div 
          ref={postsRef}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card opacity-0 group card-data hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent pt-10 pb-4 px-6">
                  <div className="flex items-center gap-4 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs py-1 px-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {post.snippet}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary group-hover:underline"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
