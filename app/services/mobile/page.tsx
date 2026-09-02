import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "iOS & Android App Development in Nigeria | Bitvoratech",
  description:
    "We design and build mobile apps for iOS and Android tailored to your business. From concept to launch — talk to our team in Lagos.",
};

export default function MobileAppsPage() {
  return (
    <ServiceDetailPage
      eyebrow="Mobile Apps"
      title="iOS & Android"
      highlight="App Development"
      intro="Mobile apps built for real business needs, from first sketch to app store launch."
      icon={Cpu}
      features={[
        "Native-feel apps for iOS and Android",
        "Cross-platform development for faster delivery",
        "API integration with your existing systems",
        "Push notifications and user engagement features",
        "App Store and Play Store submission support",
        "Post-launch monitoring and updates",
      ]}
      process={[
        {
          title: "Product scoping",
          description:
            "We map out what the app needs to do, for whom, and how it fits your broader business.",
        },
        {
          title: "UI/UX design",
          description:
            "Screens and flows designed for how people actually use their phones — fast, simple, intuitive.",
        },
        {
          title: "Development",
          description:
            "We build, test on real devices, and keep you updated with working builds throughout.",
        },
        {
          title: "Launch & iterate",
          description:
            "We handle store submission and stay on to fix bugs and ship improvements post-launch.",
        },
      ]}
      faq={[
        {
          question: "Do you build for both iOS and Android?",
          answer:
            "Yes — we typically use cross-platform frameworks so your app reaches both audiences without doubling the build cost.",
        },
        {
          question: "Can you integrate the app with our existing website or systems?",
          answer:
            "Yes, we regularly connect mobile apps to existing APIs, payment providers, and backend systems.",
        },
        {
          question: "What does a typical mobile app project cost?",
          answer:
            "It depends heavily on features and complexity — request a quote and we'll give you a realistic estimate after understanding your requirements.",
        },
      ]}
    />
  );
}
