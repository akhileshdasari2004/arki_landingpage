"use client";
import { TestimonialsColumn, TestimonialData } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: TestimonialData[] = [
  {
    text: "Seeing this being used on live projects is what has been missing for a long time in BIM. Great piece of software. One of a few, out of the 1000s, that you can justify the costs.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Kevin Deegan",
    role: "BIM Manager / BIM Consultant, BIMCEART",
  },
  {
    text: "ARKI has completely transformed how we handle versioning. The AI de-duplication alone has saved us hundreds of drafting hours.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Chen",
    role: "Senior Architect, HGA",
  },
  {
    text: "The visual search is magical. Finding a specific detail across 10 years of projects used to take days; now it takes seconds.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "James Wilson",
    role: "Director of Technology, ZAS",
  },
  {
    text: "Finally, a tool that understands architectural drawings. It's like having a librarian who has memorized every sheet in the firm.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Elena Rodriguez",
    role: "Project Lead, Sweeny & Co",
  },
  {
    text: "The implementation was seamless. Our entire team was up and running in a single afternoon. Highly intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Marcus Thorne",
    role: "BIM Specialist, MJMA",
  },
  {
    text: "The ROI for ARKI was apparent in the first month. It's not just a search tool; it's a knowledge management powerhouse.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Linda Wu",
    role: "Principal, SvN Architects",
  },
  {
    text: "Collaboration features are top-notch. Sharing collections across different project teams has never been this organized.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "David Park",
    role: "IT Director, GH3",
  },
  {
    text: "Search results are incredibly accurate. It picks up nuances in drawings that generic AI tools simply ignore.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Sophie Bennett",
    role: "BIM Coordinator, Nelson Rudie",
  },
  {
    text: "The piece of mind knowing we're always using the latest detail snapshot is invaluable for quality control.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Robert Miller",
    role: "QC Manager, BIMCEART",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-primary/20 py-1.5 px-6 rounded-full text-sm font-semibold text-primary bg-primary/5 uppercase tracking-wider">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-6 leading-tight text-gradient-purple">
            What our users say
          </h2>
          <p className="text-center text-lg text-muted-foreground leading-relaxed">
            Leading architectural firms and BIM experts trust ARKI to manage their design knowledge.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="md:block" duration={30} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
