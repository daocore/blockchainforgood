import HeroImg from '../assets/HeroImage.png'
import HeroImageRubixcubewText from '../assets/HeroImage-RubixcubewText.png'

export const Hero = () => {
    return (
        <div className="w-content m-auto mt-16">
            <div className="items-center justify-between inline-flex w-full">
                <div className="w-[499px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[211px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[82px] font-extrabold font-['Inter'] leading-[82px]">Blockchain<br />for Good</div>
                        <div className="self-stretch text-slate-800 text-[26px] font-normal font-['Inter'] leading-loose">Your Key to Web3</div>
                    </div>
                    <div className="px-6 py-3 justify-center transform items-center inline-flex button cursor-pointer">
                        Join Us
                    </div>
                </div>
                <img className="w-[760px] h-[494px] -mr-[80px]" src={HeroImg} />
            </div>
            <div className="flex justify-between items-center pb-10">
                <img className="w-[414px] h-[364px] ml-10" src={HeroImageRubixcubewText} />
                <div className="w-[604px] h-[238px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px]">Care. Create. Change.</div>
                        </div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0"></div>
                        </div>
                    </div>
                    <div className="self-stretch justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 text-slate-600 text-base font-normal font-['Inter'] leading-normal">At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.<br />Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}