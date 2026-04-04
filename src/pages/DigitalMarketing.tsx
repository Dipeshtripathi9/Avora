import { motion } from "framer-motion";
import { Megaphone, Target, TrendingUp, BarChart3, Users, Mail } from "lucide-react";
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
    price: "£300 – £800/mo",
    color: "green" as const,
    features: ["Social media management", "8–12 posts/month", "Basic ad setup"],
  },
  {
    name: "Standard",
    price: "£800 – £2,000/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Paid ads management", "Lead generation campaigns", "Campaign optimization", "Monthly reporting"],
  },
  {
    name: "Advanced",
    price: "£2,000 – £5,000+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Multi-platform campaigns", "Funnel setup", "A/B testing", "Conversion optimization", "Weekly reports"],
  },
];

const features = [
  { icon: Target, title: "Targeted Campaigns", desc: "Data-driven advertising that reaches your ideal customers at the right time." },
  { icon: TrendingUp, title: "Lead Generation", desc: "Automated lead funnels that consistently deliver qualified prospects." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Clear, actionable insights into campaign performance and ROI." },
  { icon: Users, title: "Social Media Management", desc: "Strategic content and engagement to build your brand presence." },
  { icon: Mail, title: "Email Marketing", desc: "Nurture leads and retain customers with targeted email sequences." },
  { icon: Megaphone, title: "Brand Strategy", desc: "Position your business as an authority in your industry." },
];

const DigitalMarketing = () => (
  <ServicePageLayout
    tagline="Digital Marketing & Lead Generation"
    title="Consistent Leads, Measurable Growth, Higher ROI"
    subtitle="You are not getting consistent leads or growth. We run targeted campaigns and build lead generation systems that deliver real, measurable results."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">Our Marketing Services</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Comprehensive digital marketing solutions built for sustainable growth.</p>
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

export default DigitalMarketing;
