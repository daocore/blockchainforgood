import Image from "next/image";
import BGImage from "@/assets/joint-fund/detail-bg.png";
import CalendarCheckImage from "@/assets/joint-fund/calendar-check.png";
import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <div className="relative">
      <Image
        src={BGImage}
        alt="Hero"
        className="w-full h-full max-h-[75vh] object-cover"
      />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <>
      <div className="absolute inset-0 z-10">
        <div className="max-w-desktop mx-auto p-4 md:p-10 h-full flex gap-4">
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div className="space-y-5">
              <h1 className="text-[80px] font-bold leading-[1.1]">
                The UNDP BGA Joint Fund.
              </h1>
              <Button className="bg-black text-white rounded-none py-4 px-8 text-[28px] leading-normal font-semibold h-auto">
                Registration
              </Button>
            </div>
            <div className="hidden md:flex md:items-center md:gap-2 text-2xl font-bold text-white">
              <Image
                src={CalendarCheckImage}
                alt="Calendar"
                className="w-7 h-7"
                width={28}
                height={28}
              />
              Dec 2nd, 2024
            </div>
          </div>
          <div className="hidden md:flex md:items-end md:w-1/2">
            <div className="p-10 bg-black/40 translate-x-10 translate-y-10">
              <p className="text-white text-2xl">
                The purpose of this collaboration is to leverage blockchain
                technology to address global challenges aligned with the United
                Nations’ 17 Sustainable Development Goals (SDGs), which is also
                what the BGA ethos is inspired by. Through joint efforts in
                global hackathons, incubation programs, and strategic events,
                BGA and UNDP aim to foster innovation, empower ecosystems, and
                drive sustainable impact globally.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-description py-5 px-4 block md:hidden">
        The purpose of this collaboration is to leverage blockchain technology
        to address global challenges aligned with the United Nations’ 17
        Sustainable Development Goals (SDGs), which is also what the BGA ethos
        is inspired by. Through joint efforts in global hackathons, incubation
        programs, and strategic events, BGA and UNDP aim to foster innovation,
        empower ecosystems, and drive sustainable impact globally.
      </p>
    </>
  );
}
