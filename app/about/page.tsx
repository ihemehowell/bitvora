import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Bitvoratech Web Development Agency, Lagos",
  description:
    "Meet the team behind Bitvoratech. We're a Lagos-based web development agency building modern, high-performance digital products for African SMEs.",
};

export default function Page() {
  return <AboutClient />;
}
