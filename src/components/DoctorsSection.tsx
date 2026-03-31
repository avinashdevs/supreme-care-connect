import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const doctors = [
  {
    name: "Dr. P. Chandrasekar",
    qualification: "MBBS, M.S. (Ortho)",
    specialization: "Orthopedic Surgeon",
    specialty: "Traumatic & Arthroplasty",
    bio: "With over 15 years of experience in orthopedic surgery, Dr. Chandrasekar specializes in joint replacement and trauma care, offering patients advanced surgical solutions.",
  },
  {
    name: "Dr. R. Mythili",
    qualification: "MBBS, DGO",
    specialization: "Obstetrician & Gynecologist",
    specialty: "Obstetrics & Gynecology",
    bio: "Dr. Mythili brings extensive experience in obstetrics and gynecology, providing comprehensive maternity care with a focus on safe deliveries and women's health.",
  },
  {
    name: "Dr. S. Ramesh",
    qualification: "MBBS, MD",
    specialization: "General Physician",
    specialty: "Internal Medicine",
    bio: "Dr. Ramesh is a skilled general physician offering preventive care, diagnosis, and treatment of a wide range of medical conditions.",
  },
  {
    name: "Dr. K. Priya",
    qualification: "BPT, MPT",
    specialization: "Physiotherapist",
    specialty: "Rehabilitation & Physiotherapy",
    bio: "Dr. Priya specializes in orthopedic rehabilitation and post-operative physiotherapy, helping patients regain mobility and strength.",
  },
];

const DoctorsSection = () => {
  const [selected, setSelected] = useState<typeof doctors[0] | null>(null);

  return (
    <section id="doctors" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">Our Specialists</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Meet Our <span className="text-gold">Doctors</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <ScrollReveal key={doc.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(doc)}
                className="bg-card rounded-2xl overflow-hidden cursor-pointer group border border-border hover:border-gold/30 transition-colors"
              >
                <div className="aspect-square bg-gradient-to-br from-gold/10 to-navy/10 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-gold">
                      {doc.name.split(" ").pop()?.[0]}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{doc.name}</h3>
                  <p className="text-sm text-gold font-body mt-1">{doc.specialization}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{doc.qualification}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Doctor modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 glass"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 max-w-lg w-full relative border border-border shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <span className="font-display text-xl font-bold text-gold">
                  {selected.name.split(" ").pop()?.[0]}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{selected.name}</h3>
              <p className="text-gold font-body font-medium mt-1">{selected.specialization}</p>
              <p className="text-sm text-muted-foreground font-body">{selected.qualification}</p>
              <p className="text-sm text-muted-foreground font-body mt-1">{selected.specialty}</p>
              <p className="mt-6 text-muted-foreground font-body leading-relaxed">{selected.bio}</p>
              <a
                href="#booking"
                onClick={() => setSelected(null)}
                className="mt-6 inline-flex items-center px-6 py-3 bg-gold text-primary-foreground font-body font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DoctorsSection;
