import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Web Development, Design & Apps | Bitvoratech",
  description:
    "Website development, mobile apps, UI/UX design, eCommerce, and web maintenance — comprehensive digital services for African SMEs, based in Lagos.",
};

export default function Page() {
  return <ServicesClient />;
}
