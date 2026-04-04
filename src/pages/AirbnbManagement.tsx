import { motion } from "framer-motion";
import { Home, TrendingUp, Star, Clock, MessageSquare, BarChart3 } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import ServicePricing from "@/components/ServicePricing";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const pricingTiers = [
  {
    name: "Basic",
    price: "£100 – £250/mo",
    color: "green" as const,
    features: ["Guest messaging", "Inquiry handling", "Booking confirmations"],
  },
  {
    name: "Standard",
    price: "£300 – £600/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: ["24/7 guest communication", "Calendar management", "Review replies", "Basic pricing updates"],
  },
  {
    name: "Advanced",
    price: "£600 – £1,200+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: ["Full account management", "Dynamic pricing strategy", "Listing SEO optimization", "Performance reports", "Revenue optimization"],
  },
];

const features = [
  { icon: MessageSquare, title: "Guest Communication", desc: "Professional, timely responses to all guest inquiries and booking requests." },
  { icon: BarChart3, title: "Dynamic Pricing", desc: "Optimized pricing strategies to maximize your revenue throughout the year." },
  { icon: Star, title: "Review Management", desc: "Proactive review strategies to maintain 5-star ratings and attract more guests." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support ensuring no booking opportunity is missed." },
  { icon: TrendingUp, title: "Listing Optimization", desc: "Professional descriptions, photography guidance, and SEO for higher visibility." },
  { icon: Home, title: "Multi-Property Support", desc: "Scalable management solutions whether you have one or multiple properties." },
];

const AirbnbManagement = () => (
  <ServicePageLayout
    tagline="Airbnb Management"
    title="Maximize Your Property Revenue Without the Hassle"
    subtitle="Managing guests, bookings, and pricing is time-consuming and inefficient. We handle everything so you can enjoy passive income with peace of mind."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-display text-3xl text-foreground mb-4">What We Handle For You</h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">End-to-end property management designed for maximum occupancy and revenue.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-gold/10">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </ServicePageLayout>
);

export default AirbnbManagement;
