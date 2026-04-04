import { motion } from "framer-motion";
import { TrendingUp, Settings, Heart } from "lucide-react";

const pillars = [
  { icon: TrendingUp, label: "Business Growth" },
  { icon: Settings, label: "Operational Support" },
  { icon: Heart, label: "Human Care" },
];

const DifferentiatorSection = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto mb-14"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Our Edge</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">What Makes Us Different</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground font-body">
          We combine three pillars that create real impact—not just services.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-12 max-w-3xl mx-auto mb-14">
        {pillars.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center group"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-premium border border-gold/10 flex items-center justify-center mb-4 group-hover:border-gold/30 transition-all duration-300 group-hover:shadow-gold">
              <p.icon className="w-10 h-10 text-gold" />
            </div>
            <span className="font-body font-semibold text-foreground">{p.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-xl mx-auto"
      >
        <div className="divider-gold mx-auto mb-8" />
        <p className="font-display text-2xl text-foreground italic leading-relaxed">
          "We deliver growth for your business and care for what matters most."
        </p>
        <p className="font-body text-gold mt-4 uppercase tracking-[0.2em] text-sm">— Avora</p>
      </motion.div>
    </div>
  </section>
);

export default DifferentiatorSection;
