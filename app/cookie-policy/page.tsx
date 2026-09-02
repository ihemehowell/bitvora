import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Bitvoratech",
  description: "How Bitvoratech uses cookies and similar technologies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="September 2, 2026">
      <p className="mb-4 text-xl font-black ">
        This Cookie Policy explains how Bitvoratech (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) uses cookies and similar technologies on bitvoratech.com.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help
        websites function properly, remember preferences, and understand how visitors use the
        site.
      </p>

      <h2>How we use cookies</h2>
      <ul>
        <li>
          <strong>Essential cookies</strong> — required for basic site functionality, such as
          navigation and theme (light/dark mode) preferences.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand how visitors interact with our
          site (e.g. which pages are viewed most) so we can improve it. This data is generally
          aggregated and not used to personally identify you.
        </li>
      </ul>
      <p>We do not currently use cookies for third-party advertising.</p>

      <h2>Managing cookies</h2>
      <p>
        Most browsers let you control cookies through their settings — you can typically block or
        delete cookies, or be notified when a site tries to set one. Note that blocking essential
        cookies may affect how parts of our site function, such as your saved theme preference.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in the technologies
        we use. Updates will be posted on this page with a revised &quot;last updated&quot; date.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:info@bitvoratech.com">info@bitvoratech.com</a>.
      </p>
    </LegalPage>
  );
}
