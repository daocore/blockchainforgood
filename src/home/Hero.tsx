import HeroImg from '../assets/HeroImage.png'
import HeroImageRubixcubewText from '../assets/HeroImage-RubixcubewText.png'

export const Hero = () => {
    return (
        <div className="w-content m-auto">
            <div className="justify-center items-center inline-flex">
                <div className="w-[499px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch h-[211px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[82px] font-extrabold font-['Inter'] leading-[82px]">Blockchain<br />for Good</div>
                        <div className="self-stretch text-slate-800 text-[26px] font-normal font-['Inter'] leading-loose">Your Key to Web3</div>
                    </div>
                    <div className="px-6 py-3 justify-center transform items-center inline-flex button cursor-pointer">
                        Join Us
                    </div>
                </div>
                <div className="w-[837px] h-[588px] relative">
                    <div className="w-[905.50px] h-[588.17px] left-[-32px] top-0 absolute">
                        <div className="w-[282.88px] h-[282.88px] left-[266.13px] top-[171.54px] absolute bg-white rounded-full blur-[150px]" />
                        <div className="w-[282.88px] h-[282.88px] left-[266.13px] top-[171.54px] absolute bg-white rounded-full blur-[100px]" />
                        <img className="w-[905.50px] h-[588.17px] left-0 top-0 absolute" src={HeroImg} />
                    </div>
                </div>
            </div>
            <div className="w-[1232px] h-[364px] relative">
                <div className="w-[604px] h-[238px] left-[628px] top-[99px] absolute flex-col justify-start items-start gap-2 inline-flex">
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
                <img className="w-[414px] h-[364px] left-0 top-0 absolute" src={HeroImageRubixcubewText} />
            </div>
        </div>
    )
}