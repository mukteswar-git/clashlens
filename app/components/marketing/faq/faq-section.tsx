import { Accordion } from "@/components/ui/accordion";
import { FAQCard } from "./faq-card";
import { faqs } from "./faq-data";
import { Container } from "../../layout/container";
import Image from "next/image";
import { Badge } from "../../shared/badge";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const midpoint = Math.ceil(faqs.length / 2);

  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);
  return (
    <section className="pb-16 lg:pb-28" id="faq">
      {/* Left Background Image */}
      <Image
        src="/images/faq/baloon.webp"
        alt=""
        width={300}
        height={300}
        className="
        pointer-events-none 
        absolute 
        left-0 
        sm:left-10 
        md:left-20
        lg:left-40 
        xl:left-80
        -z-10 
        w-30 
        sm:w-35
        md:w-40 
        h-auto 
        select-none 
        blur-[1px]"
      />
      {/* Right Background Image */}
      <Image
        src="/images/faq/town-hall.webp"
        alt=""
        width={300}
        height={300}
        className="
        pointer-events-none 
        absolute 
        right-0 
        sm:right-10
        md:right-20 
        lg:right-40 
        xl:right-80 
        -z-10 
        w-40 
        sm:w-50 
        md:w-60 
        h-auto 
        select-none 
        blur-[1px]"
      />
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            icon={<CircleHelp className="size-4 text-badge-icon stroke-2" />}
          >
            FAQ
          </Badge>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span className="whitespace-nowrap text-accent">Questions</span>
          </h2>

          <p
            className="
              mt-6
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
              sm:leading-8
            "
          >
            Everything you need to know about ClashLens. Can&apos;t find the
            answer you&apos;re looking for? Email us at{" "}
            <Link
              href="mailto:clashlens.contact@gmail.com"
              className="font-semibold text-accent underline underline-offset-4 transition-colors hover:opacity-80"
            >
              clashlens.contact@gmail.com
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-6 lg:grid-cols-2">
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
