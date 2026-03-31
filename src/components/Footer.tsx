const Footer = () => (
  <footer className="py-16 bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
              <span className="font-display font-bold text-lg text-primary-foreground">S</span>
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Supreme Hospital</p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">Ortho & Maternity Center</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-sm">
            Delivering world-class orthopedic and maternity healthcare with compassion and excellence in Komarapalayam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Doctors", "Services", "Book Appointment", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/ /g, "")}`}
                  className="text-sm text-muted-foreground hover:text-gold font-body transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {["Orthopedic Care", "Maternity Care", "Physiotherapy", "Emergency"].map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground font-body">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Supreme Hospital. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-body">
          293A, Salem Main Rd, Komarapalayam, Tamil Nadu
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
