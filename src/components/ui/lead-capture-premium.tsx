"use client";

import { useState } from "react";
import { PlusIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderTrail } from "@/components/ui/border-trail";

export function LeadCapturePremium() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", companySize: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Handle form submission logic here
  };

  return (
    <section className="relative overflow-hidden py-24 bg-background">
      <div id="book" className="mx-auto w-full max-w-6xl space-y-12 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-5 text-center"
        >
          <div className="flex justify-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 font-mono text-primary border-primary/20 bg-primary/5 uppercase tracking-tighter">
              Get Started
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-purple leading-tight">
            Ready to design 50% faster?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Join 200+ AE professionals already using ARKI to save thousands of hours.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Decorative Grid Background */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 size-full -z-10",
              "bg-[linear-gradient(to_right,hsl(var(--primary)/.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/.05)_1px,transparent_1px)]",
              "bg-[size:40px_40px]",
              "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_80%)]",
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full space-y-6"
          >
            <div className="relative bg-white/40 backdrop-blur-xl border border-primary/10 p-8 md:p-12 rounded-2xl shadow-2xl shadow-primary/5 group">
              {/* Corner Accents */}
              <PlusIcon className="absolute -top-3 -left-3 size-6 text-primary/40 group-hover:text-primary transition-colors duration-500" />
              <PlusIcon className="absolute -top-3 -right-3 size-6 text-primary/40 group-hover:text-primary transition-colors duration-500" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-primary/40 group-hover:text-primary transition-colors duration-500" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-6 text-primary/40 group-hover:text-primary transition-colors duration-500" />

              <BorderTrail
                style={{
                  boxShadow:
                    "0px 0px 40px 10px hsl(var(--primary) / 20%), 0 0 80px 20px hsl(var(--primary) / 10%)",
                }}
                size={120}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">First name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-background/50 border border-primary/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Last name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-background/50 border border-primary/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-background/50 border border-primary/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Company Size</label>
                  <select
                    required
                    value={form.companySize}
                    onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                    className="w-full bg-background/50 border border-primary/10 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <Button type="submit" className="w-full py-8 text-xl font-bold rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform duration-300">
                  Book a Call 🚀
                </Button>
              </form>
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-x-3 text-sm font-medium tracking-tight">
              <ShieldCheckIcon className="size-5 text-primary" />
              <span>Full confidentiality for your design intellectual property</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
