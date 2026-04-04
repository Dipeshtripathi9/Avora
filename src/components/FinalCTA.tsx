import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section id="contact" className="py-28 bg-gradient-premium relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Get Started</p>
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
          Let's Have a Simple Conversation First
        </h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-primary-foreground/60 font-body text-lg mb-10 leading-relaxed">
          No pressure. No commitment. Just a clear discussion about your needs.
        </p>
        <a
          href="dipeshtripathi01@gmail.com"
          className="inline-flex items-center gap-3 bg-gold text-accent-foreground px-10 py-4 rounded-full font-body font-semibold text-lg hover:shadow-gold transition-all duration-300 uppercase tracking-wider"
        >
          Book Your Free Consultation <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
