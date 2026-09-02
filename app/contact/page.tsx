import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Bitvoratech | Web Development Agency in Lagos",
  description:
    "Get in touch with Bitvoratech. Based in Yaba, Lagos — reach us by phone, email, or the contact form to discuss your project.",
};

export default function Page() {
  return <ContactClient />;
}
