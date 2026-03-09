import { Timeline } from '@/components/ui/timeline';
import { Hero2 } from '@/components/ui/hero-2-1';
import TrustedBy from '@/components/TrustedBy';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import BookACall from '@/components/BookACall';
import Footer from '@/components/Footer';
import { AccordionFeatureSection } from '@/components/ui/accordion-feature-section';

const Index = () => {
  const timelineData = [
    {
      title: "Find Instantly",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold">Find answers instantly with semantic search</h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Stop wasting time searching through models and reinventing the wheel. Upload internal project data from Revit, AutoCAD, or PDFs to create a centralized, unlimited archive. ARKI's AI reads your drawings visually and organizes your files, enabling effortless search, retrieval, and reuse — right inside your drafting software.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/feature-search.jpg"
              alt="Find answers instantly with semantic search"
              className="rounded-2xl object-cover w-full shadow-2xl border border-primary/5"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI Versioning",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold">AI Asset Versioning</h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Intelligent version control that tracks changes across your design assets and eliminates duplicate work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/Feature6.avif"
              alt="AI asset versioning"
              className="rounded-2xl object-cover w-full shadow-2xl border border-primary/5"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Compare Details",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold">Compare Details</h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Side-by-side comparison of design details across projects to identify best practices and maintain consistency.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/Feature2.avif"
              alt="Side-by-side comparison"
              className="rounded-2xl object-cover w-full shadow-2xl border border-primary/5"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Work Together",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold">Enable faster collaboration across experience levels</h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              Create custom collections tailored to your firm's needs — by client, category, or project — and collaborate seamlessly with team members, complete with notes and firm-wide or project-specific access.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/feature-collab.jpg"
              alt="Enable faster collaboration across experience levels"
              className="rounded-2xl object-cover w-full shadow-2xl border border-primary/5"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero2 includes the Navbar */}
      <Hero2 />
      <TrustedBy />

      <section id="benefits" className="bg-white">
        <Timeline
          data={timelineData}
          title="Scale your firm's design intelligence"
          description="Build a high-performance detail library that grows with your firm, automatically."
        />
      </section>

      <BookACall />

      <AccordionFeatureSection
        title="Unlock the hidden value in your drawing data"
        subtitle="Our powerful features provide a seamless experience, helping you organize, search, and reuse design data effortlessly."
      />

      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
