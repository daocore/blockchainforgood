import HeroImg from '../assets/HeroImage.png'
import HeroImageRubixcubewText from '../assets/HeroImage-RubixcubewText.png'
import { RowSpace } from '.'
import { ApplyLink } from '../components/Const'
import Cubes from "../assets/CubesPatterns.svg"
import { useToTop } from '../components/Header'
import { useEffect, useState } from 'react'

export const JoinUs = ({ text }: { text?: string }) => {
    return (
        <div className="w-full xs:w-[240px] z-10 md:w-auto xs:mx-auto md:mx-0 px-6 py-3 text-[16px] justify-center transform items-center inline-flex button cursor-pointer font-['Inter'] font-bold mt-4 xs:mt-6 md:mt-8" onClick={() => {
            window.open(ApplyLink, "_blank")
        }}>
            {text || "Join Us"}
        </div>
    )
}

export const Hero = () => {
    const [top, setTop] = useState<number>(0);

    useEffect(() => {
        if (!document?.getElementById) return
        document?.addEventListener("scroll", () => {
            if (window?.scrollY <= 400) {
                setTop(window.scrollY)
            }
        });

        return () => {
            document?.removeEventListener("scroll", () => { });
        };
    }, [])

    return (
        <div className="w-full md:w-content m-auto mt-16 p-4 md:p-0">
            <div className="items-center justify-between inline-flex w-full flex-wrap">
                <div className="w-full md:w-[499px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch flex-col justify-start items-start gap-2 md:gap-4 flex md:text-left text-center">
                        <div className="self-stretch text-black text-[40px] xs:text-[64px] md:text-[82px] font-extrabold font-['Inter'] leading-[36px] xs:leading-[48px] md:leading-[82px]">Blockchain <br className='md:block hidden' />for Good</div>
                        <div className="self-stretch text-text text-[20px] xs:text-[32px] md:text-[26px] font-normal font-['Inter'] leading-loose">Your Key to Web3</div>
                    </div>
                    <JoinUs />
                </div>
                <img className="w-full md:w-[605px] mr-0 md:-mr-[92px] mt-4 md:mt-0" src={HeroImg} />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pb-0 md:pb-16 flex-wrap mt-8 xs:mt-12 md:mt-0 relative gap-4">
                <img className="w-[300px] md:w-[340px] ml-0 md:ml-[37px] mb-10 md:mb-0" src={HeroImageRubixcubewText} />
                <div className="w-full md:w-[604px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px] text-center md:text-left w-full md:w-auto">Care. Create. Change.</div>
                    <div className="self-stretch justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 text-[#576172] text-sm md:text-base font-normal font-['Inter'] leading-normal  text-center md:text-left w-full md:w-auto">At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.
                            <RowSpace />
                            Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.</div>
                    </div>
                </div>
                <img src={Cubes} className="absolute" alt="" style={{
                    transform: `scale(1.12) translateY(-${top / 5}px)`
                }} />
            </div>
        </div>
    )
}