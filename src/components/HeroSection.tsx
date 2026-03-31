import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import hospitalImg from "@/assets/hospital-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={hospitalImg}
          alt="Supreme Hospital Building"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-body font-medium tracking-wider uppercase text-gold">
              Komarapalayam, Tamil Nadu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground"
          >
            Advanced Care
            <br />
            <span className="text-gold">with Compassion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg"
          >
            Supreme Hospital delivers world-class orthopedic and maternity care
            with state-of-the-art facilities and a team of experienced specialists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold text-primary-foreground font-body font-semibold rounded-full hover:opacity-90 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-border text-foreground font-body font-semibold rounded-full hover:bg-secondary transition-all"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: "10+", label: "Years of Trust" },
              { value: "15K+", label: "Happy Patients" },
              { value: "20+", label: "Expert Doctors" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
