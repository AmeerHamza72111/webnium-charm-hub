import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "TechGear Pro",
    category: "E-commerce",
    description: "A modern electronics store with advanced filtering and seamless checkout experience.",
    tech: ["WooCommerce", "WordPress", "Stripe"],
  },
  {
    image: portfolio2,
    title: "Luxe Fashion House",
    category: "E-commerce",
    description: "High-end fashion e-commerce with elegant design and premium user experience.",
    tech: ["Shopify", "Custom Theme", "Klaviyo"],
  },
  {
    image: portfolio3,
    title: "Corporate Solutions Inc",
    category: "Corporate Website",
    description: "Professional corporate website with modern design and lead generation features.",
    tech: ["WordPress", "Elementor", "HubSpot"],
  },
  {
    image: portfolio4,
    title: "Gourmet Kitchen",
    category: "Restaurant",
    description: "Restaurant website with online ordering and reservation system integration.",
    tech: ["WordPress", "WooCommerce", "OpenTable"],
  },
  {
    image: portfolio1,
    title: "FitLife Supplements",
    category: "E-commerce",
    description: "Health and fitness e-commerce with subscription model and loyalty program.",
    tech: ["WooCommerce", "WordPress", "Yotpo"],
  },
  {
    image: portfolio3,
    title: "Legal Partners LLP",
    category: "Professional Services",
    description: "Law firm website with case study showcase and client portal integration.",
    tech: ["WordPress", "Custom Development", "Clio"],
  },
];

const categories = ["All", "E-commerce", "Corporate Website", "Restaurant", "Professional Services"];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
              Projects That{" "}
              <span className="gradient-text">Speak for Themselves</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg md:text-xl leading-relaxed">
              Explore our collection of successful projects across various industries. 
              Each project represents our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-accent text-primary"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="accent" size="sm" className="gap-2">
                      View Project
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-accent text-sm font-medium">{item.category}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">150+</div>
              <div className="text-hero-foreground/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-hero-foreground/60">E-commerce Stores</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">$2M+</div>
              <div className="text-hero-foreground/60">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-hero-foreground/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Be Our Next{" "}
              <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something amazing together. Start your project today and join our growing list of satisfied clients.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
