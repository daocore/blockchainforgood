import React, { useState } from 'react';
import { ApplyLink } from '../components/Const';

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
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
        <h3 className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{index}. {question}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''
          }`}>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.23249 14.7935C6.53229 15.0793 7.00703 15.068 7.29285 14.7682L12.25 9.56838L17.2072 14.7682C17.493 15.068 17.9677 15.0793 18.2675 14.7935C18.5673 14.5077 18.5787 14.033 18.2928 13.7332L12.7928 7.96393C12.6513 7.81546 12.4551 7.73145 12.25 7.73145C12.0449 7.73145 11.8487 7.81546 11.7072 7.96393L6.20716 13.7332C5.92134 14.033 5.93268 14.5077 6.23249 14.7935Z" fill="#283344" />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-0'
          }`}
      >
        <div className="pb-4 text-[#576172]">
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: 'What is the Blockchain for Good Alliance (BGA)?',
    answer: 'The Blockchain for Good Alliance is a collaborative network of organizations, projects, and individuals committed to leveraging blockchain technology to solve global social, environmental, and economic challenges.',
  },
  {
    question: 'Who can apply for grants or partnership',
    answer: 'We welcome applications from projects, communities, startups, nonprofits, social enterprises, and research institutions that are using blockchain technology for social good. Both early-stage ideas and established projects seeking to scale can apply.',
  },
  {
    question: 'What types of partners/ projects do you support?',
    answer: 'We support a wide range of partners/projects that align with our mission, including but not limited to financial inclusion, environmental conservation, healthcare innovation, educational advancement, and humanitarian aid.',
  },
  {
    question: 'How does the application process work?',
    answer: `Applicants must submit an online application <a href="${ApplyLink}" target="blank" style="color: #00d5bf">link</a> and will be contacted within 2 weeks for next steps.`,
  },
  {
    question: 'What kind of support does BGA offer?',
    answer: 'Our support ranges from financial grants, technical assistance, and mentorship, to networking opportunities with industry leaders and access to our member ecosystem for collaborations.',
  },
  {
    question: 'Are there any geographical restrictions for applicants?',
    answer: 'While we aim to support projects with a global impact, certain grants or partnership programs may have geographical focuses depending on the strategic objectives of our partners and the specific needs of the communities we aim to serve.',
  },
  {
    question: 'How can partners collaborate with BGA?',
    answer: `Potential partners can collaborate through co-funding projects, providing expertise and mentorship, offering technological resources, or by joining as a member to support the Alliance's mission. 
    <br/>We encourage interested organizations to contact us directly to explore potential collaboration opportunities.`,
  },
  {
    question: 'What are the reporting and accountability requirements for grant recipients?',
    answer: `Grant recipients are required to provide regular progress reports, financial accounting of grant usage, and demonstrate measurable outcomes. 
    <br/>Specific requirements will be outlined in the grant agreement.`,
  },
];

export const FAQ = () => {
  
  return (
    <div id="faq" className="w-full md:w-content flex-col justify-start items-start gap-4 inline-flex px-4 md:px-0">
      <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
        <h1 className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">FAQ</h1>
      </div>
      <div className="self-stretch flex-col justify-start items-center flex">
        {faqs.map((faq, index) => (
          <div key={index} className='w-full'>
            {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1232 2" fill="none" className='w-full md:w-content'>
              <path d="M0 1.00024L1232 1.00035" stroke="#283344" strokeDasharray="1 2" />
            </svg>}
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index+1} />
            <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 1232 2" fill="none" className='w-full md:w-content'>
              <path d="M0 1.00024L1232 1.00035" stroke="#283344" strokeDasharray="1 2" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
