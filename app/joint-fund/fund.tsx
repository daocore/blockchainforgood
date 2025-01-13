import CoinImage from "@/assets/joint-fund/coin.png";
import Image from "next/image";

export function Fund() {
  return (
    <div className="w-full text-white pb-32">
      <Total />
      <div className="flex flex-col md:flex-row">
        <People />
        <Projects />
      </div>
      <Coin />
    </div>
  );
}

const FUND_TITLE_CLASS =
  "text-[28px] leading-[1.1] py-20 overflow-hidden relative after:content-[''] after:absolute after:top-1/2 after:translate-x-2 after:w-1/2 after:h-[1px] after:bg-white before:content-[''] before:absolute before:top-1/2 before:-translate-x-[calc(100%+0.5rem)] before:w-1/2 before:h-[1px] before:bg-white";

function Total() {
  return (
    <div className="w-full text-center font-bold">
      <h3 className={FUND_TITLE_CLASS}>Total Fund</h3>
      <p className="text-[120px] leading-[1.1]">$999,999.99</p>
    </div>
  );
}

function People() {
  return (
    <div className="w-full text-center font-bold">
      <h3 className={FUND_TITLE_CLASS}>People</h3>
      <p className="text-[100px] leading-[1.1]">100</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="w-full text-center font-bold">
      <h3 className={FUND_TITLE_CLASS}>Projects</h3>
      <p className="text-[100px] leading-[1.1]">100</p>
    </div>
  );
}

function Coin() {
  return (
    <div className="w-full pt-16 md:pt-0 relative before:content-[''] before:absolute before:left-1/2 before:top-0 md:before:-top-[calc((14+100)*1.1px+5rem)] before:w-[1px] before:h-16 md:before:h-[calc((14+100)*1.1px+5rem)] before:bg-white">
      <Image
        src={CoinImage}
        alt="Coin"
        className="mx-auto border-4 border-bgaActive border-solid rounded-full"
      />
    </div>
  );
}
