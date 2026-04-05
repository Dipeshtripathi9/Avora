const Footer = () => (
  <footer className="py-14 bg-navy relative">
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl text-primary-foreground mb-3">
      Avora
      </p>
      <p className="font-body text-gold uppercase tracking-[0.25em] text-xs mb-6">
        Global Growth & Support Partner
      </p>
      <div className="divider-gold mx-auto mb-6" />
      <p className="text-primary-foreground/40 font-body text-sm">
        © {new Date().getFullYear()} Avora. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
