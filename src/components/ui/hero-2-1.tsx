"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ElegantShape } from "./shape-landing-hero";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Features', href: '#features' },
    { label: 'Case Studies', href: '#testimonial' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Geometric background shapes adapted for white theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-indigo-500/[0.1]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-purple-500/[0.1]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-sky-500/[0.1]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-primary/[0.1]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 pt-6">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img src="/images/logo.png" alt="ARKI" className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 ml-4">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Login
              </a>
              <a
                href="#book"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-primary/20"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-6 bg-white md:hidden"
            >
              <div className="flex items-center justify-between">
                <img src="/images/logo.png" alt="ARKI" className="h-8" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <div className="mt-12 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-border pb-4 text-xl font-medium text-foreground"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </a>
                ))}
                <div className="pt-8 flex flex-col space-y-4">
                  <a href="#" className="flex h-12 items-center justify-center rounded-lg border border-border text-base font-semibold text-foreground">
                    Log in
                  </a>
                  <a href="#book" className="flex h-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-base font-semibold shadow-sm">
                    Book a Call
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        <div className="mx-auto mt-12 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2">
          <span className="text-primary text-sm font-semibold">✦</span>
          <span className="text-sm font-medium text-primary">
            AI-Powered for Architecture & Engineering
          </span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto mt-12 px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight leading-[1.1] text-gradient-purple md:text-6xl lg:text-7xl">
            Get more design done
            <br />
            with less wasted effort
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Architecture and engineering project design done 50% faster, by leveraging your firm's existing data
          </p>
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="#book"
              className="h-14 rounded-xl bg-primary px-10 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg shadow-primary/20"
            >
              Get Started with ARKI
            </a>
            <a
              href="#features"
              className="h-14 rounded-xl border border-border bg-white px-10 text-lg font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center"
            >
              See How It Works
            </a>
          </div>

          <div className="relative mx-auto my-24 w-full max-w-5xl">
            <div className="absolute inset-x-0 -top-40 -bottom-40 rounded-full bg-primary/10 blur-[10rem] opacity-30 pointer-events-none" />

            {/* Hero Video/GIF */}
            <div className="relative glass-card p-2 overflow-hidden shadow-2xl shadow-primary/10 animate-float">
              <img
                src="/images/1.jpg"
                alt="ARKI product demo"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero2 };
