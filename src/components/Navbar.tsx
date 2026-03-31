import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-gold z-[60]"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 glass shadow-lg shadow-foreground/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-sm md:text-lg text-primary-foreground">S</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-semibold text-sm md:text-base text-foreground leading-tight">
                  Supreme Hospital
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
                  Ortho & Maternity
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#booking"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-primary-foreground font-body text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
              <a href="tel:+919876543210" className="md:hidden p-2 text-gold">
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 glass border-b border-border lg:hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-display text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold text-primary-foreground font-body font-semibold rounded-full"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
