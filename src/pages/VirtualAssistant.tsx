import { motion } from "framer-motion";
import { Briefcase, Mail, Calendar, Users, ClipboardList, Headphones } from "lucide-react";
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
    price: "£200 – £400/mo",
    color: "green" as const,
    features: ["Email management", "Data entry", "Admin tasks"],
  },
  {
    name: "Standard",
    price: "£400 – £800/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["Email + calendar management", "Customer support", "CRM updates"],
  },
  {
    name: "Advanced",
    price: "£800 – £1,500+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Full business support", "Client communication", "Task coordination", "Priority assistance"],
  },
];

const features = [
  { icon: Mail, title: "Email Management", desc: "Organized inbox management, filtering, and timely responses." },
  { icon: Calendar, title: "Calendar & Scheduling", desc: "Appointment booking, meeting coordination, and reminders." },
  { icon: Headphones, title: "Customer Support", desc: "Professional client communication across all channels." },
  { icon: ClipboardList, title: "Task Coordination", desc: "Project tracking, task management, and team coordination." },
  { icon: Users, title: "CRM Management", desc: "Keep your client database organized and up-to-date." },
  { icon: Briefcase, title: "Business Admin", desc: "Data entry, document preparation, and general administration." },
];

const VirtualAssistant = () => (
  <ServicePageLayout
    tagline="Virtual Assistant"
    title="Professional Support to Run Your Business Smoothly"
    subtitle="Free up your time by delegating admin, communication, and coordination tasks to our reliable virtual assistant team."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">What We Handle</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">Comprehensive virtual assistance tailored to your business needs.</p>
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

export default VirtualAssistant;
