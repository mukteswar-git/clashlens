import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { LegalSection } from "@/components/legal/legal-section";

export const metadata: Metadata = {
  title: "Privacy Policy | ClashLens",
  description: "Read the ClashLens Privacy Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="This Privacy Policy explains how ClashLens collects, uses, and protects information when you use the application."
    >
      <LegalSection title="Information We Collect">
        <p>
          ClashLens does not require users to create an account or submit personal information to
          use the application.
        </p>

        <p>
          The application processes publicly available Clash of Clans data requested through the
          official Clash of Clans API.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Information">
        <p>
          Retrieved clan and player data is used solely to display analytics, comparisons, and
          insights within the application.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          ClashLens uses the official Clash of Clans API provided by Supercell. The availability and
          accuracy of data depend on this external service.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>ClashLens does not intentionally use cookies for tracking users.</p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          This Privacy Policy may be updated periodically. Changes will be reflected on this page.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions regarding this Privacy Policy can be directed through the GitHub repository for
          ClashLens.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
