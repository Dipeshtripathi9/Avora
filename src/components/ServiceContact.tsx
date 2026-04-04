import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Phone, Mail } from "lucide-react";

const ServiceContact = () => (
  <section id="contact" className="py-24 bg-gradient-premium relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-primary-foreground/60 font-body text-lg mb-10 leading-relaxed">
          No pressure. No commitment. Let's discuss how we can help.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:dipeshtripathi01@gmail.com"
            className="inline-flex items-center gap-3 bg-gold text-accent-foreground px-10 py-4 rounded-full font-body font-semibold text-base hover:shadow-gold transition-all duration-300 uppercase tracking-wider"
          >
            <Mail className="w-5 h-5" /> Book Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+44123456789"
            className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:border-gold/40 hover:text-gold transition-all duration-300 uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-primary-foreground/40 font-body text-sm"
        >
          <ArrowUp className="w-4 h-4 animate-bounce" />
          Swipe up to explore our features & latest updates
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ServiceContact;
