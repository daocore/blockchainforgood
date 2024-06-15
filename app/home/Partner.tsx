import AUS from "@/assets/partner/AUS Logo 1.png";
import DFINITY from "@/assets/partner/AE _ full color blck.png";
import Harvard from "@/assets/partner/Harvard Blockchain Logo.png";
import moledao from "@/assets/partner/moledao Logo (H) 1.png";
import BybitWeb3 from "@/assets/partner/Bybit Web3.png";
import CoinEasy from "@/assets/partner/CoinEasy Logo 1.png";
import solanaVerticalLogo from "@/assets/partner/solanaVerticalLogo.png";
import Aptos_Primary_BLK from "@/assets/partner/Aptos_Primary_BLK.png";
import BZD from "@/assets/partner/BZD.jpeg";
import Edu3Labs from "@/assets/partner/Edu3Labs.jpeg";
import Libera_logo_new_3a from "@/assets/partner/Libera_logo_new_3a.png";
import XueDAO from "@/assets/partner/XueDAO logo 去背.png";
import Alchemy from "@/assets/partner/Alchemy Pay Logo Horizontal_Black.svg";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// 导入 Splide 的样式文件（根据你的项目配置可能会有所不同）
import "@splidejs/splide/css";
import Image from "next/image";
import { useIsMobile } from "@/hooks";
import { trackSensors } from "@/lib/sensors";

const logos = [
  {
    src: BybitWeb3,
    alt: "Bybit Web3",
    width: "134px",
    height: "24px",
    href: "https://www.bybit.com/en/web3/home",
  },
  {
    src: moledao,
    alt: "moledao",
    width: "128px",
    height: "26px",
    href: "https://moledao.io",
  },
  {
    src: Harvard,
    alt: "Harvard",
    width: "152px",
    height: "38px",
    href: "https://harvardblockchainclub.com/",
  },
  {
    src: solanaVerticalLogo,
    alt: "solana",
    width: "90px",
    height: "38px",
    href: "https://solana.com/",
  },
  {
    src: DFINITY,
    alt: "DFINITY",
    width: "160px",
    height: "30px",
    href: "http://internetcomputer.org/",
  },
  {
    src: CoinEasy,
    alt: "CoinEasy",
    width: "103.7px",
    height: "17px",
    href: "https://www.coineasy.xyz/",
  },
  {
    src: AUS,
    alt: "AUS",
    width: "193px",
    height: "22px",
    href: "https://www.aus.edu/",
  },
  {
    src: Aptos_Primary_BLK,
    alt: "Aptos",
    width: "90px",
    height: "22px",
    href: "https://aptosfoundation.org/",
  },
  {
    src: BZD,
    alt: "BZD",
    width: "60px",
    height: "60px",
    href: "https://www.buzhidao.tw/",
  },
  {
    src: Edu3Labs,
    alt: "Edu3Labs",
    width: "120px",
    height: "60px",
    href: "https://edu3labs.com/",
  },
  {
    src: Libera_logo_new_3a,
    alt: "Libera",
    width: "60px",
    height: "60px",
    href: "https://liberaglobal.ai/",
  },
  {
    src: XueDAO,
    alt: "XueDAO",
    width: "120px",
    height: "60px",
    href: "",
  },
  {
    src: Alchemy,
    alt: "Alchemy",
    width: "200px",
    height: "100px",
    href: "https://www.alchemypay.org",
  },
];

export const Partner = () => {
  const ref = useRef<any>();

  const mobile = useIsMobile();

  useEffect(() => {
    if (ref.current) return;
    ref.current = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: mobile ? 2 : 7,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
      },
    }).mount({ AutoScroll });
  }, [mobile]); // 通过空数组作为依赖项，确保只在组件挂载时执行一次初始化

  return (
    <section className="splide" aria-label="Splide Basic HTML Example">
      <div className="splide__track">
        <ul className="splide__list" style={{ height: 88 }}>
          {logos.map((logo, index) => (
            <a
              key={index}
              className={`splide__slide flex justify-center items-center bg-white mx-1 px-1 cursor-pointer`}
              style={{
                width: `${logo.width}`,
                maxWidth: "50vw",
                minHeight: 88,
                margin: "auto 4px"
              }}
              target="_blank"
              href={logo.href}
              onClick={() => {
                trackSensors("ButtonClicked", {
                  buttonName: `Partner ${logo.alt} Logo Button`,
                });
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: `${logo.width}`,
                  height: `${logo.height}`,
                }}
              />
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};
