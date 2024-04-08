import AUS from '../assets/partner/AUS Logo 1.png'
import DFINITY from '../assets/partner/DFINITY Logo.png'
import Harvard from '../assets/partner/Harvard Blockchain Logo.png'
import moledao from '../assets/partner/moledao Logo (H) 1.png'
import BybitWeb3 from '../assets/partner/Bybit Web3.png'
import CoinEasy from '../assets/partner/CoinEasy Logo 1.png'
import solanaVerticalLogo from '../assets/partner/solanaVerticalLogo.png'
import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// 导入 Splide 的样式文件（根据你的项目配置可能会有所不同）
import '@splidejs/splide/css';
import { isMobile } from '../helpers'

const logos = [{
    src: BybitWeb3,
    alt: "Bybit Web3",
    width: "134px",
    height: "24px",
    href: "https://moledao.io"
},
{
    src: moledao,
    alt: "moledao",
    width: "128px",
    height: "26px",
    href: "https://moledao.io"
},
{
    src: Harvard,
    alt: "Harvard",
    width: "152px",
    height: "38px",
    href: "https://moledao.io"
},
{
    src: solanaVerticalLogo,
    alt: "solanaVerticalLogo",
    width: "90px",
    height: "38px",
    href: "https://moledao.io"
},
{
    src: DFINITY,
    alt: "DFINITY",
    width: "98.5px",
    height: "56px",
    href: "https://moledao.io"
},
{
    src: AUS,
    alt: "AUS",
    width: "193px",
    height: "22px",
    href: "https://moledao.io"
},
{
    src: CoinEasy,
    alt: "CoinEasy",
    width: "103.7px",
    height: "17px",
    href: "https://moledao.io"
}]

export const Partner = () => {
    const ref = useRef<any>();

    useEffect(() => {
        if (ref.current) return
        const mobile = isMobile();
        ref.current = new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: mobile ? 2 : 6,
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 0.5,
            },
        }).mount({ AutoScroll });
    }, []); // 通过空数组作为依赖项，确保只在组件挂载时执行一次初始化

    return (
        <section className="splide" aria-label="Splide Basic HTML Example">
            <div className="splide__track bg-white py-4">
                <ul className="splide__list">
                    {logos.map((logo, index) => (
                        <li className={`splide__slide flex justify-center items-center`}>
                            <a key={index} href={logo.href} target="_blank">
                                <img className={`w-[${logo.width}] h-[${logo.height}]`} src={logo.src} alt={logo.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}