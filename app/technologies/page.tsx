import type { Metadata } from "next";
import TechnologiesClient from "./TechnologiesClient";

export const metadata: Metadata = {
  title: "Technologies We Use | Bitvoratech",
  description:
    "Bitvoratech builds with Next.js, TypeScript, React Native and modern tooling. See the tech stack behind our websites and apps.",
};

export default function Page() {
  return <TechnologiesClient />;
}
