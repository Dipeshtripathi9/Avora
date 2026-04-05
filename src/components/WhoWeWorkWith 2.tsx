import { motion } from "framer-motion";
import { Briefcase, Rocket, Home, Heart } from "lucide-react";

const audiences = [
  { icon: Briefcase, label: "Small & growing businesses" },
  { icon: Rocket, label: "Startup founders" },
  { icon: Home, label: "Airbnb hosts" },
  { icon: Heart, label: "Families supporting elderly parents" },
];

const WhoWeWorkWith = () => (
  <section className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Our Clients</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Who We Work With</h2>
        <div className="divider-gold mx-auto mb-6" />
        <p className="text-muted-foreground max-w-lg mx-auto font-body">
          If you relate to any of these—you're in the right place.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-card-hover transition-all duration-300 group border border-transparent hover:border-gold/10"
          >
            <div className="w-14 h-14 rounded-xl bg-soft-blue-light flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-light transition-colors duration-300">
              <a.icon className="w-7 h-7 text-soft-blue group-hover:text-gold transition-colors duration-300" />
            </div>
            <p className="font-body font-semibold text-foreground">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeWorkWith;
