import Image from "next/image";
import HeroImage from "@/assets/incubation/hero.png";
import { ROUTER_PATH } from "@/constants";
import { JoinUs } from "@/components/JoinUs";

export function Hero() {
  return (
    <div className="w-full md:w-content mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-8 w-auto md:w-[600px] px-4">
        <div>
          <h1 className="text-white text-3xl sm:text-5xl">
            BGA Incubation
            <br className="hidden md:inline" />
            Programme
          </h1>
          <p className="text-description mt-2">
            BGA Incubation aims to support projects that use blockchain
            technology to solve real-world problems by providing expertise,
            resources, branding, and market support.
          </p>
        </div>
        <JoinUs
          className="max-sm:w-full xs:w-[308px] md:w-[308px]"
          text="Apply for the Incubation Program"
          link={ROUTER_PATH.FORM.INCUBATION}
        />
      </div>
      <Image
        src={HeroImage}
        alt="Hero"
        className="mx-auto"
        width={419}
        height={506}
      />
    </div>
  );
}
