import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer telehealth therapy in California?",
      answer: "Yes. Secure telehealth is available throughout California for clients who prefer remote sessions from the comfort of their own space."
    },
    {
      question: "What therapy modalities do you use for anxiety and trauma?",
      answer: "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR for trauma processing, mindfulness-based practices, and body-oriented techniques to address both emotional and physiological aspects of anxiety and trauma."
    },
    {
      question: "Where is your Santa Monica therapy office located?",
      answer: "My office is located at 123th Street 45 W, Santa Monica, CA 90401. We offer both in-person therapy sessions in this calm, grounding space and telehealth options for clients throughout California."
    },
    {
      question: "Do you work with burnout and perfectionism?",
      answer: "Yes, I specialize in supporting professionals, entrepreneurs, and creatives dealing with burnout, perfectionism, and the pressures of high-achieving environments. Therapy can help you slow down, reconnect with yourself, and develop sustainable ways of living and working."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary/5 rounded-full animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
            Common questions about therapy services and approach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 lg:p-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 lg:mt-16 animate-fade-in-up animation-delay-600">
          <p className="text-gray-600 mb-6">
            Have more questions? I&apos;m here to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover-lift hover-glow transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
