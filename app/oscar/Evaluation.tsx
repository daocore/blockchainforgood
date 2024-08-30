import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { OscarTitle } from "./SummitIntro";
import homeStyles from "../home/styles.module.css";

const data = [
  {
    question: "Social Impact (20 Points)",
    answer: `Evaluation Criteria: The extent to which the project addresses social issues.
    <br/>Specific Indicators: The scale of the population the solution can serve, and the severity and urgency of the social problem it aims to address or improve.`,
  },
  {
    question: "Sustainability and Scalability (30 Points)",
    answer: `Evaluation Criteria: The long-term viability and growth potential of the project.
    <br/>Specific Indicators: The sustainability of the business model, presence of successful case studies, a clear future development roadmap, and the scalability of the solution to other fields or markets.`,
  },
  {
    question: "Technical Innovation (20 Points)",
    answer: `Evaluation Criteria: Whether the project leverages blockchain to propose a unique solution or novel application to address social issues. 
    <br/>Specific Indicators: Points of innovation in the solution and its differences from existing technologies or methods.`,
  },
  {
    question: "Founder & Core Team (20 Points)",
    answer: `Evaluation Criteria: The strength of the founder's passion and dedication, as well as the experience and resources of the core team.
      <br/>Specific Indicators: The founder’s commitment to the project, the core team’s relevant industry experience, their network of industry resources, and their track record of successful projects.`,
  },
  {
    question: "Product Implementation & Experience (10 Points)",
    answer: `Evaluation Criteria: The degree of product implementation, usability, and interface design.
      <br/>Specific Indicators: The design of smart contracts, system security, effective utilization of blockchain technology, and integration with existing systems.`,
  },
];

export const Evaluation = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );

  return (
    <div ref={ref} className="w-full py-8 bg-white">
      <div className="w-full md:w-content m-auto px-6 md:px-0">
        <OscarTitle text="Evaluation Criteria" />
        <div className="self-stretch flex-col justify-start items-center flex gap-2 mt-2">
          {data.map((item, index) => (
            <div className="w-full" key={index}>
              <h3 className="text-typography text-sm md:text-base font-bold font-['Inter']">
                {item?.question}
              </h3>
              <p
                className="text-typography text-sm md:text-base font-normal font-['Inter']"
                dangerouslySetInnerHTML={{ __html: item?.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
