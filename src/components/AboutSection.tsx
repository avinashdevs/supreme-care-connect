import ScrollReveal from "./ScrollReveal";
import receptionImg from "@/assets/hospital-reception.jpg";
import corridorImg from "@/assets/hospital-corridor.jpg";
import { Shield, Heart, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust", desc: "A decade of reliable healthcare services for our community." },
  { icon: Heart, title: "Compassion", desc: "Patient-centric care that treats every individual with dignity." },
  { icon: Award, title: "Excellence", desc: "State-of-the-art technology and internationally trained specialists." },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={receptionImg} alt="Hospital reception" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-56 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
              <img src={corridorImg} alt="Hospital corridor" className="w-full h-full object-cover" />
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="lg:pl-8">
          <ScrollReveal>
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Where Healing
              <br />
              Meets <span className="text-gold">Expertise</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              Supreme Hospital is a premier multispecialty hospital located in Komarapalayam, Tamil Nadu.
              Specializing in orthopedic and maternity care, we combine advanced medical technology with
              compassionate healing to deliver exceptional patient outcomes.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={0.15 * (i + 1)}>
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <v.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
