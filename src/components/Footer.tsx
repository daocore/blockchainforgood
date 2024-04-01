import BlockchainForGoodLogo from '../assets/Blockchain For Good Logo Black.png'

export const Footer = () => {
    return (
        <div className="w-full h-[197px] bg-zinc-300 flex justify-center items-center -mt-[60px]" >
            <div className="w-content h-[196.91px] py-8 flex-col justify-start items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <img className="w-[159px] h-[42.91px]" src={BlockchainForGoodLogo} />
                    <div className="justify-center items-center gap-2 inline-flex">
                        <div className="text-black text-base font-bold font-['Inter'] leading-normal">Media Kit</div>
                    </div>
                </div>
                <div className="w-[604px] justify-center items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-slate-800 text-xs font-normal font-['Inter'] leading-[18px]">© 2024 Blockchain For Good Alliance. All rights reserved.</div>
                </div>
            </div>
        </div>

    )
}