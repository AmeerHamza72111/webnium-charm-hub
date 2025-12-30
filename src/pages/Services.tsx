import { Link } from "react-router-dom";
import { ArrowRight, Code, ShoppingCart, TrendingUp, Search, Paintbrush, Headphones, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const mainServices = [
  {
    icon: Code,
    title: "WordPress Development",
    description: "Custom WordPress websites built from scratch or using premium themes. We create fast, secure, and SEO-optimized sites that grow with your business.",
    features: ["Custom Theme Development", "Plugin Integration", "Performance Optimization", "Security Hardening"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store solutions with WooCommerce or Shopify. From product catalogs to secure payments, we handle everything.",
    features: ["WooCommerce Setup", "Shopify Development", "Payment Integration", "Inventory Management"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive real results. We help you reach the right audience at the right time.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Strategy"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search engine rankings with our proven SEO strategies. Get more organic traffic and visibility online.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
];

const additionalServices = [
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly designs that convert visitors into customers.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "24/7 maintenance and support to keep your website running smoothly.",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Reliable hosting solutions with domain management services.",
  },
  {
    icon: Rocket,
    title: "Speed Optimization",
    description: "Lightning-fast websites that improve user experience and SEO.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and requirements through in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed project plan with timelines, milestones, and deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create stunning mockups that align with your brand identity.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build your website using the latest technologies and best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing ensures everything works perfectly across all devices.",
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your website and provide training for content management.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
              Digital Solutions for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg md:text-xl leading-relaxed">
              From stunning WordPress websites to high-converting e-commerce stores, 
              we deliver comprehensive digital solutions that drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-12 aspect-square flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-accent/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              More Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-hero-foreground/60 text-lg">
              Additional services to support your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-hero-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-hero-foreground/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-hero-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-hero-foreground/60 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven workflow that delivers results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-display font-bold text-accent/10 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-card p-8 rounded-2xl border border-border card-hover">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-hero-foreground/60 text-lg mb-8">
              Ready to start your project? Get in touch for a free consultation and quote.
            </p>
            <Button variant="hero" size="xl" asChild>
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

export default Services;
