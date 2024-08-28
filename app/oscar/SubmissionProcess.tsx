"use client";

import { OscorTitle } from "./SummitIntro";
import styles from "./styles.module.css";

const ProcessItem = ({
  item,
  index
}: {
  item: IItem,
  index: number
}) => {
  return (
    <div className={`w-full group md:w-[604px] h-auto md:h-[200px] p-6 flex-col flex gap-3 md:gap-4 transition-all ${styles.cardBg}`}>
      <h3 className="flex items-center gap-2">
        <div className="w-6 md:w-8 h-6 md:h-8 rounded-full border border-description text-description group-hover:text-oscorActive group-hover:border-oscorActive flex items-center justify-center">{index}</div>
        <div className="text-sm md:text-base font-bold font-['Inter'] text-white group-hover:text-oscorActive">{item?.title}</div>
      </h3>
      <div className="text-typography font-normal font-['Inter'] text-xs md:text-sm group-hover:text-oscorActive">{item?.time}</div>
      <p className="text-typography font-normal font-['Inter']  text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.desc }} />
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
    <div className="w-full md:w-content m-auto px-6 md:px-0">
      <OscorTitle text="Submission Process" center/>
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
