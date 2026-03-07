"use client";

import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Benefits", href: "#benefits" },
      { title: "Testimonials", href: "#testimonial" },
      { title: "FAQs", href: "#faq" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Help Center", href: "#" },
      { title: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Twitter", href: "#", icon: TwitterIcon },
];

const backers = [
  { src: "/images/backer-suffolk.png", alt: "Suffolk" },
  { src: "/images/backer-antler.png", alt: "Antler" },
  { src: "/images/backer-dmz.png", alt: "DMZ" },
];

export function FooterSection() {
  return (
    <footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[3rem] border-t border-primary/10 bg-white/50 backdrop-blur-sm px-6 py-16 lg:py-24 overflow-hidden mt-20">
      {/* Glow effect at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-px bg-primary/30 blur-2xl" />

      <div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-8">
          <div className="flex flex-col gap-6">
            <img src="/images/logo.png" alt="ARKI" className="h-10 w-auto object-contain self-start" />
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              ARKI is the design knowledge management platform for architecture & engineering firms. Find, organize, and reuse design data effortlessly.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full border border-primary/5 hover:bg-primary/5"
                aria-label={social.title}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-12 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-widest uppercase text-gradient-purple">
                  {section.label}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary text-sm transition-all duration-300"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <AnimatedContainer className="w-full mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8" delay={0.5}>
        <p className="text-xs text-muted-foreground font-medium">
          © {new Date().getFullYear()} ARKI DIGITAL INC. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Backed by</span>
          <div className="flex items-center gap-6">
            {backers.map((b) => (
              <img
                key={b.alt}
                src={b.src}
                alt={b.alt}
                className="h-6 w-auto object-contain grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </AnimatedContainer>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: 10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
