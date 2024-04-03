import Force from '../assets/Force for good Icon.png'
import Force1 from '../assets/Force for good Icon (1).png'
import Force2 from '../assets/Force for good Icon (3).png'
import WhatBag from '../assets/What BGA can offer 1.png'
import HowCanHelp from '../assets/How you can help 1.png'
import { ApplyLink } from '../components/Const'
import { RowSpace } from '.'

const forces = [
    {
        img: Force,
        title: 'Global Hackathons',
        desc: 'Solving pressing issues together'
    },
    {
        img: Force1,
        title: 'Web3 Oscar',
        desc: 'Honoring achievements in addressing social issue through Web3'
    },
    {
        img: Force2,
        title: 'Education',
        desc: 'Supporting education initiatives such as blockchain research, workshops and more'
    }
]

const wahts = [
    {
        title: "Communities",
        desc: "Resources such as mentors, funding, education material, meetup support, venue"
    },
    {
        title: "Builders",
        desc: "Resources such as mentors, funding, connections"
    },
    {
        title: "Corporates",
        desc: "Resources such as Web 3.0 consultancy, connections, community activation"
    },
    {
        title: "Hackathon/ Event organizers",
        desc: "Resources such as funding, community activation, connections"
    }
]

const helps = [
    {
        title: "Organizer / Builder",
        desc: ["Actively contribute to organizing and initiating activities that advance our mission", "E.g. running demo days, hackathons, workshops"]
    },
    {
        title: "Connector",
        desc: ["Be the bridge between partners and valuable resources", "E.g. Mentors, speakers, talent pool"]
    },
    {
        title: "Funder",
        desc: ["Fund BGA initiatives", "Invest in impactful solutions"]
    }
]

export const Intro = () => {
    return (
        <div id="about" className="flex-col justify-start items-center gap-10 md:gap-4 flex w-full md:w-content flex-wrap px-4 md:px-0 text-center md:text-left">
            <div className="justify-center md:justify-between items-center inline-flex flex-wrap">
                <div className="w-full md:w-[499px] flex-col md:justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">Force for Good</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">Join our mission to leverage blockchain for global good through our pioneering initiatives.<RowSpace />Together, we’re building a collaborative ecosystem for change.</div>
                    </div>
                </div>
                <div className="justify-start items-start flex w-full gap-4 md:gap-0 md:w-1/2 flex-wrap">
                    {
                        forces?.map((force, index) => {
                            return (
                                <div key={index} className="flex-col justify-center md:justify-start items-start gap-2 inline-flex w-full md:w-1/3 px-2">
                                    <img className="w-40 h-[97.88px] m-auto" src={force?.img} />
                                    <div className="flex-col justify-start items-start flex w-full">
                                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{force?.title}</div>
                                        </div>
                                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">{force?.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full justify-start items-center md:gap-[214px] inline-flex flex-wrap mt-10 md:mt-0">
                <img className="w-4/5 md:w-[410px] md:h-[364px]" src={WhatBag} />
                <div className="w-full md:w-[608px] flex-col justify-start items-start gap-2 inline-flex flex-wrap">
                    <div className="self-stretch md:h-[42px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">What BGA can offer</div>
                        </div>
                    </div>
                    <div className="self-stretch md:h-[228px] flex-col justify-start items-start gap-4 md:gap-3 flex">
                        {wahts?.map((what, index) => {
                            return (
                                <div key={index} className="self-stretch md:h-[72px] flex-col justify-start items-start flex">
                                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                        <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{what?.title}</div>
                                    </div>
                                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                        <div className="grow shrink basis-0 text-[#576172] text-[15px] font-normal font-['Inter'] leading-normal">{what?.desc}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full md:h-[364px] flex justify-center md:justify-between flex-wrap">
                <div className="w-full md:w-[499px] md:h-[298px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-[42px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">How you can help</div>
                        </div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-4 md:gap-3 flex">
                        {
                            helps?.map((help, index) => {
                                return (
                                    <div key={index} className="self-stretch flex-col justify-start items-start flex">
                                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{help?.title}</div>
                                        </div>
                                        <div className="text-[#576172] text-base font-normal font-['Inter'] leading-normal w-full px-2">
                                            {help?.desc?.map((text, index) => (
                                                <div key={index} className='w-full'><div className="w-[5px] h-[5px] inline-block rounded-full bg-[#576172] mb-[3px] mr-1"></div>{text}</div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-full md:w-auto px-6 py-3 justify-center transform items-center inline-flex button cursor-pointer mt-4" onClick={() => {
                        window.open(ApplyLink, "_blank")
                    }}>
                        Join Us
                    </div>
                </div>
                <img className="w-full h-[220px] md:w-[604px] md:h-[364px] mt-10 md:mt-0" src={HowCanHelp} />
            </div>
        </div>
    )
}