import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "The orthopedic care at Supreme Hospital was exceptional. Dr. Chandrasekar performed my knee replacement surgery, and the recovery was smoother than I expected.",
    rating: 5,
  },
  {
    name: "Priya Lakshmi",
    text: "I had my delivery at Supreme Hospital and the maternity care was wonderful. Dr. Mythili and the nursing staff made me feel safe and comfortable throughout.",
    rating: 5,
  },
  {
    name: "Senthil Murugan",
    text: "After my accident, the emergency team at Supreme Hospital saved my life. The physiotherapy sessions helped me walk again within months.",
    rating: 5,
  },
  {
    name: "Kavitha Devi",
    text: "Clean facilities, caring staff, and excellent doctors. Supreme Hospital is truly the best hospital in Komarapalayam for orthopedic and maternity care.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Patient <span className="text-gold">Stories</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <p className="mt-6 font-body font-semibold text-gold">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-full border border-border hover:border-gold/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-gold w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="p-3 rounded-full border border-border hover:border-gold/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
