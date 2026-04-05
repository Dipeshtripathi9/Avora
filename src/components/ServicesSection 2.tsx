import { motion } from "framer-motion";
import { Heart, Home, Code, Megaphone, ArrowRight, Target, Briefcase, BookOpen, HardHat, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Elderly Companion Support",
    problem: "Your loved ones may feel lonely, disconnected, or unsupported daily",
    solution: "We provide compassionate daily calls, video companionship, and reminders",
    result: "Peace of mind for families and emotional well-being for seniors",
    note: "Handled with empathy, patience, and respect",
    disclaimer: "Non-medical support only",
    link: "/services/elderly-support",
  },
  {
    icon: Home,
    title: "Airbnb Management",
    problem: "Managing guests, bookings, and pricing is time-consuming and inefficient",
    solution: "We handle communication, bookings, and optimize your listings",
    result: "Higher occupancy, better reviews, increased revenue",
    link: "/services/airbnb-management",
  },
  {
    icon: Code,
    title: "Web Development & Design",
    problem: "Your website is not generating leads or converting visitors",
    solution: "We design modern, high-converting websites tailored to your business",
    result: "More inquiries, better conversions, stronger online presence",
    link: "/services/web-development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Lead Generation",
    problem: "You are not getting consistent leads or growth",
    solution: "We run targeted campaigns and build lead generation systems",
    result: "Consistent leads, measurable growth, higher ROI",
    link: "/services/digital-marketing",
  },
  {
    icon: Target,
    title: "Lead Generation",
    problem: "Your sales pipeline is inconsistent and unpredictable",
    solution: "We build targeted outreach systems with multi-channel campaigns",
    result: "Qualified leads delivered consistently to your pipeline",
    link: "/services/lead-generation",
  },
  {
    icon: Briefcase,
    title: "Virtual Assistant",
    problem: "Admin tasks consume your time and slow your growth",
    solution: "We handle email, scheduling, CRM, and client communication",
    result: "More time to focus on strategy and revenue-generating work",
    link: "/services/virtual-assistant",
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    problem: "Your financial records are disorganized or outdated",
    solution: "We manage transactions, invoicing, and reconciliation",
    result: "Accurate finances, clear reports, and peace of mind",
    link: "/services/bookkeeping",
  },
  {
    icon: HardHat,
    title: "Construction Estimation",
    problem: "Inaccurate estimates lead to budget overruns and lost tenders",
    solution: "We provide precise quantity takeoffs, BOQ, and cost analysis",
    result: "Win more tenders with accurate, professional estimates",
    link: "/services/construction-estimation",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    problem: "Your brand doesn't stand out or reflect your business value",
    solution: "We create complete brand identities from logo to guidelines",
    result: "A memorable brand that commands attention and trust",
    link: "/services/branding-design",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">What We Do</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Core Services</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto font-body">
          Premium solutions tailored to your needs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-gold/10 group"
          >
            <div className="w-12 h-12 rounded-xl bg-soft-blue-light flex items-center justify-center mb-5 group-hover:bg-gold-light transition-colors duration-300">
              <s.icon className="w-6 h-6 text-soft-blue group-hover:text-gold transition-colors duration-300" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-5">{s.title}</h3>

            <div className="space-y-3 font-body text-sm">
              <div>
                <span className="font-semibold text-foreground">Problem: </span>
                <span className="text-muted-foreground">{s.problem}</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Solution: </span>
                <span className="text-muted-foreground">{s.solution}</span>
              </div>
              <div className="bg-gold-light rounded-xl p-4 mt-4 border border-gold/10">
                <span className="font-semibold text-gold">→ </span>
                <span className="text-foreground font-medium">{s.result}</span>
              </div>
              {s.note && <p className="text-muted-foreground italic text-xs mt-3">💬 {s.note}</p>}
              {s.disclaimer && <p className="text-muted-foreground text-xs mt-1">⚠️ {s.disclaimer}</p>}
            </div>

            <Link
              to={s.link}
              className="inline-flex items-center gap-2 mt-6 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-300 uppercase tracking-wider"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
