"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface FeatureCarouselProps {
  tag: string;
  heading: string;
  body: string;
  images: string[];
  reverse?: boolean;
}

function FeatureCarousel({
  tag,
  heading,
  body,
  images,
  reverse
}: FeatureCarouselProps) {
  return (
    <div className="w-full py-20 lg:py-40 border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
      <div className="container mx-auto px-6">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 justify-end items-center gap-12 lg:gap-20",
          reverse ? "lg:direction-rtl" : ""
        )}>
          <div className={cn(
            "flex gap-6 flex-col items-start",
            reverse ? "lg:direction-ltr lg:order-2" : ""
          )}>
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1">
                {tag}
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-left">
                {heading}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-left max-w-xl">
                {body}
              </p>
            </div>
          </div>

          <div className={cn(
            "w-full max-w-full lg:px-6 relative group",
            reverse ? "lg:direction-ltr lg:order-1" : ""
          )}>
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative glass-card overflow-hidden shadow-2xl group-hover:shadow-primary/5 transition-shadow">
                      <img
                        src={src}
                        alt={`${heading} screenshot ${index + 1}`}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <div className="absolute -bottom-10 right-12 flex gap-2">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-white" />
                  <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary hover:text-white" />
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureCarousel };
