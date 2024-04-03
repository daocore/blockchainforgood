import HeroImg from '../assets/HeroImage.png'
import HeroImageRubixcubewText from '../assets/HeroImage-RubixcubewText.png'
import { RowSpace } from '.'
import { ApplyLink } from '../components/Const'

export const Hero = () => {
    return (
        <div className="w-full md:w-content m-auto mt-16 p-4 md:p-0">
            <div className="items-center justify-between inline-flex w-full flex-wrap">
                <div className="w-full md:w-[499px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch md:h-[211px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[48px] md:text-[82px] font-extrabold font-['Inter'] leading-[48px] md:leading-[82px]">Blockchain<br />for Good</div>
                        <div className="self-stretch text-text text-xl md:text-[26px] font-normal font-['Inter'] leading-loose">Your Key to Web3</div>
                    </div>
                    <div className="w-full md:w-auto px-6 py-3 justify-center transform items-center inline-flex button cursor-pointer" onClick={() => {
                        window.open(ApplyLink, "_blank")
                    }}>
                        Join Us
                    </div>
                </div>
                <img className="w-full h-[260px] md:w-[760px] md:h-[494px] mr-0 md:-mr-[80px] mt-10 md:mt-0" src={HeroImg} />
            </div>
            <div className="flex justify-center md:justify-between items-center pb-10 flex-wrap mt-10 md:mt-0">
                <img className="w-[300px] md:w-[414px] h-auto md:h-[364px] ml-0 md:ml-10 mb-10 md:mb-0" src={HeroImageRubixcubewText} />
                <div className="w-full md:w-[604px] h-[238px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch md:h-[78px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[24px] md:text-[32px] font-bold font-['Inter'] leading-[41.60px]">Care. Create. Change.</div>
                        </div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0"></div>
                        </div>
                    </div>
                    <div className="self-stretch justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 text-[#576172] text-sm md:text-base font-normal font-['Inter'] leading-normal">At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.
                            <RowSpace />
                            Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}