import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ServiceContact from "./ServiceContact";

interface ServicePageLayoutProps {
  tagline: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({ tagline, title, subtitle, children }: ServicePageLayoutProps) => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero Banner */}
    <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-gold font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">{tagline}</p>
          <h1 className="font-display text-3xl md:text-5xl text-primary-foreground leading-tight mb-6">{title}</h1>
          <div className="divider-gold mb-6" />
          <p className="text-primary-foreground/60 font-body text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>

    {children}

    <ServiceContact />
    <Footer />
  </div>
);

export default ServicePageLayout;
