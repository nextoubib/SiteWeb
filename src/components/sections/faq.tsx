import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/json-ld";
import type { FaqItem } from "@/types";

type FAQProps = {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  tone?: "default" | "surface";
};

export function FAQ({
  items,
  title = "Questions fréquentes",
  eyebrow = "FAQ",
  description,
  tone = "default",
}: FAQProps) {
  return (
    <Section tone={tone} containerSize="narrow">
      <JsonLd data={faqJsonLd(items)} />
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />
      <Accordion
        type="single"
        collapsible
        className="mt-10 rounded-xl border border-border bg-background px-5 sm:px-6"
      >
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
