import React from "react";
import { testimonials } from "@/Data/Data";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import SectionHeading from "../SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="bg-linear-to-br from-[#319198] to-[#319198]/80 py-16">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real feedback from real clients"
        />

        <div className="max-w-4xl mx-auto">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
