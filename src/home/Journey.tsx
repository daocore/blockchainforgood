import Asset from '../assets/journey/Asset 61 1.png'
import Asset2 from '../assets/journey/Asset 61 2.png'
import Asset3 from '../assets/journey/Asset 47 1.png'
import Q1 from '../assets/journey/Q1.png'
import Q2 from '../assets/journey/Q2.png'
import Q3 from '../assets/journey/Q3.png'
import Q4 from '../assets/journey/Q4.png'
import { HTMLAttributes } from 'react'

const Item = ({ texts }: { texts: string[] }) => {
    return (
        <div className="text-[#576172] text-base font-normal font-['Inter'] leading-normal w-full px-2">
            {texts.map((text, index) => (
                <div key={index} className='text-center w-full mb-[6px]'><div className="w-[5px] h-[5px] inline-block rounded-full bg-[#576172] mb-[3px] mr-1"></div>{text}</div>
            ))}
        </div>
    )
}

const Icon = ({ icon, ...props }: { icon: string } & HTMLAttributes<HTMLDivElement>) => {
    return <div {...props} className={`block md:hidden relative -top-8 ${props?.className}`}>
        <img className="w-20 h-[65px] left-0 top-0 absolute" src={Asset3} />
        <img className="w-14 h-12 left-[8px] top-[16px] absolute mix-blend-overlay" src={icon} />
    </div>
}

export const Journey = () => {
    return (
        <div className="py-6 bg-white shadow flex-col justify-start items-center gap-4 flex">
            <div className="w-full md:w-content justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">2024 Journey Towards Impact</div>
            </div>
            <div className="w-full h-[70vh] md:w-content md:h-[235px] relative mt-10 md:mt-0">
                <div className="w-full md:w-[1185px] md:h-[199px] md:left-[24px] md:top-[36px] absolute justify-start items-start gap-10 md:gap-6 inline-flex flex-wrap">
                    <div className="w-full md:w-[266px] md:h-[199px] relative">
                        <Icon icon={Q1} style={{ marginLeft: `calc(50vw - 40px)` }} />
                        <img className="w-full md:w-[266px] h-[160px] md:h-[199px]" src={Asset} />
                        <div className="w-full md:w-[266px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex text-center">
                                <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">BGA launch</div>
                            </div>
                            <Item texts={["Launch at Blockchain Life event on 15/4", "Launch of “Blockchain for Good” hackathon track at ICP Hack to the Future Hackathon"]} />
                        </div>
                    </div>
                    <div className="w-full md:w-[604px] md:h-[199px] relative">
                        <Icon icon={Q2} style={{ marginLeft: `calc(20vw - 40px)` }} />
                        <Icon icon={Q3} style={{ marginLeft: `calc(80vw - 40px)` }} />
                        <img className="w-full md:w-[267px] h-[160px] md:h-[199px] block md:hidden" src={Asset} />
                        <img className="w-full md:w-[604px] md:h-[199px] hidden md:block" src={Asset2} />
                        <div className="w-full md:w-[604px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA partner-led initiatives</div>
                            </div>
                            <Item texts={["Blockchain for Good hackathon/demo day tracks", "Education, workshops, meetups, others"]} />
                        </div>
                    </div>
                    <div className="w-full md:w-[267px] md:h-[199px] relative">
                        <Icon icon={Q4} style={{ marginLeft: `calc(50vw - 40px)` }} />
                        <img className="w-full md:w-[267px] h-[160px] md:h-[199px]" src={Asset} />
                        <div className="w-full md:w-[267px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA events</div>
                            </div>
                            <Item texts={["Finale Hackathon", "Web3 Oscar"]} />
                        </div>
                    </div>
                </div>
                {/* 这是figma导出的样式，绝对定位真特么无语了，而且背景和数字icon是分开的。。。。 */}
                <div className="w-full md:w-content md:h-[65px] left-0 top-0 absolute hidden md:block">
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
                </div>
            </div>
        </div>
    )
}