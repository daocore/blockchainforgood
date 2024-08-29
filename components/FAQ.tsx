"use client";

import { useIsMobile } from "@/hooks";
import { useState } from "react";

export const FAQItem = ({
  question,
  answer,
  index,
  color
}: {
  question: string;
  answer: string;
  index: number;
  color?: {
    question: string,
    answer: string,
  }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center w-full py-4 focus:outline-none cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className={`grow shrink basis-0 text-base font-bold font-['Inter'] leading-normal ${color?.question || "text-black"}`}>
          {index}. {question}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "transform rotate-180" : ""
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
        className={`overflow-hidden transition-all duration-300`}
        style={{
          transition: "max-height 0.5s ease",
          maxHeight: isOpen ? (mobile ? 500 : 200) : 0
        }}
      >
        <div className={`pb-4 ${color?.question || "text-typography"}`}>
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};