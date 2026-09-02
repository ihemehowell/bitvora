import type { Metadata } from "next";
import { Code } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Custom Website Development in Lagos | Bitvoratech",
  description:
    "Custom-built, responsive websites using Next.js and modern frameworks. Fast, SEO-optimized, and built for African SMEs. Get a free quote today.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceDetailPage
      eyebrow="Web Development"
      title="Custom Website"
      highlight="Development"
      intro="Websites built with the latest technologies for performance, security, and scale."
      icon={Code}
      features={[
        "Responsive, mobile-first design",
        "Built on Next.js for speed and SEO",
        "Clean, maintainable code your team can build on",
        "Cross-browser and cross-device compatibility",
        "SEO-friendly architecture from day one",
        "Content management so you can update pages yourself",
      ]}
      process={[
        {
          title: "Discovery",
          description:
            "We start by understanding your business, your customers, and what the site needs to achieve.",
        },
        {
          title: "Design",
          description:
            "Wireframes and visual design tailored to your brand, reviewed with you before development starts.",
        },
        {
          title: "Build",
          description:
            "Development in Next.js and TypeScript, with regular check-ins so there are no surprises.",
        },
        {
          title: "Launch & support",
          description:
            "We deploy, test across devices, and stay available for updates and maintenance after launch.",
        },
      ]}
      faq={[
        {
          question: "How long does a custom website take to build?",
          answer:
            "Most business websites take 2-4 weeks depending on scope. More complex builds with custom functionality can take longer — we'll give you a clear timeline after discovery.",
        },
        {
          question: "Do you build eCommerce sites too?",
          answer:
            "Yes — see our dedicated eCommerce work, or mention it when you request a quote and we'll scope it together.",
        },
        {
          question: "Will I be able to update the site myself after launch?",
          answer:
            "Yes, we build with content management in mind so you're not dependent on us for routine text and image updates.",
        },
      ]}
    />
  );
}
