import Asset from '../assets/journey/Asset 61 1.png'
import Asset2 from '../assets/journey/Asset 61 2.png'
import Asset3 from '../assets/journey/Asset 47 1.png'
import Q1 from '../assets/journey/Q1.png'
import Q2 from '../assets/journey/Q2.png'
import Q3 from '../assets/journey/Q3.png'
import Q4 from '../assets/journey/Q4.png'

const Item = ({ texts }: { texts: string[] }) => {
    return (
        <div className="text-slate-600 text-base font-normal font-['Inter'] leading-normal w-full px-2">
            {texts.map((text, index) => (
                <div key={index} className='text-center w-full'><div className="w-1 h-1 inline-block rounded-full bg-slate-600 mb-[3px] mr-1"></div>{text}</div>
            ))}
        </div>
    )
}

export const Journey = () => {
    return (
        <div className="py-6 bg-white shadow flex-col justify-start items-center gap-4 flex">
            <div className="w-full md:w-content justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">2024 Journey Towards Impact</div>
            </div>
            <div className="w-full md:w-content md:h-[235px] relative">
                <div className="w-full md:w-[1185px] md:h-[199px] left-[24px] top-[36px] absolute justify-start items-start gap-6 inline-flex flex-wrap">
                    <div className="w-full md:w-[266px] md:h-[199px] relative">
                        <img className="w-full md:w-[266px] md:h-[199px]" src={Asset} />
                        <div className="w-full md:w-[266px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex text-center">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">BGA launch at Token 2049 Dubai</div>
                            </div>
                            <Item texts={["Invite all partner for launch", "Web3 key unlocking ceremony"]} />
                        </div>
                    </div>
                    {/* <div className="w-full md:w-[604px] md:h-[199px] relative">
                        <img className="w-full md:w-[604px] md:h-[199px]" src={Asset2} />
                        <div className="w-full md:w-[604px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA partner-led initiatives</div>
                            </div>
                            <Item texts={["Blockchain for Good hackathon/demo day tracks", "Education, workshops, meetups, others"]} />
                        </div>
                    </div>
                    <div className="w-full md:w-[267px] md:h-[199px] relative">
                        <img className="w-[267px] md:h-[199px]" src={Asset} />
                        <div className="w-full md:w-[267px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA events</div>
                            </div>
                            <Item texts={["Finale Hackathon", "Web3 Gala Dinner"]} />
                        </div>
                    </div> */}
                </div>
                {/* <div className="w-full md:w-content md:h-[65px] left-0 top-0 absolute">
                    <div className="w-full md:w-content md:h-[65px] left-0 top-0 absolute">
                        <img className="w-20 h-[65px] left-[105px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[1047px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[419px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[733px] top-0 absolute" src={Asset3} />
                    </div>
                    <div className="w-[998px] h-11 left-[117px] top-[18px] absolute">
                        <img className="w-14 h-11 -left-2 top-0 absolute mix-blend-overlay" src={Q1} />
                        <img className="w-14 h-11 left-[310px] top-0 absolute mix-blend-overlay" src={Q2} />
                        <img className="w-14 h-11 left-[624px] top-0 absolute mix-blend-overlay" src={Q3} />
                        <img className="w-14 h-11 left-[940px] top-0 absolute mix-blend-overlay" src={Q4} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}