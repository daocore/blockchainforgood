"use client";
import BlockchainForGoodLogo from "@/assets/Blockchain For Good Logo Black.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { trackSensors } from "@/lib/sensors";

export const Footer = () => {
  const pathname = usePathname();

  const shouldHidden = pathname?.startsWith(ROUTER_PATH.FORM.ROOT);
  if (shouldHidden) {
    return null;
  }

  return (
    <footer className="w-full h-[197px] py-8 bg-zinc-300 flex justify-center items-center mt-4">
      <div className="w-full md:w-content flex-col justify-start items-start gap-8 inline-flex px-4 md:px-0">
        <div className="flex-col justify-start items-start gap-4 flex w-full">
          <Image
            className="w-[159px] h-[42.91px]"
            src={BlockchainForGoodLogo}
            alt="Blockchain For Good Logo Black"
          />
          <div
            className="justify-center items-center gap-2 inline-flex cursor-pointer"
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1YbdwZWnbVCwsUN_YKq9XiZlhOPeJDCpw",
                "_blank"
              );
              trackSensors("ButtonClicked", {
                buttonName: `Media Kit Button`,
              });
            }}
          >
            <h3 className="text-black text-base font-bold font-['Inter'] leading-normal">
              Media Kit
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[604px] justify-center items-center gap-2 inline-flex">
          <p className="grow shrink basis-0 text-text text-xs font-normal font-['Inter'] leading-[18px]">
            © 2024 Blockchain For Good Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
