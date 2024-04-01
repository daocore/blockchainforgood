import Force from '../assets/Force for good Icon.png'
import Force1 from '../assets/Force for good Icon (1).png'
import Force2 from '../assets/Force for good Icon (2).png'
import WhatBag from '../assets/What BGA can offer 1.png'
import HowCanHelp from '../assets/How you can help 1.png'

const forces = [
    {
        img: Force,
        title: 'Global Hackathons',
        desc: 'Solve pressing issues together'
    },
    {
        img: Force1,
        title: 'Annual Web3 Awards',
        desc: 'Honoring achievements in addressing social issue through Web3'
    },
    {
        img: Force2,
        title: 'Web3Key Fund',
        desc: 'Empowering projects and builders using blockchain technology to make a meaningful impact.'
    }
]

export const Intro = () => {
    return (
        <div id="about" className="flex-col justify-start items-center gap-4 flex w-content">
            <div className="justify-center items-center gap-[130px] inline-flex h-[260px]">
                <div className="w-[499px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">Force for Good</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Join our mission to leverage blockchain for global good through our pioneering initiatives.<br />Together, we’re building a collaborative ecosystem for change.</div>
                    </div>
                </div>
                <div className="justify-start items-start gap-6 flex w-1/2">
                    {
                        forces?.map((force, index) => {
                            return (
                                <div key={index} className="flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="w-[185px] h-[104px] relative">
                                        <img className="w-40 h-[97.88px] left-0 top-[6px] absolute" src={force?.img} />
                                    </div>
                                    <div className="h-[72px] flex-col justify-start items-start flex">
                                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{force?.title}</div>
                                        </div>
                                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                            <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">{force?.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-[1232px] justify-start items-center gap-[214px] inline-flex">
                <img className="w-[414px] h-[364px]" src={WhatBag} />
                <div className="w-[604px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-[42px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">What BGA can offer</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[228px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Communities</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Resources such as mentors, funding, education material, meetup support, venue.</div>
                            </div>
                        </div>
                        <div className="self-stretch h-12 flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Builders</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Resources such as mentors, funding, connections.</div>
                            </div>
                        </div>
                        <div className="self-stretch h-12 flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Corporates</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Resources such as Web 3.0 consultancy, connections, community activation.</div>
                            </div>
                        </div>
                        <div className="self-stretch h-12 flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Hackathon/ Event organizers</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Resources such as funding, community activation, connections.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1232px] h-[364px] relative">
                <div className="w-[499px] h-[298px] left-0 top-[66px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-[42px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">How you can help</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[248px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch h-24 flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Organizer/ Builder</div>
                            </div>
                            <div className="w-[499px] h-[72px] justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Actively contribute to organizing and initiating activities that advance our mission<br />E.g. running demo days, hackathons, workshops</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Connector</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Be the bridge between partners and valuable resources  <br />E.g. Mentors, speakers, talent pool</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[72px] flex-col justify-start items-start flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Funder</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">Fund BGA initiatives <br />Invest in impactful solutions </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="w-[604px] h-[364px] left-[628px] top-0 absolute" src={HowCanHelp} />
            </div>
        </div>
    )
}