import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Zap, Search, Palette } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServicePricing from "@/components/ServicePricing";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const pricingTiers = [
  {
    name: "Basic",
    price: "£200 – £500",
    color: "green" as const,
    features: ["1–3 pages", "Basic design", "Mobile responsive", "Contact form"],
  },
  {
    name: "Standard",
    price: "£800 – £2,000",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["4–8 pages", "Custom UI/UX", "SEO-friendly structure", "Speed optimization"],
  },
  {
    name: "Advanced",
    price: "£2,000 – £5,000+",
    color: "red" as const,
    discount: "30% OFF",
    features: ["High-converting design", "Advanced UI/UX", "Lead generation system", "Analytics integration", "Conversion optimization"],
  },
];

const features = [
  { icon: Layout, title: "Conversion-Focused Design", desc: "Every page is designed to turn visitors into leads and customers." },
  { icon: Smartphone, title: "Fully Responsive", desc: "Flawless experience across desktop, tablet, and mobile devices." },
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance to keep visitors engaged." },
  { icon: Search, title: "SEO Built-In", desc: "Search engine optimization from the ground up for organic visibility." },
  { icon: Palette, title: "Custom Branding", desc: "Unique designs that reflect your brand identity and stand out." },
  { icon: Code, title: "Modern Technology", desc: "Built with the latest frameworks for reliability and scalability." },
];

const WebDevelopment = () => (
  <ServicePageLayout
    tagline="Web Development & Design"
    title="Websites That Convert Visitors Into Clients"
    subtitle="Your website is your most powerful sales tool. We design modern, high-converting websites tailored to your business that generate leads and build credibility."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">What We Deliver</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Premium web experiences built for performance and results.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-gold/10">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </ServicePageLayout>
);

export default WebDevelopment;
