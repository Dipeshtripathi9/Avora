import { motion } from "framer-motion";
import { Palette, PenTool, Image, Layout, Layers, Sparkles } from "lucide-react";
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
    price: "£100 – £300",
    color: "green" as const,
    features: ["Logo design", "Basic color palette"],
  },
  {
    name: "Standard",
    price: "£300 – £1,000",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Logo + brand kit", "Social media templates"],
  },
  {
    name: "Advanced",
    price: "£1,000 – £3,000+",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Full brand identity", "Brand guidelines", "Marketing creatives"],
  },
];

const features = [
  { icon: PenTool, title: "Logo Design", desc: "Distinctive, memorable logos that capture your brand essence." },
  { icon: Palette, title: "Color & Typography", desc: "Cohesive color palettes and font systems for brand consistency." },
  { icon: Image, title: "Social Media Assets", desc: "Professional templates for all major social platforms." },
  { icon: Layout, title: "Brand Guidelines", desc: "Comprehensive brand books for consistent application." },
  { icon: Layers, title: "Marketing Creatives", desc: "Print and digital materials that reinforce your brand." },
  { icon: Sparkles, title: "Brand Strategy", desc: "Positioning and messaging that differentiates you in the market." },
];

const BrandingDesign = () => (
  <ServicePageLayout
    tagline="Branding & Design"
    title="Build a Brand Identity That Commands Attention"
    subtitle="Your brand is more than a logo. We create complete brand identities that resonate with your audience and establish lasting credibility."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">Our Branding Services</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Complete brand identity solutions from concept to execution.</p>
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

export default BrandingDesign;
