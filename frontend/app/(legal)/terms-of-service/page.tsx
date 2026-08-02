import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { LegalSection } from "@/components/legal/legal-section";

export const metadata: Metadata = {
  title: "Terms of Service | ClashLens",
  description: "Read the ClashLens Terms of Service.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="These Terms of Service govern your use of ClashLens."
    >
      <LegalSection title="Acceptance of Terms">
        <p>By using ClashLens, you agree to these Terms of Service.</p>
      </LegalSection>

      <LegalSection title="Use of the Service">
        <p>
          You may use ClashLens only for lawful purposes and in accordance with applicable laws and
          regulations.
        </p>
      </LegalSection>

      <LegalSection title="Availability">
        <p>
          ClashLens is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
          guarantees of uninterrupted service.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          The application is provided for informational purposes. The author is not responsible for
          decisions made based on the displayed analytics.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          These Terms may be updated from time to time. Continued use of the application constitutes
          acceptance of any revisions.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
