import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const trustItems = [
  { icon: Globe, text: "Serving UK, USA & Global Markets" },
  { icon: Users, text: "Trusted by International Clients" },
  { icon: Shield, text: "Secure, Confidential & Professional" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50" />

      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-8"
          >
            Global Growth & Support Partner
          </motion.p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-primary-foreground mb-8">
            Helping Businesses Grow Faster{" "}
            <span className="italic text-gold">&</span>{" "}
            Families Feel Secure—Worldwide
          </h1>

          <div className="divider-gold mb-8" />

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl font-body leading-relaxed">
            Reliable digital growth and human support services designed to deliver
            real results, reduce stress, and build long-term trust.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gold text-accent-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:shadow-gold transition-all duration-300 uppercase tracking-wider"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base hover:border-gold/40 hover:text-gold transition-all duration-300 uppercase tracking-wider"
            >
              View Case Studies
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-primary-foreground/50 text-sm font-body">
                <item.icon className="w-4 h-4 text-gold/60" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-primary-foreground/40 text-sm font-body tracking-wide">
            <span>No long-term contracts</span>
            <span className="text-gold/30">·</span>
            <span>Transparent pricing</span>
            <span className="text-gold/30">·</span>
            <span>Quick onboarding</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
