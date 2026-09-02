import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Website & App Development Pricing | Bitvoratech Lagos",
  description:
    "Transparent pricing for website development, mobile apps, and eCommerce stores. See our plans or request a custom quote from Bitvoratech.",
};

export default function Page() {
  return <PricingClient />;
}
