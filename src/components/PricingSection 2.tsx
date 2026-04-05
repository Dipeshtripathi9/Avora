import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const plans = [
  { name: "Starter", price: "£300 – £800", desc: "Perfect for small businesses getting started", featured: false },
  { name: "Growth", price: "£1,000 – £3,000", desc: "For businesses ready to scale and grow", featured: true },
  { name: "Premium", price: "£3,000 – £5,000+", desc: "Full-service support for maximum impact", featured: false },
];

const PricingSection = () => (
  <section id="pricing" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Investment</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Simple Pricing</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground font-body">Custom pricing available for unique needs</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl p-8 text-center transition-all duration-300 relative ${
              p.featured
                ? "bg-gradient-premium border border-gold/20 shadow-gold scale-105"
                : "bg-card shadow-card hover:shadow-card-hover border border-border"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground text-xs font-body font-bold px-4 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                <Star className="w-3 h-3" /> Popular
              </div>
            )}
            <h3 className={`font-display text-xl mb-3 ${p.featured ? "text-primary-foreground" : "text-foreground"}`}>
              {p.name}
            </h3>
            <div className={`font-display text-3xl mb-4 ${p.featured ? "text-gold" : "text-soft-blue"}`}>
              {p.price}
            </div>
            <p className={`font-body text-sm mb-8 ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              {p.desc}
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 uppercase tracking-wider ${
                p.featured
                  ? "bg-gold text-foreground hover:shadow-gold"
                  : "border border-border text-foreground hover:bg-gold hover:text-foreground hover:border-gold"
              }`}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
