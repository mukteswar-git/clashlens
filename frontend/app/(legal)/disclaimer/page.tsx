import type { Metadata } from "next";

import { LegalLayout } from "@/components/legal/legal-layout";
import { LegalSection } from "@/components/legal/legal-section";

export const metadata: Metadata = {
  title: "Disclaimer | ClashLens",
  description: "Read the ClashLens disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      description="Important information regarding the use of ClashLens."
    >
      <LegalSection title="Independent Project">
        <p>
          ClashLens is an independent fan-made project created for educational and informational
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="No Affiliation with Supercell">
        <p>
          ClashLens is not affiliated with, endorsed by, sponsored by, or associated with Supercell.
        </p>
      </LegalSection>

      <LegalSection title="Official API">
        <p>
          All Clash of Clans data displayed by the application is retrieved from the official Clash
          of Clans API.
        </p>
      </LegalSection>

      <LegalSection title="Accuracy">
        <p>
          Analytics and visualizations are generated from publicly available data. Accuracy depends
          on the availability and correctness of data provided by the official API.
        </p>
      </LegalSection>

      <LegalSection title="No Guarantees">
        <p>
          ClashLens is provided without warranties of any kind and should not be relied upon as the
          sole basis for important clan management decisions.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
