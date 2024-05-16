import sensors from 'sa-sdk-javascript'
import Graphics from '../assets/Graphics.png'
import { ApplyLink } from '../components/Const'
import { JoinUs } from './Hero'

const list = [
    {
        title: "Express Your Interest",
        description: "Submit the form in the button below. We’re excited to hear from organizations curious about leveraging blockchain for social good"
    },
    {
        title: "Let’s Chat",
        description: "We’ll schedule a call to explore how your organization can contribute to the alliance and discuss the resources you might need. This is an opportunity for us to learn about your goals and how we can support them"
    },
    {
        title: "Join the Adventure",
        description: "Once we’ve identified how you can best engage with the alliance, we’ll guide you through the application process. From there, you’ll embark on an exciting journey of collaboration, innovation, and positive impact with like-minded organizations"
    }
]

export const HowJoin = () => {

    return (
        <div className="w-full md:w-content px-4 md:px-0 justify-between md:items-center inline-flex flex-col-reverse md:flex-row flex-wrap gap-4 md:gap-0">
            <div className="w-full md:w-[709px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch flex-col justify-center md:justify-start items-start gap-2 flex">
                    <div className="self-stretch md:h-[74px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <h3 className="grow shrink basis-0 text-text text-[32px] font-bold font-['Inter'] leading-[41.60px]">How to Begin Your Journey </h3>
                        </div>
                        <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                            <p className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">Join us on our mission to harness the power of blockchain for positive change</p>
                        </div>
                    </div>
                    <div className="self-stretch  w-full md:w-[476px] flex-col justify-start items-start gap-4 md:gap-3 flex">
                        {
                            list?.map((item, index) => {
                                return (
                                    <div key={index} className="justify-start items-start gap-3 inline-flex">
                                        <div className="bg-cyan-500 mt-[6px]" style={{ minHeight: 11, minWidth: 11 }} />
                                        <div>
                                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                                <h4 className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal">{item?.title}</h4>
                                            </div>
                                            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                                <p className="grow shrink basis-0 text-[#576172] text-base font-normal font-['Inter'] leading-normal">{item?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex gap-4'>
                    <JoinUs text="Apply Now (Organizational Channel)" link="https://www.moledao.io/#/form/project/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=blockchainforgood.xyz" />
                    <JoinUs text="Apply Now (Personal Channel)" link="https://www.moledao.io/#/form/individual/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=blockchainforgood.xyz" />
                </div>
            </div>
            <img className="w-[174px] md:w-[441px] md:h-[604px]" src={Graphics} />
        </div>
    )
}