
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the signs I need a new roof?",
      answer: "Look for missing or damaged tiles, leaks, sagging areas, excessive moss growth, or if your roof is over 20-25 years old. Regular inspections can help identify issues early."
    },
    {
      question: "How long does a typical roof last?",
      answer: "A well-maintained roof typically lasts 20-25 years for tiles, 15-20 years for felt roofs, and 30+ years for slate. The lifespan depends on materials, installation quality, and maintenance."
    },
    {
      question: "What's the difference between roof repair and full replacement?",
      answer: "Repairs fix specific issues like broken tiles or small leaks, while replacement involves removing the entire roof and installing a new one. We'll assess your roof and recommend the most cost-effective solution."
    },
    {
      question: "How much does a new roof typically cost?",
      answer: "Costs vary based on roof size, materials, and complexity. We provide free, detailed quotes after inspection. Most residential roofs range from £5,000-£15,000, but we'll give you an accurate estimate for your specific needs."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes! We provide completely free, no-obligation quotes. Our experienced team will assess your roof and provide a detailed written estimate including materials, labor, and timeline."
    },
    {
      question: "Are your roofers licensed and insured?",
      answer: "Absolutely. We're fully licensed, insured, and bonded. All our roofers are experienced professionals, and we carry comprehensive liability insurance to protect you and your property."
    },
    {
      question: "What kind of warranty do you provide?",
      answer: "We offer comprehensive warranties on all our work - typically 10 years on labor and up to 25 years on materials (depending on the product). All warranties are provided in writing."
    },
    {
      question: "How long does a new roof installation take?",
      answer: "Most residential roof installations take 2-5 days, depending on size and complexity. Weather conditions can affect timing. We'll provide a clear timeline with your quote."
    },
    {
      question: "What types of roofing materials do you work with?",
      answer: "We work with all major roofing materials including concrete and clay tiles, slate, felt systems, EPDM rubber, and various flat roofing membranes. We'll recommend the best option for your property and budget."
    },
    {
      question: "How often should I have my roof inspected?",
      answer: "We recommend annual inspections, plus after severe weather. Regular maintenance can prevent small issues becoming expensive repairs and extend your roof's lifespan significantly."
    },
    {
      question: "Do you handle emergency roof repairs?",
      answer: "Yes, we provide 24/7 emergency repair services for urgent issues like severe leaks or storm damage. Call us immediately at 01332 358958 for emergency assistance."
    },
    {
      question: "Can you help with insurance claims?",
      answer: "Absolutely. We have extensive experience working with insurance companies for storm damage and other covered incidents. We'll help document damage and work directly with your insurer to streamline the process."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our roofing services, processes, and what to expect.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:01332358958" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: 01332 358958
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
