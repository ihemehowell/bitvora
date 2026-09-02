import type { Metadata } from "next";
import { Palette } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "UI/UX Design Services in Lagos | Bitvoratech",
  description:
    "User research, wireframing, and prototyping that turns ideas into beautiful, usable interfaces. See our design portfolio and get a free quote.",
};

export default function DesignPage() {
  return (
    <ServiceDetailPage
      eyebrow="UI/UX Design"
      title="Beautiful, Usable"
      highlight="Interfaces"
      intro="Design grounded in real user research — not just what looks good, but what works."
      icon={Palette}
      features={[
        "User research and customer personas",
        "Wireframing and interactive prototyping",
        "Visual design that reflects your brand",
        "Usability testing before you build",
        "Reusable design systems for consistency at scale",
        "Handoff-ready files for your development team",
      ]}
      process={[
        {
          title: "Research",
          description:
            "We talk to your actual users (or model realistic personas) to understand what they need from the product.",
        },
        {
          title: "Wireframes",
          description:
            "Low-fidelity layouts to nail down structure and flow before we spend time on visuals.",
        },
        {
          title: "Visual design",
          description:
            "Full visual design applied across every screen, consistent with your brand identity.",
        },
        {
          title: "Prototype & test",
          description:
            "An interactive prototype you and real users can click through before a single line of code is written.",
        },
      ]}
      faq={[
        {
          question: "Do you design for existing products or only new ones?",
          answer:
            "Both — we regularly redesign existing sites and apps that need a usability or visual refresh, as well as design new products from scratch.",
        },
        {
          question: "Will you also build what you design?",
          answer:
            "Yes, our design and development teams work together, or we can hand off polished, developer-ready files if you have your own build team.",
        },
        {
          question: "What tools do you design in?",
          answer:
            "We work in modern design tools and deliver prototypes you can click through and test before development starts.",
        },
      ]}
    />
  );
}
