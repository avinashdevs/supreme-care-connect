import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle, Loader2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const departments = ["Orthopedics", "Maternity", "Physiotherapy", "General Medicine", "Emergency"];
const doctors: Record<string, string[]> = {
  Orthopedics: ["Dr. P. Chandrasekar"],
  Maternity: ["Dr. R. Mythili"],
  Physiotherapy: ["Dr. K. Priya"],
  "General Medicine": ["Dr. S. Ramesh"],
  Emergency: ["Dr. S. Ramesh", "Dr. P. Chandrasekar"],
};

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter 10-digit number";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (!form.department) e.department = "Select department";
    if (!form.doctor) e.doctor = "Select doctor";
    if (!form.date) e.date = "Select date";
    if (!form.time) e.time = "Select time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const update = (key: string, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (key === "department") setForm((p) => ({ ...p, department: val, doctor: "" }));
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all";

  return (
    <section id="booking" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-gold mb-4">Book Now</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Schedule Your <span className="text-gold">Visit</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-gold mx-auto" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-6">Appointment Booked!</h3>
                  <p className="text-muted-foreground font-body mt-2">
                    We'll confirm your appointment shortly via phone or email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", department: "", doctor: "", date: "", time: "" });
                    }}
                    className="mt-6 px-6 py-3 bg-gold text-primary-foreground rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                        placeholder="10-digit number"
                      />
                      {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Department</label>
                      <select
                        value={form.department}
                        onChange={(e) => update("department", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select department</option>
                        {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.department && <p className="text-xs text-destructive mt-1">{errors.department}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Doctor</label>
                      <select
                        value={form.doctor}
                        onChange={(e) => update("doctor", e.target.value)}
                        className={inputClass}
                        disabled={!form.department}
                      >
                        <option value="">Select doctor</option>
                        {form.department && doctors[form.department]?.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.doctor && <p className="text-xs text-destructive mt-1">{errors.doctor}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass}
                      />
                      {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Time</label>
                      <select
                        value={form.time}
                        onChange={(e) => update("time", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select time</option>
                        {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
                          "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"].map(
                          (t) => <option key={t} value={t}>{t}</option>
                        )}
                      </select>
                      {errors.time && <p className="text-xs text-destructive mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-primary-foreground font-body font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        Confirm Appointment
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;
