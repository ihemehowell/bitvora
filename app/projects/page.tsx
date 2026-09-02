import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Portfolio | Websites & Apps Built by Bitvoratech",
  description:
    "Browse recent web apps, eCommerce stores, and landing pages built by Bitvoratech for clients across Nigeria and beyond.",
};

export default function Page() {
  return <ProjectsClient />;
}
