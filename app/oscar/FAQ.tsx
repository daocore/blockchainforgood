"use client";

import { FAQItem } from "@/components/FAQ";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question: "What types of projects are eligible for participation?",
    answer: `We welcome projects that align with the United Nations' <a href="https://sdgs.un.org/goals" style="color: #00d5bf">17 Sustainable Development Goals (SDGs) </a> and leverage blockchain technology to address real-world challenges. Projects of all stages are welcome, but a final working demo should be available by the end of the hackathon.`,
  },
  {
    question: "Why should you apply for this hackathon?",
    answer:
      "Hackathon winners share a part of the grand prize pool, which includes equity-free rewards, funding to help scale your business, and a complimentary speaking opportunity at the BGA Oscar. Additional benefits may be announced—stay tuned!",
  },
  {
    question: "Does it cost anything to participate?",
    answer: `Participation is free, and the selection process is based on merit. The grand prize is equity-free, and jury members may also extend investment offers beyond the prize grant.`,
  },
  {
    question: "What is the application process?",
    answer: `To apply for the Sustainable Innovation Summit: The 17 SDGs Challenge, submit your application through the provided link. Once your submission is received, the Blockchain for Good Review Committee will evaluate it alongside other entries. All applicants will be informed of the next steps via email and Telegram.`,
  },
  {
    question:
      "There is a video required for the application. What is the BGA looking for?",
    answer: `We ask for a video to demonstrate your product in real time, showcasing its value for the hackathon. Feel free to use any device—production quality isn't a priority, but seeing your product in action is key. We are particularly interested in projects that use blockchain technology to solve real-world issues in line with the United Nations' 17 Sustainable Development Goals.`,
  },
  {
    question:
      "Can I modify or update my submission after it has been submitted?",
    answer:
      "Yes, you can modify or update your submission after it has been sent. Please avoid submitting multiple entries. Once your project is successfully submitted, you’ll receive a confirmation email with an update link. The deadline for updates is 25 October 2024 at 11:00 PM UTC+8.",
  },
];

export const OscarFAQ = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div id="faq" ref={ref} className="w-full md:w-content m-auto px-6 md:px-0">
      <h2 className="text-lg md:text-xl font-bold text-oscarActive">FAQ</h2>
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
                  stroke="#7D8CA3"
                  strokeDasharray="1 2"
                />
              </svg>
            )}
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + 1}
              color={{
                question: "text-description",
                answer: "text-typography",
              }}
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
                stroke="#7D8CA3"
                strokeDasharray="1 2"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
