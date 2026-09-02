import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Web & Digital Strategy Consulting | Bitvoratech",
  description:
    "Expert guidance on tech stack, digital strategy, and product decisions for growing businesses. Book a consultation with Bitvoratech.",
};

export default function ConsultingPage() {
  return (
    <ServiceDetailPage
      eyebrow="Consulting"
      title="Expert Digital"
      highlight="Guidance"
      intro="Straight answers on tech stack, product strategy, and what to build next."
      icon={Wrench}
      features={[
        "Tech stack and platform recommendations",
        "Website and app audits with a prioritized action plan",
        "Digital strategy for launches and redesigns",
        "Vendor and hiring guidance for in-house builds",
        "Performance, SEO, and security reviews",
        "Ongoing advisory for founders and product teams",
      ]}
      process={[
        {
          title: "Initial conversation",
          description:
            "We learn about your business, your current setup, and the decisions you're trying to make.",
        },
        {
          title: "Audit",
          description:
            "If relevant, we review your existing site, app, or systems to see what's working and what isn't.",
        },
        {
          title: "Recommendations",
          description:
            "A clear, prioritized set of recommendations — not a vague strategy deck, but concrete next steps.",
        },
        {
          title: "Ongoing support",
          description:
            "Available as an advisor as you implement, whether that's with our team or your own.",
        },
      ]}
      faq={[
        {
          question: "Is consulting only for businesses already working with you?",
          answer:
            "No — we take on standalone consulting engagements even if you're not building your product with us.",
        },
        {
          question: "Can you review a site or app we already have?",
          answer:
            "Yes, technical and UX audits are one of the most common ways clients start with us before deciding what to build next.",
        },
        {
          question: "How is consulting priced?",
          answer:
            "It depends on scope — a one-off audit is priced differently from ongoing advisory. Request a quote and tell us what you need.",
        },
      ]}
    />
  );
}
