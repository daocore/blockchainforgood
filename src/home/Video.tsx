import { RefObject, useRef, useState } from "react";
import { isMobile } from "../helpers";
import YH from "../assets/video/2_YH.mp4";
import Jennifer from "../assets/video/3_Jennifer_Co_founder_of_XueDAO.mp4";
import Jaden from "../assets/video/4_Jaden_Co_founder_of_Coineasy.mp4";
import Saed from "../assets/video/5_Saed_Co_founder_of_ICPHub_UAE.mp4";
import Max from "../assets/video/6_Max_Ward_CEO_of_Libera.mp4";
import Helen from "../assets/video/7_Helen_COO_of_Bybit.mp4";
import Jason from "../assets/video/1_Jason_Dou_Harvard_Blockchain_Club.mp4";
import Kaskyrbek from "../assets/video/1_Aidana_Kaskyrbek_Founder_of_Hayya_Venture_Studio.webm";
import Kaskyrbekmb from "../assets/video/1_Aidana_Kaskyrbek_Founder_of_Hayya_Venture_Studio.mp4";
import BGAmb from "../assets/video/BGA3.mp4";
import BGA from "../assets/video/BGA3.webm";
import SOLANA from "../assets/video/8_solana_lilyliu.mp4";
import SOLANAmb from "../assets/video/8_solana_lilyliu.webm";
import posterYH from '../assets/video/YH.webp'
import solana from '../assets/video/solana.jpeg'
import posterHelen from '../assets/video/Helen.jpg'
import posterJaden from '../assets/video/Jaden.webp'
import posterJennifer from '../assets/video/Jennifer.webp'
import posterMax from '../assets/video/Max.webp'
import posterSaed from '../assets/video/Saed.webp'
import posterKaskyrbek from '../assets/video/Kaskyrbek.webp'
import posterJasonDou from '../assets/video/JasonDou.jpeg'
import posterBGA from '../assets/video/BGA.jpg'
import { ArrowImg } from "../components/Arrow";
import { CustomVideoPlayer, IVideo } from "../components/Video";
import playicon from "../assets/play.svg"

const videos: IVideo[] = [
    {
        src: BGA,
        srcmb: BGAmb,
        poster: posterBGA,
        format: "video/webm",
    },
    {
        src: Helen,
        from: "COO of Bybit",
        name: "Helen",
        poster: posterHelen
    },
    {
        src: Kaskyrbek,
        srcmb: Kaskyrbekmb,
        from: "Founder of Hayya Venture Studio",
        name: "Aidana Kaskyrbek",
        poster: posterKaskyrbek,
        format: "video/webm",
    },
    {
        src: Jason,
        from: "Harvard Blockchain",
        name: "Jason Dou",
        poster: posterJasonDou
    },
    {
        src: Jennifer,
        from: "Co-founder of XueDAO",
        name: "Jennifer",
        poster: posterJennifer
    },
    {
        src: YH,
        from: "Web3 Lead of Moledao",
        name: "YH",
        poster: posterYH
    },
    {
        src: Saed,
        from: "Co-founder of ICP.Hub UAE",
        name: "Saed",
        poster: posterSaed
    },
    {
        src: Max,
        from: "CEO of Libera",
        name: "Max",
        poster: posterMax
    },
    {
        src: Jaden,
        from: "Co-founder of Coineasy",
        name: "Jaden",
        poster: posterJaden
    },
    {
        src: SOLANA,
        srcmb: SOLANAmb,
        from: "President at Solana foundation",
        name: "Lily Liu",
        poster: solana,
        format: "video/webm",
    },
];

export const Videos = () => {
    const ref = useRef<any>();
    const mobile = isMobile();
    let timer: any;

    const [currentTab, setTab] = useState(0);

    const move = (ref: RefObject<HTMLDivElement>, data: any[], timer: any, right?: boolean) => {
        const dom = ref?.current;
        if (!dom) return
        const width = dom.scrollWidth / data?.length;
        let offset = 0;
        if (right) {
            offset = (dom.scrollWidth - dom.scrollLeft - dom.offsetWidth) % width;
        } else {
            offset = dom.scrollLeft % width;
        }
        offset = Math.abs(offset) < 5 ? width : offset;

        let left = dom.scrollLeft + offset * (right ? 1 : -1);
        if (dom.offsetWidth + left >= dom.scrollWidth) {
            left = dom.scrollWidth - dom.offsetWidth;
            setTab(videos?.length - 1)
        }
        if (left <= 0) {
            left = 0;
            setTab(0)
        }
        let scrollLeft = dom.scrollLeft;
        clearInterval(timer);

        timer = setInterval(() => {
            scrollLeft = scrollLeft + 20 * (right ? 1 : -1)
            dom.scrollLeft = scrollLeft;
            if ((right && scrollLeft >= left) || (!right && scrollLeft <= left)) {
                dom.scrollLeft = left;
                clearInterval(timer);
            }
        }, 16);
    };

    const videoStyle = {
        width: mobile ? "88vw" : 400,
        height: mobile ? `${88 / 16 * 9}vw` : 225
    }

    return (
        <div className="relative px-4 md:px-0">
            <div className="w-full md:w-content m-auto mt-10 mb-16 z-30 relative overflow-x-scroll" ref={ref} style={{
                height: mobile ? `calc(${videos?.length * 88 / 16 * 9}vw + ${videos?.length * 15 - 15}px)` : 225
            }}>
                <div className="flex items-center m-auto gap-[15px] flex-wrap md:flex-nowrap" style={{
                    width: isMobile() ? `calc(88vw)` : videos?.length * (400 + 15) - 15
                }}>
                    {videos.map((video, index) => {
                        const { src, poster, width, from, name, srcmb } = video;

                        return (
                            <CustomVideoPlayer key={index} src={mobile && srcmb ? srcmb : src} poster={poster} width={width} from={from} name={name} style={videoStyle} >
                                {({ enter, isPlaying, togglePlayback }) => {
                                    return (
                                        <>
                                            <div className="absolute top-0 left-0 right-0 z-20 pt-3 px-4">
                                                <div className="font-bold font-['Inter']">{video?.name}</div>
                                                <div className="text-xs">{video?.from}</div>
                                            </div>
                                            <div className={`absolute w-full h-full z-10 top-0 ${enter ? "bg-videoHover" : "bg-video"} md:flex justify-center items-center hidden`}>
                                                {!isPlaying && <img src={playicon} alt="" className="w-[80px] h-[80px] cursor-pointer z-20" onClick={togglePlayback} />}
                                            </div>
                                        </>
                                    )
                                }}
                            </CustomVideoPlayer>
                        )
                    })}
                </div>
            </div>
            {!mobile && <><div className="absolute -left-16 top-[92.5px] rounded-full bg-white">
                <ArrowImg
                    css={`w-10 h-10 p-3  rounded-full bg-gray-300 bg-opacity-25 scale-175 rotate-180 cursor-pointer`}
                    color={"#283344"}
                    handle={() => {
                        if (currentTab !== 0) {
                            move(ref, videos, timer);
                        }
                    }}
                />
            </div>
                <div className="absolute -right-16 top-[92.5px] rounded-full bg-white">
                    <ArrowImg
                        css={`w-10 h-10 p-3 rounded-full bg-gray-300 bg-opacity-25 scale-175 rotate-9 cursor-pointer`}
                        color={"#283344"}
                        handle={() => {
                            if (currentTab !== videos?.length - 1) {
                                move(ref, videos, timer, true);
                            }
                        }}
                    />
                </div></>}
        </div>
    )
}