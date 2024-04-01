import Asset from '../assets/journey/Asset 61 1.png'
import Asset2 from '../assets/journey/Asset 61 2.png'
import Asset3 from '../assets/journey/Asset 47 1.png'
import Q1 from '../assets/journey/Q1.png'
import Q2 from '../assets/journey/Q2.png'
import Q3 from '../assets/journey/Q3.png'
import Q4 from '../assets/journey/Q4.png'

export const Journey = () => {
    return (
        <div className="py-6 bg-white shadow flex-col justify-start items-center gap-4 flex">
            <div className="w-[1232px] justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">2024 Journey Towards Impact</div>
            </div>
            <div className="w-[1232px] h-[235px] relative">
                <div className="w-[1185px] h-[199px] left-[24px] top-[36px] absolute justify-start items-start gap-6 inline-flex">
                    <div className="w-[266px] h-[199px] relative">
                        <img className="w-[266px] h-[199px] left-[266px] top-[199px] absolute origin-top-left -rotate-180" src={Asset} />
                        <div className="w-[266px] h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA launch at Token 2049 Dubai</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-slate-600 text-base font-normal font-['Inter'] leading-normal">Invite all partner for launch<br />Web3 key unlocking ceremony</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[604px] h-[199px] relative">
                        <img className="w-[604px] h-[199px] left-[604px] top-[199px] absolute origin-top-left -rotate-180" src={Asset2}/>
                        <div className="w-[604px] h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA partner-led initiatives</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-slate-600 text-base font-normal font-['Inter'] leading-normal">Blockchain for Good hackathon/demo day tracks<br />Education, workshops, meetups, others</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[267px] h-[199px] relative">
                        <img className="w-[267px] h-[199px] left-[267px] top-[199px] absolute origin-top-left -rotate-180" src={Asset} />
                        <div className="w-[267px] h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA events</div>
                            </div>
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-slate-600 text-base font-normal font-['Inter'] leading-normal">Finale Hackathon<br />Web3 Gala Dinner</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1232px] h-[65px] left-0 top-0 absolute">
                    <div className="w-[1232px] h-[65px] left-0 top-0 absolute">
                        <img className="w-20 h-[65px] left-[105px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[1047px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[419px] top-0 absolute" src={Asset3} />
                        <img className="w-20 h-[65px] left-[733px] top-0 absolute" src={Asset3} />
                    </div>
                    <div className="w-[998px] h-11 left-[117px] top-[18px] absolute">
                        <img className="w-14 h-11 left-0 top-0 absolute mix-blend-overlay" src={Q1} />
                        <img className="w-14 h-11 left-[314px] top-0 absolute mix-blend-overlay" src={Q2} />
                        <img className="w-14 h-11 left-[628px] top-0 absolute mix-blend-overlay" src={Q3} />
                        <img className="w-14 h-11 left-[942px] top-0 absolute mix-blend-overlay" src={Q4} />
                    </div>
                </div>
            </div>
        </div>
    )
}