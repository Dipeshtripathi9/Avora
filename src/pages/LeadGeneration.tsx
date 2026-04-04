import { motion } from "framer-motion";
import { Target, Mail,  Users, BarChart3, Zap } from "lucide-react";
import ServicePageLayout from "../components/ServicePageLayout";;
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
    price: "£300 – £600/mo",
    color: "green" as const,
    features: ["Basic lead sourcing", "Email outreach", "Simple lead lists"],
  },
  {
    name: "Standard",
    price: "£600 – £1,500/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Targeted lead generation", "LinkedIn + email outreach", "CRM management"],
  },
  {
    name: "Advanced",
    price: "£1,500 – £3,000+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: ["High-quality leads", "Appointment setting", "Advanced targeting", "Conversion-focused outreach"],
  },
];

const features = [
  { icon: Target, title: "Targeted Prospecting", desc: "Identify and reach your ideal customers with precision targeting." },
  { icon: Mail, title: "Email Outreach", desc: "Professional email campaigns that convert prospects into conversations." },
  { icon: Users, title: "CRM Management", desc: "Organized lead tracking and pipeline management for visibility." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Detailed reporting on lead quality, conversion rates, and ROI." },
  { icon: Zap, title: "Appointment Setting", desc: "Qualified meetings booked directly into your calendar." },
];

const LeadGeneration = () => (
  <ServicePageLayout
    tagline="Lead Generation"
    title="Qualified Leads Delivered to Your Pipeline"
    subtitle="Stop chasing cold leads. We build targeted outreach systems that consistently deliver high-quality prospects ready to convert."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">How We Generate Leads</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Multi-channel lead generation designed for consistent, scalable growth.</p>
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

export default LeadGeneration;

