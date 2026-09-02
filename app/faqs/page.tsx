import type { Metadata } from "next";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "FAQs | Bitvoratech Web Development Agency",
  description:
    "Answers to common questions about working with Bitvoratech — pricing, timelines, process, and what it's like to build a website or app with us.",
};

export default function Page() {
  return <FaqsClient />;
}
