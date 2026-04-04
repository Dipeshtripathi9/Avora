import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  "You're not getting enough leads or sales",
  "Your website isn't converting",
  "Managing operations takes too much time",
  "Your Airbnb property isn't performing",
  "Your elderly family members feel alone",
];

const ProblemSolution = () => (
  <section className="py-28 bg-soft-blue-light">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">The Challenge</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Managing Growth, Operations, and Responsibilities Alone Is Overwhelming
        </h2>
        <div className="divider-gold mx-auto" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4 mb-14">
        {problems.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border"
          >
            <AlertTriangle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
            <span className="text-foreground font-body">{p}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto bg-gradient-premium rounded-2xl p-10 text-center border border-gold/10"
      >
        <CheckCircle className="w-8 h-8 text-gold mx-auto mb-4" />
        <p className="text-primary-foreground font-body text-lg leading-relaxed">
          We take care of your growth, operations, and support—so you can focus on what truly matters.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSolution;
