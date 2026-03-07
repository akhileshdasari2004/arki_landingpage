"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Product & Account Help",
  subtitle = "Frequently Asked Questions",
  description = "Get instant answers to the most common questions about your account, product setup, and updates.",
  buttonLabel = "Browse All FAQs →",
  onButtonClick,
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full max-w-7xl mx-auto py-24 md:py-32 px-6 relative overflow-hidden", className)}>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 text-primary/30",
        )}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-sm text-gradient-purple font-bold uppercase tracking-widest mb-4">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-gradient-purple">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {description}
        </p>
        <Button
          variant="default"
          className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>

      {/* FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left relative z-10">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem key={i} value={`item-${columnIndex}-${i}`} className="border-b border-primary/5 px-4 rounded-xl hover:bg-muted/30 transition-colors bg-white/40 backdrop-blur-sm">
                <AccordionTrigger className="text-lg font-bold py-6 hover:no-underline text-gradient-purple transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  <div className="min-h-[40px] transition-all duration-200 ease-in-out">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
