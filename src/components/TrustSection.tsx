import { motion } from "framer-motion";
import { Lock, MessageSquare, DollarSign, BarChart3 } from "lucide-react";

const trustPoints = [
  { icon: Lock, text: "Your data is always confidential" },
  { icon: MessageSquare, text: "Clear communication at every step" },
  { icon: DollarSign, text: "No hidden charges" },
  { icon: BarChart3, text: "You stay in control of everything" },
];

const expectations = [
  "Clear timelines and deliverables",
  "Honest and transparent communication",
  "Realistic expectations (no false promises)",
  "Long-term support",
];

const TrustSection = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Security</p>
          <h2 className="font-display text-3xl text-foreground mb-4">Your Trust Matters More Than Anything</h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            We understand the responsibility of handling your business and personal needs.
          </p>
          <div className="space-y-4">
            {trustPoints.map((tp) => (
              <div key={tp.text} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                  <tp.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-body text-foreground font-medium">{tp.text}</span>
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
          <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Transparency</p>
          <h2 className="font-display text-3xl text-foreground mb-4">What You Can Expect</h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            Transparency and honesty are at the core of everything we do.
          </p>
          <div className="space-y-4">
            {expectations.map((e) => (
              <div key={e} className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card border border-border">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="font-body text-foreground">{e}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
