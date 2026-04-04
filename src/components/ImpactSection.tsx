import { motion } from "framer-motion";
import { TrendingUp, Users, Heart } from "lucide-react";

const impacts = [
  { icon: TrendingUp, text: "Improved website conversions for growing businesses" },
  { icon: Users, text: "Supported Airbnb hosts with efficient guest management" },
  { icon: Heart, text: "Helped families stay connected with elderly loved ones" },
];

const ImpactSection = () => (
  <section id="impact" className="py-28 bg-soft-blue-light">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Results</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">How We Create Real Impact</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground font-body">Focused on real results—not unrealistic promises</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {impacts.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-card flex items-center justify-center mx-auto mb-5 shadow-card border border-gold/5">
              <item.icon className="w-8 h-8 text-gold" />
            </div>
            <p className="font-body font-medium text-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
