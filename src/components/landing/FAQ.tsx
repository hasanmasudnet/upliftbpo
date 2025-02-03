import { HelpCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "AI & Automation",
    questions: [
      {
        question: "How does AI improve auto service efficiency?",
        answer:
          "Our AI system optimizes scheduling, automates routine tasks, and provides predictive maintenance insights. This results in 40% improved efficiency, reduced wait times, and better resource allocation.",
      },
      {
        question: "Will AI replace human technicians?",
        answer:
          "No, AI complements human expertise. It handles routine tasks, scheduling, and initial diagnostics, allowing technicians to focus on complex repairs and customer service, making their work more efficient and valuable.",
      },
      {
        question: "How accurate is the AI diagnostic system?",
        answer:
          "Our AI diagnostic system achieves 95% accuracy in initial problem identification, verified against expert technician assessments. It continuously learns from new data to improve accuracy.",
      },
    ],
  },
  {
    category: "Implementation & Training",
    questions: [
      {
        question: "What training is required for staff?",
        answer:
          "Minimal training is needed. Our platform features an intuitive interface and provides interactive tutorials. Most staff members become proficient within 1-2 days of using the system.",
      },
      {
        question: "How does AI improve customer service?",
        answer:
          "AI provides 24/7 appointment booking, instant responses to inquiries, automated updates, and personalized service recommendations, resulting in a 30% increase in customer satisfaction.",
      },
      {
        question: "Can the AI system integrate with existing software?",
        answer:
          "Yes, our platform offers seamless integration with major management systems, diagnostic tools, and CRM software. Custom integrations are available for enterprise clients.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn how our AI-powered platform transforms auto service operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-blue-500" />
                {section.category}
              </h3>
              <div className="grid gap-4">
                {section.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value={`item-${idx}-${index}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                          <div className="text-base font-medium pr-4 group-hover:text-blue-600">
                            {faq.question}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 pt-2">
                          <div className="prose prose-sm max-w-none text-gray-600">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
