import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Bitvoratech",
  description: "How Bitvoratech collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 2, 2026">
      <p>
        Bitvoratech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains
        what information we collect through bitvoratech.com, how we use it, and the choices you
        have.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information in a few ways:</p>
      <ul>
        <li>
          <strong>Information you provide directly</strong> — when you fill out our contact
          form, request a quote, or email us, we collect details like your name, email address,
          phone number, and project information.
        </li>
        <li>
          <strong>Automatically collected information</strong> — when you visit our site, we may
          collect basic technical data such as your IP address, browser type, device type, and
          pages visited, typically through analytics tools.
        </li>
        <li>
          <strong>Cookies</strong> — see our{" "}
          <a href="/cookie-policy">Cookie Policy</a> for details on what we use and why.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to inquiries and quote requests</li>
        <li>Deliver the services you&apos;ve engaged us for</li>
        <li>Improve our website and services</li>
        <li>Send occasional updates relevant to a project or inquiry you&apos;ve made</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>Sharing your information</h2>
      <p>
        We may share information with trusted third-party service providers who help us run our
        business — for example, hosting providers, analytics tools, or email delivery services.
        These providers only access what they need to perform their function and are expected to
        protect your data.
      </p>
      <p>
        We may also disclose information if required by law or to protect our rights, safety, or
        property.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep personal information for as long as necessary to fulfill the purposes described
        in this policy, or as required by law, after which it is deleted or anonymized.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or request deletion
        of your personal information. To make a request, contact us using the details below.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your information.
        However, no method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on this page with an
        updated &quot;last updated&quot; date.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy or how we handle your information, reach out at{" "}
        <a href="mailto:info@bitvoratech.com">info@bitvoratech.com</a> or +234 906 184 6290.
      </p>
    </LegalPage>
  );
}
