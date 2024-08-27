"use client";

import { useState } from "react";
import { OscorTitle } from "./SummitIntro";
import styles from "./styles.module.css";

const ProcessItem = ({
  item,
  index
}: {
  item: IItem,
  index: number
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full md:w-[604px] h-auto md:h-[200px] border border-description p-6 flex-col flex gap-4`}>
      <h3 className="text-white flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-description text-description flex items-center justify-center">{index}</div>
        <div className="text-base font-bold font-['Inter']">{item?.title}</div>
      </h3>
      <div className="text-typography font-normal font-['Inter'] text-sm">{item?.time}</div>
      <p className="text-typography font-normal font-['Inter'] text-base" dangerouslySetInnerHTML={{ __html: item.desc }} />
    </div>
  );
};

interface IItem {
  title: string,
  desc: string,
  time: string
}

const data: IItem[] = [
  {
    title: "Complete & submit your application",
    time: "1 Sep - 1 Oct 2024",
    desc: "Show us how you are changing the world. Hundreds of the most ambitious projects are applying, and only 10 will be selected.",
  },
  {
    title: "Application Review",
    time: "1 - 7 Oct 2024",
    desc: `Committee will assess each application, ranking them based on innovation, impact, and the potential to scale globally.`,
  },
  {
    title: "Get notified",
    time: "7 - 20 Oct 2024",
    desc: `The top 10 projects will be selected as finalists, and invited to present on stage at TOKEN2049 Singapore on 18-19 September. Applications will close a few weeks before the event.`,
  },
  {
    title: "Demo Day",
    time: "11 Nov 2024",
    desc: `Showcase your project in Bangkok`,
  }
];

export const SubmissionProcess = () => {

  return (
    <div className="w-full md:w-content m-auto">
      <OscorTitle text="Submission Process" />
      <div className="items-center flex justify-between flex-wrap gap-6 mt-6">
        {data.map((item, index) => (
          <ProcessItem
            key={index}
            item={item}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};
