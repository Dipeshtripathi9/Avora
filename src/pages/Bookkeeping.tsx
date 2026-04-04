import { motion } from "framer-motion";
import { BookOpen, Receipt, BarChart3, FileText, Calculator, AlertCircle } from "lucide-react";
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
    price: "£150 – £300/mo",
    color: "green" as const,
    features: ["Transaction recording", "Expense tracking"],
  },
  {
    name: "Standard",
    price: "£300 – £600/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Invoicing", "Bank reconciliation", "Financial tracking"],
  },
  {
    name: "Advanced",
    price: "£600 – £1,200+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Full bookkeeping", "Monthly reports", "Financial insights", "Error detection"],
  },
];

const features = [
  { icon: Receipt, title: "Transaction Recording", desc: "Accurate recording of all income and expenses." },
  { icon: Calculator, title: "Bank Reconciliation", desc: "Match transactions with bank statements for accuracy." },
  { icon: FileText, title: "Invoicing", desc: "Professional invoice creation and payment tracking." },
  { icon: BarChart3, title: "Financial Reports", desc: "Clear monthly reports with actionable financial insights." },
  { icon: BookOpen, title: "Expense Tracking", desc: "Categorized expense management for better budgeting." },
  { icon: AlertCircle, title: "Error Detection", desc: "Identify and correct discrepancies before they become problems." },
];

const Bookkeeping = () => (
  <ServicePageLayout
    tagline="Bookkeeping"
    title="Accurate Financial Records Without the Stress"
    subtitle="Keep your finances organized, compliant, and insightful. We handle the numbers so you can focus on growing your business."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">Our Bookkeeping Services</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Professional financial management tailored to your business size.</p>
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

export default Bookkeeping;
