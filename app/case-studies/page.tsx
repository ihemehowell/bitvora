import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Bitvoratech Client Results",
  description:
    "In-depth breakdowns of websites and apps Bitvoratech has built — the challenge, the solution, and the results for each client.",
};

export default function Page() {
  return <CaseStudiesClient />;
}
