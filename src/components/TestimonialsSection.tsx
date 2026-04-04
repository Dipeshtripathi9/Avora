import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Reliable, professional, and easy to work with.", author: "Business Client" },
  { text: "Great communication and consistent results.", author: "Airbnb Host" },
];

const experience = [
  "Worked with clients across multiple industries",
  "Delivered consistent results with ongoing support",
  "Focused on long-term relationships",
];

const TestimonialsSection = () => (
  <section className="py-28 bg-gradient-premium relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">What Clients Say</h2>
        <div className="divider-gold mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-navy-medium rounded-2xl p-8 border border-gold/5"
          >
            <Quote className="w-8 h-8 text-gold/40 mb-4" />
            <p className="text-primary-foreground/90 font-body text-lg italic mb-5 leading-relaxed">"{t.text}"</p>
            <p className="text-gold font-body text-sm font-medium">— {t.author}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <h3 className="font-display text-xl text-primary-foreground text-center mb-6">Our Experience</h3>
        <div className="space-y-3">
          {experience.map((e) => (
            <div key={e} className="flex items-center gap-3 text-primary-foreground/60 font-body text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <span>{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
