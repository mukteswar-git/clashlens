import { Accordion } from "@/components/ui/accordion";
import { FAQCard } from "./FAQCard";
import { faqs } from "./faq-data";
import { Container } from "../../layout/Container";
import Image from "next/image";
import { Badge } from "../../shared/Badge";
import { CircleHelp } from "lucide-react";

export function FAQSection() {
  const midpoint = Math.ceil(faqs.length / 2);

  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);
  return (
    <section className="pb-20 lg:pb-28">
      {/* Left Background Image */}
      <Image
        src="/images/faq/baloon.webp"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute left-80 -z-10 select-none blur-[1px]"
      />
      {/* Right Background Image */}
      <Image
        src="/images/faq/town-hall.webp"
        alt=""
        width={300}
        height={200}
        className="pointer-events-none absolute right-60 -z-10 select-none blur-[1px]"
      />
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            icon={<CircleHelp className="size-4 text-badge-icon stroke-2" />}
          >
            FAQ
          </Badge>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Frequently Asked{" "}
            <span className="whitespace-nowrap text-accent">Questions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about ClashLens. Can&apos;t find the
            answer you&apos;re looking for? <span className="font-bold text-accent">Contact us</span> anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Accordion type="single" collapsible className="space-y-6">
            {leftColumnFaqs.map((faq) => (
              <FAQCard key={faq.question} faq={faq} />
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-6">
            {rightColumnFaqs.map((faq) => (
              <FAQCard key={faq.question} faq={faq} />
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
