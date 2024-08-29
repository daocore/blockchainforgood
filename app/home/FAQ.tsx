"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./styles.module.css";
import { PARTNER_APPLY_LINK } from "@/constants";
import { FAQItem } from "@/components/FAQ";

const faqs = [
  {
    question: "Who can apply for grants or partnership?",
    answer:
      "We welcome applications from projects, communities, startups, nonprofits, social enterprises, and research institutions that are using blockchain technology for social good. Both early-stage ideas and established projects seeking to scale can apply.",
  },
  {
    question: "How does the application process work?",
    answer: `Applicants must submit an online application <a href="${PARTNER_APPLY_LINK}" style="color: #00d5bf">link</a> and will be contacted within 2 weeks for next steps.`,
  },
  {
    question: "What kind of support does BGA offer?",
    answer:
      "Our support ranges from financial grants, technical assistance, and mentorship, to networking opportunities with industry leaders and access to our member ecosystem for collaborations.",
  },
  {
    question: "Are there any geographical restrictions for applicants?",
    answer:
      "While we aim to support projects with a global impact, certain grants or partnership programs may have geographical focuses depending on the strategic objectives of our partners and the specific needs of the communities we aim to serve.",
  },
  {
    question: "How can partners collaborate with BGA?",
    answer: `Potential partners can collaborate through co-funding projects, providing expertise and mentorship, offering technological resources, or by joining as a member to support the Alliance's mission. 
    <br/>We encourage interested organizations to contact us directly to explore potential collaboration opportunities.`,
  },
];

export const FAQ = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(styles.moveFromBottom);

  return (
    <div
      ref={ref}
      id="faq"
      className="w-full md:w-content space-y-4 px-4 md:px-0"
    >
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="self-stretch flex-col justify-start items-center flex">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            {index === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2"
                viewBox="0 0 1232 2"
                fill="none"
                className="w-full md:w-content"
              >
                <path
                  d="M0 1.00024L1232 1.00035"
                  stroke="#283344"
                  strokeDasharray="1 2"
                />
              </svg>
            )}
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + 1}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2"
              viewBox="0 0 1232 2"
              fill="none"
              className="w-full md:w-content"
            >
              <path
                d="M0 1.00024L1232 1.00035"
                stroke="#283344"
                strokeDasharray="1 2"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
