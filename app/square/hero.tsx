import HeroMobile from "@/assets/square/hero-mobile.webp";
import HeroDesktop from "@/assets/square/hero-desktop.webp";
import Image from "next/image";

export function Hero() {
  return (
    <div className="block md:flex md:justify-between">
      <div className="flex flex-col justify-center items-center md:items-start gap-2 my-4 md:my-0">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          BGA Square
        </h1>
        <p className="text-description text-base text-center md:text-left">
          Explore the Unity and Innovation at BGA Square – Your Hub for
          Collaborative Solutions, Practicing Blockchain for Good to Tackle
          Society's Pressing Challenges.
        </p>
      </div>
      <div>
        <Image className="block md:hidden w-full" src={HeroMobile} alt="Hero" />
        <Image
          className="hidden md:block"
          src={HeroDesktop}
          alt="Hero"
          width={759}
          height={468}
        />
      </div>
    </div>
  );
}
