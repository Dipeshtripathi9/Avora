import { motion } from "framer-motion";
import { Shield, Lock, Handshake, Heart, AlertTriangle, Globe, MessageCircle } from "lucide-react";
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
    price: "£50 – £100/mo",
    color: "green" as const,
    features: [
      "3–4 calls per week (10–15 min)",
      "Friendly conversations",
      "Basic emotional support",
    ],
  },
  {
    name: "Standard",
    price: "£100 – £200/mo",
    color: "gold" as const,
    discount: "20% OFF",
    features: [
      "Daily calls (15–20 min)",
      "Emotional engagement",
      "Medicine & routine reminders",
    ],
  },
  {
    name: "Advanced",
    price: "£200 – £400+/mo",
    color: "red" as const,
    discount: "30% OFF",
    features: [
      "Daily calls + video support",
      "20–30 min personalized sessions",
      "Weekly family updates",
      "Priority support",
    ],
  },
];

const sections = [
  {
    icon: Shield,
    title: "Your Family's Privacy Comes First",
    intro: "We maintain the highest standards of confidentiality in every interaction.",
    points: [
      "All conversations are strictly private and confidential",
      "No personal or sensitive information is shared with any third party",
      "We never misuse or expose client data",
      "Every interaction is handled with complete discretion",
    ],
    highlight: "Your family's personal life remains fully protected and respected",
  },
  {
    icon: Lock,
    title: "Secure & Responsible Data Handling",
    intro: "We follow structured systems to ensure your information stays safe at all times.",
    points: [
      "Use of secure communication channels",
      "Restricted access to client data",
      "No call recordings without explicit permission",
      "GDPR-aware practices for data protection",
    ],
    highlight: "Your information is handled with professional-level security standards",
  },
  {
    icon: Handshake,
    title: "Transparency You Can Rely On",
    intro: "Trust grows with clarity and openness.",
    points: [
      "Clear communication with family members",
      "Regular updates available upon request",
      "No hidden processes or unclear actions",
      "You stay informed and in control",
    ],
    highlight: "You always know how your loved ones are being supported",
  },
  {
    icon: Heart,
    title: "Respect, Empathy & Human Dignity",
    intro: "We believe care must be human-first.",
    points: [
      "Every conversation is respectful and patient",
      "Emotional well-being is always prioritized",
      "No intrusive or uncomfortable interactions",
      "Support is tailored to individual comfort levels",
    ],
    highlight: "Your loved ones are treated with kindness, dignity, and understanding",
  },
  {
    icon: AlertTriangle,
    title: "Clear Service Boundaries for Safety",
    intro: "To ensure responsible and ethical service:",
    points: [
      "This is a non-medical companionship service",
      "We do not provide medical advice or treatment",
      "In case of any concern, families are informed immediately",
    ],
    highlight: "Clear boundaries ensure safe and responsible care",
  },
  {
    icon: Globe,
    title: "Professional & Global Standards",
    intro: "Our approach is designed to meet international expectations:",
    points: [
      "Ethical and professional communication",
      "Reliable and consistent support",
      "Respect for cultural and personal values",
      "Long-term relationship focus",
    ],
    highlight: null,
  },
];

const ElderlySupport = () => (
  <ServicePageLayout
    tagline="Elderly Companion Support"
    title="Privacy, Safety & Trust — Our Commitment to Your Loved Ones"
    subtitle="Because care is not just a service — it's a responsibility. When you choose someone to support your parents or elderly family members, you are placing your trust in them — not just for assistance, but for care, dignity, and emotional safety."
  >
    <ServicePricing tiers={pricingTiers} />

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl space-y-16">
        <motion.div {...fadeUp} className="text-center mb-8">
          <p className="font-body text-gold uppercase tracking-[0.25em] text-sm mb-4">Privacy & Trust</p>
          <h2 className="font-display text-3xl text-foreground mb-4">Our Commitment to Your Loved Ones</h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        {sections.map((s, i) => (
          <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <div className="flex items-start gap-5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center flex-shrink-0">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground font-body">{s.intro}</p>
              </div>
            </div>
            <ul className="ml-[4.25rem] space-y-3 mb-5">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            {s.highlight && (
              <div className="ml-[4.25rem] bg-gold-light border border-gold/10 rounded-xl p-4">
                <p className="text-foreground font-body font-medium text-sm">
                  <span className="text-gold font-semibold">→ </span>
                  {s.highlight}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div {...fadeUp}>
          <MessageCircle className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Our Promise to You</h2>
          <div className="divider-gold mx-auto mb-8" />
          <blockquote className="text-xl text-foreground font-display italic leading-relaxed mb-8">
            "We care for your loved ones with the same respect, attention, and responsibility we would give to our own family."
          </blockquote>
          <p className="text-muted-foreground font-body leading-relaxed">
            We understand that trust takes time. We're here to answer your questions, explain our process, and ensure you feel completely confident before starting.
          </p>
        </motion.div>
      </div>
    </section>
  </ServicePageLayout>
);

export default ElderlySupport;
