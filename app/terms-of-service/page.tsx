import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Bitvoratech",
  description: "The terms that govern your use of Bitvoratech's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="September 2, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of bitvoratech.com and the
        services provided by Bitvoratech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By
        using our website or engaging our services, you agree to these Terms.
      </p>

      <h2>Our services</h2>
      <p>
        Bitvoratech provides web development, mobile app development, UI/UX design, and related
        digital consulting services. The specific scope, deliverables, timeline, and cost of any
        engagement are agreed separately in a proposal, quote, or contract before work begins.
      </p>

      <h2>Quotes and payments</h2>
      <ul>
        <li>Quotes provided through our website or directly are estimates and may be adjusted after a full scoping conversation.</li>
        <li>Payment terms (deposits, milestones, final payment) will be agreed in writing before a project starts.</li>
        <li>Late or missing payments may result in paused work until resolved.</li>
      </ul>

      <h2>Client responsibilities</h2>
      <p>
        To deliver projects on time, we rely on clients to provide timely feedback, content, and
        access to any necessary accounts or systems. Delays on the client&apos;s side may affect
        project timelines.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise agreed in writing, ownership of final deliverables (code, designs)
        transfers to the client upon full payment. Bitvoratech retains the right to showcase
        completed work in our portfolio and marketing materials unless a client requests
        otherwise.
      </p>
      <p>
        Any pre-existing tools, frameworks, or proprietary code libraries used in delivering a
        project remain the property of Bitvoratech or their respective owners.
      </p>

      <h2>Website use</h2>
      <p>
        You agree not to misuse our website — including attempting unauthorized access, disrupting
        its normal operation, or using it for unlawful purposes.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        Bitvoratech provides services and website content on an &quot;as is&quot; basis. To the
        fullest extent permitted by law, we are not liable for indirect, incidental, or
        consequential damages arising from the use of our website or services.
      </p>

      <h2>Termination</h2>
      <p>
        Either party may terminate an ongoing engagement as outlined in the specific project
        contract. Work completed up to the point of termination will be billed accordingly.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of our website or services
        after changes are posted constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:info@bitvoratech.com">info@bitvoratech.com</a> or +234 906 184 6290.
      </p>
    </LegalPage>
  );
}
