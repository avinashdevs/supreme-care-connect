import { motion } from "framer-motion";
import { Bone, Baby, Activity, Siren } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Bone,
    title: "Orthopedic Care",
    desc: "Joint replacements, fracture management, sports injuries, and spine surgery by expert orthopedic surgeons.",
  },
  {
    icon: Baby,
    title: "Maternity Care",
    desc: "Comprehensive antenatal, delivery, and postnatal care ensuring safe motherhood with modern facilities.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    desc: "Advanced rehabilitation programs for post-surgery recovery, pain management, and mobility restoration.",
  },
  {
    icon: Siren,
    title: "Emergency Services",
    desc: "24/7 emergency care with rapid response, trauma management, and critical care support.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Specialist <span className="text-gold">Treatments</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors group h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <svc.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{svc.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
