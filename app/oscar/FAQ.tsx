"use client";

import { useState } from "react";
import { ApplyLink } from "@/components/Const";

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center w-full py-4 focus:outline-none cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="grow shrink basis-0 text-description text-base font-bold font-['Inter'] leading-normal">
          {index}. {question}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""
            }`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23249 14.7935C6.53229 15.0793 7.00703 15.068 7.29285 14.7682L12.25 9.56838L17.2072 14.7682C17.493 15.068 17.9677 15.0793 18.2675 14.7935C18.5673 14.5077 18.5787 14.033 18.2928 13.7332L12.7928 7.96393C12.6513 7.81546 12.4551 7.73145 12.25 7.73145C12.0449 7.73145 11.8487 7.81546 11.7072 7.96393L6.20716 13.7332C5.92134 14.033 5.93268 14.5077 6.23249 14.7935Z"
            fill="#283344"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "h-auto" : "h-0"
          }`}
      >
        <div className="pb-4 text-typography">
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Why should you apply for hackathon?",
    answer: "The winner of Hackathon will be awarded the grand prize, which consists of: Equity-free rewards – including funds to scale your business, complimentary speaking slot at BGA Oscar  and much more. Stay tuned for updates!",
  },
  {
    question: "Does it cost anything to participate?",
    answer: `Applying is free, and selection is merit-based. The grand prize is equity-free. The jury will be able to make offers to invest outside of the prize grant.`,
  },
  {
    question: "What is the application process?",
    answer: `If you are interested in HACKATHON, please submit your application <a href="${ApplyLink}" target="blank" style="color: #00d5bf">here</a>. 
    <br/>Once you have submitted your application, the BlockCain For Good  Review committee will review your application, along with others.
    <br/>BlockChain For Good will announce next steps in the process to all applicants via email & TG.`,
  },
  {
    question: "There is a video required for the application. What is BlockChain For Good looking for?",
    answer: `Show us your product working in real-time! This is the best way to convey the value you are looking to showcase on the Hackathon stage. Feel free to use your phone or screen grabs to record the video – production quality isn't important, the key is to see your working product in action. 
      <br/>BGA is seeking projects that leverage blockchain technology to solve real-world problems, aligning with the United Nations' 17 Sustainable Development Goals.`,
  }
];

export const OscarFAQ = () => {

  return (
    <div className="w-full md:w-content m-auto">
      <h2 className="text-xl font-bold text-oscorActive">FAQ</h2>
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
