"use client";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { trackSensors } from "@/lib/sensors";
import { cn } from "@/lib";
import { LogoSvg } from "./LogoSvg";
import { useRef } from "react";

export const Footer = () => {
  const pathname = usePathname();

  const shouldHidden = pathname?.startsWith(ROUTER_PATH.FORM.ROOT);
  if (shouldHidden) {
    return null;
  }

  const isIncubationPage = pathname === ROUTER_PATH.INCUBATION;

  const iconSvgFillColor = isIncubationPage ? "#7D8CA3" : "black";

  const logoSvgRef = useRef<SVGSVGElement>(null);
  const onDownloadLogo = () => {
    var svgElement = logoSvgRef.current!;

    // 创建一个Blob对象
    var svgData = new XMLSerializer().serializeToString(svgElement);
    var blob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    // 创建一个URL对象
    var url = URL.createObjectURL(blob);

    // 创建一个a标签并设置下载属性
    var a = document.createElement("a");
    a.href = url;
    a.download = "blockchainforgood.svg";

    // 触发点击事件
    a.click();

    // 释放URL对象
    URL.revokeObjectURL(url);
  };
  return (
    <footer
      className={cn(
        "w-full h-[197px] py-8 bg-zinc-300 flex justify-center items-center",
        isIncubationPage && "bg-incubation"
      )}
    >
      <div className="w-full md:w-content flex-col justify-start items-start gap-8 inline-flex px-4 md:px-0">
        <div className="flex-col justify-start items-start gap-4 flex w-full">
          <LogoSvg
            ref={logoSvgRef}
            style={{
              transform: "translateX(35%) scale(1.7)",
            }}
            className="scale-[1.7] translate-x-2"
            fill={iconSvgFillColor}
          />
          <div
            className={cn(
              "justify-center items-center gap-2 inline-flex cursor-pointer"
            )}
            onClick={() => {
              // window.open(
              //   "https://drive.google.com/drive/folders/1YbdwZWnbVCwsUN_YKq9XiZlhOPeJDCpw",
              //   "_blank"
              // );
              onDownloadLogo();

              trackSensors("ButtonClicked", {
                buttonName: `Media Kit Button`,
              });
            }}
          >
            <h3
              className={cn(
                "text-black text-base font-bold font-['Inter'] leading-normal cursor-pointer",
                isIncubationPage && "text-description"
              )}
            >
              Media Kit
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[604px] justify-center items-center gap-2 inline-flex">
          <p
            className={cn(
              "grow shrink basis-0 text-text text-xs font-normal font-['Inter'] leading-[18px]",
              isIncubationPage && "text-description"
            )}
          >
            © 2024 Blockchain For Good Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
