import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  color: "green" | "gold" | "red";
  features: string[];
  discount?: string;
}

interface ServicePricingProps {
  tiers: PricingTier[];
}

const colorMap = {
  green: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "bg-emerald-400" },
  gold: { badge: "bg-gold/10 text-gold border-gold/20", dot: "bg-gold" },
  red: { badge: "bg-rose-500/10 text-rose-400 border-rose-500/20", dot: "bg-rose-400" },
};

const ServicePricing = ({ tiers }: ServicePricingProps) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Pricing Plans</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Choose Your Plan</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          All services are fully customizable based on your specific goals and requirements.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, i) => {
          const isMiddle = i === 1;
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 transition-all duration-300 relative ${
                isMiddle
                  ? "bg-gradient-premium border border-gold/20 shadow-gold scale-105"
                  : "bg-card shadow-card hover:shadow-card-hover border border-border"
              }`}
            >
              {tier.discount && (
                <div className="absolute -top-3 right-4 bg-rose-500 text-white text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> {tier.discount}
                </div>
              )}
              {isMiddle && (
                <div className="absolute -top-3 left-4 bg-gold text-accent-foreground text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                  <Star className="w-3 h-3" /> Popular
                </div>
              )}

              <div className={`inline-block px-3 py-1 rounded-full text-xs font-body font-semibold border mb-4 ${colorMap[tier.color].badge}`}>
                {tier.name}
              </div>

              <div className={`font-display text-2xl mb-6 ${isMiddle ? "text-gold" : "text-soft-blue"}`}>
                {tier.price}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 font-body text-sm ${isMiddle ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colorMap[tier.color].dot}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 uppercase tracking-wider ${
                  isMiddle
                    ? "bg-gold text-accent-foreground hover:shadow-gold"
                    : "border border-border text-foreground hover:bg-gold hover:text-accent-foreground hover:border-gold"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground font-body text-sm mt-10 italic"
      >
        🎉 Limited offer: 20% off Standard & 30% off Premium plans — Contact us today!
      </motion.p>
    </div>
  </section>
);

export default ServicePricing;
