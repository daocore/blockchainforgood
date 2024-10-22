"use client";

import {
  OSCAR_EVENT_ID,
  OSCAR_HACKTHON_APPLY_LINK,
  OSCAR_HACKTHON_EVENT_ID,
  ROUTER_PATH,
} from "@/constants";
import { FAQItem } from "@/components/FAQ";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question:
      "Do I need to register separately for the morning and afternoon sessions?",
    answer: `Yes, the event is divided into two main sessions. The morning session features the 17 SDGs Challenge Roadshow, and the afternoon session focuses on The Chains of Change. Please register for both sessions individually via the provided registration links: <a target="__blank" href="${ROUTER_PATH.FORM.PERSON}/${OSCAR_HACKTHON_EVENT_ID}" style="color: #00d5bf">here</a> and <a target="__blank" href="${ROUTER_PATH.FORM.PERSON}/${OSCAR_EVENT_ID}" style="color: #00d5bf">here</a>`,
  },
  {
    question: "Are refreshments provided during the event?",
    answer:
      "Yes, a complimentary lunch will be provided between 12:00 PM and 1:30 PM for all successfully registered participants. Snacks and refreshments will also be additionally available throughout the event at two coffee breaks.",
  },
  {
    question: "Does event registration require approval?",
    answer: `Once you submit your registration, it will be reviewed by the BGA team. Approval notifications will be sent out by November 7, 2024, ahead of the event.`,
  },
  {
    question: "Where is the event taking place?",
    answer: `The BGA Oscar event will be held at the Grand Hyatt Erawan Bangkok, located in the heart of Bangkok, Thailand. For directions and parking information, please refer to the event guide provided with your registration confirmation.`,
  },
  {
    question: "Is there a dress code for the event?",
    answer: `While not mandatory, the event is themed after the Oscar Awards. As such, do try to maintain an event dresscode that is toward smart-casual, and avoid apparel such as shorts, flip-flops and other informal wear.`,
  },
  {
    question:
      "Will there be live streaming for those unable to attend in person?",
    answer: `To be confirmed.`,
  },
];

export const FAQ = () => {
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
