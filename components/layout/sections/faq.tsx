import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What platforms does Flowly CRM support?",
    answer: "Flowly CRM is a desktop application available for Windows, macOS, and Linux operating systems.",
    value: "item-1",
  },
  {
    question: "Can I import my existing client data?",
    answer:
      "Yes, Flowly CRM supports importing client data from popular CRM platforms and CSV files. Our migration team can also assist with complex data transfers.",
    value: "item-2",
  },
  {
    question:
      "Is my client data secure with Flowly CRM?",
    answer:
      "Absolutely. We use industry-standard encryption for data at rest and in transit. All client data is stored securely with regular backups and compliance with privacy regulations.",
    value: "item-3",
  },
  {
    question: "Do you offer training for new users?",
    answer: "Yes, we provide comprehensive onboarding, video tutorials, and live training sessions to help your team get up to speed quickly with Flowly CRM.",
    value: "item-4",
  },
  {
    question:
      "Can I customize the email templates?",
    answer: "Yes, our drag-and-drop email template editor allows you to create fully customized templates that match your brand identity.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};