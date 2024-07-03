import Image from "next/image";
import GraphicBaseImage from "@/assets/incubation/graphic-base.png";
import Blink1Image from "@/assets/incubation/Blink (1).png";
import Blink2Image from "@/assets/incubation/Blink (2).png";
import Blink3Image from "@/assets/incubation/Blink.png";
import HandsImage from "@/assets/incubation/Hands.png";
import ShipImage from "@/assets/incubation/BGA Incubation Hero Ship.png";
import { ROUTER_PATH } from "@/constants";
import { JoinUs } from "@/components/JoinUs";

export function Hero() {
  return (
    <div className="w-full md:w-content mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-8 w-auto md:w-[600px] px-4">
        <div>
          <h1 className="text-white text-3xl sm:text-5xl font-bold">
            BGA Incubation
            <br className="hidden md:inline" />
            Programme
          </h1>
          <p className="text-description mt-2">
            The BGA Incubation Program aims to support projects leveraging
            blockchain technology to solve real-world problems by offering
            expertise, resources, branding, and market support.
          </p>
        </div>
        <JoinUs
          className="max-sm:w-full xs:w-[308px] md:w-[308px]"
          text="Apply for the Incubation Program"
          link={ROUTER_PATH.FORM.INCUBATION}
        />
      </div>
      <HeroImageWrap />
      {/* <Image
        src={HeroImage}
        alt="Hero"
        className="mx-auto"
        width={419}
        height={506}
      /> */}
    </div>
  );
}

function HeroImageWrap() {
  return (
    <div
      className="relative mx-auto md:mx-0 flex flex-col justify-end"
      style={{
        width: "419px",
        height: "506px",
      }}
    >
      <Image
        className="absolute inset-0"
        priority
        src={GraphicBaseImage}
        alt="base"
      />
      {/* 小的blink,右边 */}
      <Image
        className="absolute top-[13%] right-[5%] w-[17px] h-[17px] animate-twinkle"
        priority
        src={Blink1Image}
        alt="blink1"
      />
      {/* 大的blink,右边 */}
      <Image
        className="absolute top-0 right-0 w-[35px] h-[35px] animate-twinkle"
        priority
        src={Blink2Image}
        alt="blink2"
      />
      {/* 中等的blink,左边 */}
      <Image
        className="absolute top-[30%] left-0 w-[25px] h-[25px] animate-twinkle"
        priority
        src={Blink3Image}
        alt="blink3"
      />
      <Image
        className="w-[90%] mx-auto relative top-[10%] animate-floatY z-10"
        priority
        src={ShipImage}
        alt="ship"
      />
      <Image
        className="w-[57%] mx-auto -translate-x-14"
        priority
        src={HandsImage}
        alt="hands"
      />
    </div>
  );
}
