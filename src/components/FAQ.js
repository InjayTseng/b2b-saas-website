import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the implementation process work?",
      answer: "Our implementation process is straightforward and guided by our expert team. We begin with a thorough assessment, followed by customization, training, and ongoing support."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support through multiple channels including phone, email, and live chat. Enterprise customers get dedicated support managers."
    },
    {
      question: "Can I integrate with existing systems?",
      answer: "Yes, our platform offers extensive API support and pre-built integrations with major business systems and platforms."
    },
    {
      question: "What about data security?",
      answer: "We maintain the highest level of security with SOC 2 and ISO 27001 certifications. Your data is encrypted both in transit and at rest."
    },
    {
      question: "Can I try before purchasing?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200 mb-4">
              <input 
                type="radio" 
                name="faq-accordion" 
                checked={openIndex === index}
                onChange={() => setOpenIndex(index === openIndex ? null : index)}
              />
              <div className="collapse-title text-xl font-medium flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 