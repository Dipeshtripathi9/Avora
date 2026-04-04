import { motion } from "framer-motion";
import { Layers, Globe, Zap, Target, Cpu } from "lucide-react";

const reasons = [
  { icon: Layers, text: "One partner for multiple needs" },
  { icon: Globe, text: "Cost-effective global team" },
  { icon: Zap, text: "Reliable and fast delivery" },
  { icon: Target, text: "Focus on real results" },
  { icon: Cpu, text: "Combination of human + technology" },
];

const notForYou = [
  "You are looking for the cheapest service",
  "You expect instant unrealistic results",
  "You don't value long-term growth",
];

const WhyChooseUs = () => (
  <section className="py-28 bg-soft-blue-light">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Why Us</p>
          <h2 className="font-display text-3xl text-foreground mb-4">Why Clients Choose Us</h2>
          <div className="divider-gold mb-8" />
          <div className="space-y-5">
            {reasons.map((r) => (
              <div key={r.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-body text-foreground">{r.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Honesty</p>
          <h2 className="font-display text-3xl text-foreground mb-4">We Might Not Be Right For You If</h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            We focus on quality, trust, and sustainable results.
          </p>
          <div className="space-y-4">
            {notForYou.map((n) => (
              <div key={n} className="flex items-center gap-4 text-muted-foreground font-body text-sm bg-card rounded-xl p-4 shadow-card border border-border">
                <span className="text-destructive text-lg">✕</span>
                <span>{n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
