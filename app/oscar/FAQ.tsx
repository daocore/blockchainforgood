"use client";

import { OSCAR_HACKTHON_APPLY_LINK } from "@/constants";
import { FAQItem } from "@/components/FAQ";

const faqs = [
  {
    question: "What types of projects can participate in?",
    answer: `Projects that align with the  <a href="https://sdgs.un.org/goals" style="color: #00d5bf">17 Sustainable Development Goals</a> and use blockchain to solve real-life problems.`,
  },
  {
    question: "Why should you apply for hackathon?",
    answer:
      "The winner of Hackathon will be awarded the grand prize, which consists of: Equity-free rewards – including funds to scale your business, complimentary speaking slot at BGA Oscar  and much more. Stay tuned for updates!",
  },
  {
    question: "Does it cost anything to participate?",
    answer: `Applying is free, and selection is merit-based. The grand prize is equity-free. The jury will be able to make offers to invest outside of the prize grant.`,
  },
  {
    question: "What is the application process?",
    answer: `If you are interested in HACKATHON, please submit your application <a href="${OSCAR_HACKTHON_APPLY_LINK}" style="color: #00d5bf">here</a>. 
    <br/>Once you have submitted your application, the BlockCain For Good  Review committee will review your application, along with others.
    <br/>BlockChain For Good will announce next steps in the process to all applicants via email & TG.`,
  },
  {
    question:
      "There is a video required for the application. What is BlockChain For Good looking for?",
    answer: `Show us your product working in real-time! This is the best way to convey the value you are looking to showcase on the Hackathon stage. Feel free to use your phone or screen grabs to record the video – production quality isn't important, the key is to see your working product in action. 
      <br/>BGA is seeking projects that leverage blockchain technology to solve real-world problems, aligning with the United Nations' 17 Sustainable Development Goals.`,
  },
];

export const OscarFAQ = () => {
  return (
    <div className="w-full md:w-content m-auto px-6 md:px-0">
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
