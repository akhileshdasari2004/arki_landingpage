"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface AccordionFeatureSectionProps {
  features?: FeatureItem[];
  title: string;
  subtitle: string;
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Sync historic data",
    image: "/images/feature-tab.jpg",
    description: "Automatically synchronize project data across your team and tools, ensuring real-time updates and consistency in every stage of design.",
  },
  {
    id: 2,
    title: "AI Visual Search",
    image: "/images/feature-search.jpg",
    description: "Search through your entire project library visually using AI that understands architectural drawings and engineering details.",
  },
  {
    id: 3,
    title: "Reuse 2D & 3D Details",
    image: "/images/feature-versioning.jpg",
    description: "Find and reuse existing 2D and 3D details from your firm's past projects, eliminating redundant drafting work.",
  },
  {
    id: 4,
    title: "Compare Details",
    image: "https://static.wixstatic.com/media/8ae53d_cba99841b41f47ee92bc00236ca7e94c~mv2.jpg/v1/fill/w_1960,h_1254,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Feature2.jpg",
    description: "Side-by-side comparison of design details across projects to identify best practices and maintain consistency.",
  },
  {
    id: 5,
    title: "AI Asset Versioning",
    image: "https://static.wixstatic.com/media/8ae53d_98b07e7bca3b424b8a622ab7f4de7872~mv2.jpg/v1/fill/w_1960,h_1254,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Feature6.jpg",
    description: "Intelligent version control that tracks changes across your design assets and eliminates duplicate work.",
  },
];

const AccordionFeatureSection = ({
  features = defaultFeatures,
  title,
  subtitle
}: AccordionFeatureSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-gradient-purple">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className="border-b-primary/5">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-6 !no-underline transition group"
                  >
                    <div className="flex flex-col items-start gap-1">
                      <h4
                        className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${tab.id === activeTabId ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {tab.title}
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {tab.description}
                      </p>
                      <div className="mt-6 md:hidden">
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="w-full aspect-video rounded-xl object-cover shadow-2xl"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative hidden w-1/2 md:block">
            <div className="glass-card overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-primary/5">
              <img
                src={activeImage}
                alt="Feature preview"
                className="w-full aspect-[4/3] object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AccordionFeatureSection };
