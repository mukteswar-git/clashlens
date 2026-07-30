import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/app/components/layout/container";
import { LastUpdatedLabel } from "./last-updated-label";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function LegalLayout({
  title,
  description,
  children,
}: LegalLayoutProps) {
  return (
    <main className="py-16">
      <Container className="max-w-4xl">
        <header className="mb-12 border-b pb-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to ClashLens
          </Link>

          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

          <p className="mt-4 text-muted-foreground">{description}</p>

          <LastUpdatedLabel />
        </header>

        <div className="space-y-10">{children}</div>
      </Container>
    </main>
  );
}