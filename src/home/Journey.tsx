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
                <div key={index} className='md:text-center w-full mb-[6px]'><div className="w-[5px] h-[5px] inline-block rounded-full bg-[#576172] mb-[3px] mr-1"></div>{text}</div>
            ))}
        </div>
    )
}

const Line = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} style={{
            height: 2,
            background: `linear-gradient(to ${props?.style?.height ? "bottom" : "right"}, #FDFFB4, #00D5BF)`,
            position: 'absolute',
            ...props?.style,
            width: props?.style?.height ? 2 : props?.style?.width,
        }}></div>
    )
}

const Icon = ({ icon, ...props }: { icon: string } & HTMLAttributes<HTMLDivElement>) => {
    return <div {...props} className={`relative -top-[2px] ${props?.className}`}>
        {/* 还有一层外透明的边框 */}
        <img className="w-[80px] h-[65px] left-0 top-0 absolute" src={Asset3} />
        <img className="w-14 h-12 left-[8px] top-[16px] absolute mix-blend-overlay" src={icon} />
    </div>
}

export const Journey = () => {
    const iconw = (80 - 56) / 2;
    const linew = (266 - 56) / 2;
    const gapw = 24;

    return (
        <div className="py-6 bg-white shadow flex-col justify-start items-center gap-4 flex w-full md:w-content">
            <div className="w-full md:w-content justify-center items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">2024 Journey Towards Impact</div>
            </div>
            <div className="w-full h-[67vh] xs:h-[65vh] md:w-content md:h-[260px] relative">
                <div className="w-[80vw] md:w-[1185px] md:h-[220px] left-[20vw] md:left-[24px] md:top-[36px] absolute justify-start items-start gap-10 md:gap-6 inline-flex flex-wrap">
                    <div className="w-full md:w-[266px] h-[160px] md:h-[199px] relative">
                        <img className="w-full md:w-[266px] h-[160px] md:h-[220px] hidden md:block" src={Asset} />
                        <div className="w-full md:w-[266px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 text-black text-base md:text-center font-bold font-['Inter'] leading-normal">BGA launch</div>
                            </div>
                            <Item texts={["Launch at Blockchain Life event on 15/4", "Launch of “Blockchain for Good” hackathon track at ICP Hack to the Future Hackathon"]} />
                        </div>
                    </div>
                    <div className="w-full md:w-[604px] h-[140px] md:h-[199px] relative">
                        <img className="w-full md:w-[604px] md:h-[220px] hidden md:block" src={Asset2} />
                        <div className="w-full md:w-[604px] md:h-[220px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 md:text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA partner-led initiatives</div>
                            </div>
                            <Item texts={["Blockchain for Good hackathon/demo day tracks", "Education, workshops, meetups, others"]} />
                        </div>
                    </div>
                    <div className="w-full md:w-[267px] h-[180px] md:h-[199px] relative">
                        <img className="w-full md:w-[267px] h-[160px] md:h-[220px] hidden md:block" src={Asset} />
                        <div className="w-full md:w-[267px] md:h-[199px] px-2 pt-10 left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                <div className="grow shrink basis-0 md:text-center text-black text-base font-bold font-['Inter'] leading-normal">BGA events</div>
                            </div>
                            <Item texts={["Finale Hackathon", "Web3 Oscar"]} />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-content md:h-[65px] left-6 top-1 relative hidden md:block">
                    <Line className='top-8' style={{ left: 0, width: linew }} />
                    <Icon icon={Q1} style={{ left: linew - iconw }} />
                    <Line className='top-8' style={{ left: linew + 56, width: linew * 2 + gapw }} />
                    <Icon icon={Q2} style={{ left: 266 + gapw + linew - iconw }} />
                    <Line className='top-8' style={{ left: 266 + gapw + linew + 56, width: 605 - (linew + 56) * 2 }} />
                    <Icon icon={Q3} style={{ left: 266 + gapw + linew + 56 + 605 - (linew + 56) * 2 - iconw }} />
                    <Line className='top-8' style={{ left: 266 + gapw + 605 - linew, width: linew * 2 + gapw }} />
                    <Icon icon={Q4} style={{ left: 605 + gapw * 2 + 266 + linew - iconw }} />
                    <Line className='top-8' style={{ left: 266 + gapw * 2 + 605 + 266 - linew, width: linew }} />
                </div>
                <div className="w-[100px] top-1 absolute block md:hidden">
                    <Icon icon={Q1} style={{ top: 20 }} />
                    <Line className='top-8' style={{ top: 80, left: 38, height: 148 }} />
                    <Icon icon={Q2} style={{ top: 220 }} />
                    <Icon icon={Q3} style={{ top: 276 }} />
                    <Line className='top-8' style={{ top: 336, left: 38, height: 70 }} />
                    <Icon icon={Q4} style={{ top: 400 }} />
                </div>
            </div>
        </div>
    )
}