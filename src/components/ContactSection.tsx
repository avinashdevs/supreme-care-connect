import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Contact <span className="text-gold">Us</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Map */}
        <ScrollReveal direction="left">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.123456789!2d77.7!3d11.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Supreme Hospital location"
            />
          </div>
        </ScrollReveal>

        {/* Info */}
        <ScrollReveal direction="right">
          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["293A, Salem Main Road", "Komarapalayam, Tamil Nadu", "India"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+91 98765 43210", "+91 98765 43211"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@supremehospital.in"],
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Mon – Sat: 9:00 AM – 9:00 PM", "Sunday: 9:00 AM – 1:00 PM", "Emergency: 24/7"],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground font-body">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-primary-foreground font-body font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
