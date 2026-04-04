import { motion } from "framer-motion";
import { HardHat, Calculator, FileText, BarChart3, Ruler, ClipboardList } from "lucide-react";
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
    features: ["Basic quantity takeoff", "Material calculation"],
  },
  {
    name: "Standard",
    price: "£300 – £700",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Detailed estimation", "BOQ preparation", "Cost breakdown"],
  },
  {
    name: "Advanced",
    price: "£700 – £1,500+",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Full project estimation", "Advanced cost analysis", "Detailed reports"],
  },
];

const features = [
  { icon: Calculator, title: "Quantity Takeoff", desc: "Accurate measurement and quantity calculations from project plans." },
  { icon: FileText, title: "BOQ Preparation", desc: "Detailed Bill of Quantities for tendering and procurement." },
  { icon: BarChart3, title: "Cost Analysis", desc: "Comprehensive cost breakdowns with market-rate pricing." },
  { icon: Ruler, title: "Material Estimation", desc: "Precise material requirements to minimize waste and overspend." },
  { icon: ClipboardList, title: "Project Reports", desc: "Professional estimation reports ready for client presentation." },
  { icon: HardHat, title: "Multi-Trade Coverage", desc: "Estimation across civil, structural, MEP, and finishing works." },
];

const ConstructionEstimation = () => (
  <ServicePageLayout
    tagline="Construction Estimation"
    title="Accurate Estimates for Smarter Project Decisions"
    subtitle="Get precise construction cost estimates that help you budget effectively, win tenders, and manage projects with confidence."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">Our Estimation Services</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Professional construction estimation for projects of all sizes.</p>
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

export default ConstructionEstimation;
