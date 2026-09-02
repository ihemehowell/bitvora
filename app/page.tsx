import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Web Development Agency in Lagos, Nigeria | Bitvoratech",
  description:
    "Bitvoratech builds fast, modern websites, mobile apps, and eCommerce stores for African SMEs. Based in Lagos. Get a free quote and see our work.",
};

export default function Page() {
  return <HomeClient />;
}
