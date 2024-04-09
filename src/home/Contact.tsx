import { useState } from 'react';

export const Contact = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [bodytext, setBodyText] = useState("");
    const email = "hello@blockchainforgood.xyz"

    return (
        <div id="contact" className="items-start justify-between gap-6 inline-flex w-full md:w-content m-auto flex-wrap px-4 md:px-0">
            <div className="flex-col justify-start items-start gap-2 md:gap-8 inline-flex">
                <div className="flex-col justify-start items-start flex">
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-text text-[32px] font-bold font-['Inter'] leading-[41.60px]">Contact Us</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">Join us to drive meaningful change together</div>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start flex">
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Chat with us</div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <a className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal" href={`mailto:${email}`} rel="noopener noreferrer">{email}</a>
                    </div>
                </div>
                <div className="self-stretch h-6 flex-col justify-start items-start flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-pointer" onClick={() => {
                        window.open("https://twitter.com/chainforgood", "_blank")
                    }}>
                        <rect width="24" height="24" transform="translate(0 0.000976562)" fill="#283344" />
                        <path d="M13.143 11.0827L17.6107 6.00098H16.5522L12.6711 10.4124L9.5735 6.00098H6L10.6852 12.6725L6 18.001H7.05857L11.1546 13.3412L14.4265 18.001H18L13.143 11.0827ZM11.6926 12.731L11.2172 12.0663L7.44032 6.78186H9.06651L12.1155 11.0482L12.5889 11.7129L16.5517 17.2581H14.9255L11.6926 12.731Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="w-[604px] p-6 bg-white shadow flex-col justify-start items-start gap-4 inline-flex z-20">
                <div className="self-stretch h-6 flex-col justify-start items-start flex">
                    <div className="self-stretch justify-center items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">Send Message</div>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    {/* <div className="self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">Name*</div>
                        </div>
                        <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
                            <input maxLength={100} className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none" placeholder='Please input' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                    </div> */}
                    <div className="self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">Subject*</div>
                        </div>
                        <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
                            <input maxLength={100} className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none" placeholder='Please input' value={subject} onChange={(e) => {
                                setSubject(e.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch justify-center items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">Message*</div>
                        </div>
                        <div className="self-stretch h-20 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
                            <textarea maxLength={1000} cols={4} className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none" placeholder='Please input' value={bodytext} onChange={(e) => {
                                setBodyText(e.target.value)
                            }} />
                        </div>
                    </div>
                </div>
                <a className="w-[87px] h-8 px-6 border border-text justify-center items-center gap-2.5 inline-flex hover:border-text hover:bg-text group cursor-pointer" href={`mailto:${email}?name=${name}&subject=${subject}&body=${bodytext}`} rel="noopener noreferrer">
                    <div className="text-center text-text text-sm font-medium font-['Inter'] leading-[14px] group-hover:text-white">Send</div>
                </a>
            </div>
        </div>
    )
}