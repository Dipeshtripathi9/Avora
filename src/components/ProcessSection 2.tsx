import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "Understand your needs" },
  { num: "02", title: "Strategy", desc: "Create a custom plan" },
  { num: "03", title: "Execution", desc: "Deliver with precision" },
  { num: "04", title: "Results", desc: "Optimize and support" },
];

const ProcessSection = () => (
  <section className="py-28 bg-soft-blue-light">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Our Process</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">How We Work</h2>
        <div className="divider-gold mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="text-center relative"
          >
            <div className="font-display text-6xl text-gold/10 mb-3">{s.num}</div>
            <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[1px] bg-gold/20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
