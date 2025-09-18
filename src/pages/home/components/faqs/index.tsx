import React, { useState } from "react";
import { faqData } from "@/assets/data";
import FaqItem from "./Item";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-black">
      <div className="my-container">
        <div className="text-center mb-16">
          <h5 className="lato-bold tracking-wider text-sm text-white mb-4">
            HAVE A QUESTION?
          </h5>
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="100"
            data-aos-offset="100"
            className="text-5xl lato-black text-blue tracking-wider"
          >
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
