"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./styles.module.css";
import { PARTNER_APPLY_LINK } from "@/constants";
import { FAQItem } from "@/components/FAQ";

const faqs = [
  {
    question: "Who is eligible to apply for grants or partnerships?",
    answer:
      "We welcome applications from a wide range of entities, including projects, communities, startups, nonprofits, social enterprises, and research institutions that are leveraging blockchain technology for social good. Both early-stage ideas and established projects with a focus on scaling are encouraged to apply.",
  },
  {
    question: "What is the application process?",
    answer: `Applicants are required to submit an online application via this <a href="${PARTNER_APPLY_LINK}" style="color: #00d5bf">link</a>. Once submitted, our team will review the application and contact you within two weeks to discuss any next steps. Due to high volumes of applications, only successful applications will be informed.`,
  },
  {
    question: "What criteria does BGA use to evaluate applications?",
    answer:
      "We evaluate applications based on several key criteria, including the project's alignment with our mission, the potential impact of the proposed solution, the feasibility of the project, and the team's ability to execute the plan. We also consider the scalability and sustainability of the initiative, as well as its potential to contribute to global good through blockchain technology.",
  },
  {
    question: "What types of support does BGA provide?",
    answer:
      "We offer a comprehensive range of support, including financial grants, technical assistance, and mentorship. Additionally, we provide access to networking opportunities with industry leaders and connections within our extensive member ecosystem to foster meaningful collaborations.",
  },
  {
    question: "Are there any geographical limitations for applicants?",
    answer: `While we strive to support initiatives with a global impact, some grants or partnership programs may be geographically focused based on the strategic goals of our partners and the specific needs of the communities we aim to serve. We encourage applicants from all regions to apply, as we review each application on a case-by-case basis.`,
  },
  {
    question: "How can partners collaborate with BGA?",
    answer:
      "Partners can collaborate with us through various avenues, including co-funding projects, offering expertise and mentorship, providing technological resources, or becoming a member to support our mission. We invite interested organizations to reach out directly to discuss potential collaboration opportunities.",
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
