import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Get a Free Quote | Bitvoratech Web Development",
  description:
    "Tell us about your project and get a free, no-obligation quote from Bitvoratech's web development team in Lagos.",
};

export default function Page() {
  return <QuoteClient />;
}
