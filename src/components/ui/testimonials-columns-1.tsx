"use client";
import React from "react";
import { motion } from "framer-motion";

export interface TestimonialData {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialData[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-primary/5 bg-white shadow-xl shadow-primary/5 max-w-xs w-full transition-all hover:border-primary/20 hover:shadow-primary/10 group"
                  key={i}
                >
                  <div className="text-foreground/80 leading-relaxed font-medium">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/10">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight leading-tight text-foreground">{name}</div>
                      <div className="text-sm opacity-60 tracking-tight text-muted-foreground">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
