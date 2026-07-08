import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import type { FAQ } from "./faq.types";

type FAQCardProps = {
  faq: FAQ;
};

export function FAQCard({ faq }: FAQCardProps) {
  const Icon = faq.icon;

  return (
    <AccordionItem
      value={faq.question}
      className="rounded-3xl border bg-card shadow-sm px-6 py-3 hover:shadow-md transition-all duration-200"
    >
      <AccordionTrigger className="hover:no-underline">
        <div className="flex w-full items-center gap-6 text-left">
          {/* Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
            <Icon className="h-7 w-7" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-6">
        <div className="ml-26 text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
