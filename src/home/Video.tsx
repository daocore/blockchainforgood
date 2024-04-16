import { RefObject, useRef, useState } from "react";
import { isMobile } from "../helpers";
import posterYH from '../assets/video/YH.webp'
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
        src: "https://www.blockchainforgood.xyz/assets/BGA-C_ZSF_kF.mp4",
        poster: posterBGA
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/7%20Helen_%20COO%20of%20Bybit%20-%20Trimmed-uw0o9KdU.mp4",
        from: "COO of Bybit",
        name: "Helen",
        poster: posterHelen
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/1-Aidana-Kaskyrbek_-Founder-of-Hayya-Venture-Studio.mp4",
        from: "Founder of Hayya Venture Studio",
        name: "Aidana Kaskyrbek",
        poster: posterKaskyrbek
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/1%20Jason%20Dou_%20Harvard%20Blockchain%20Club%202%20-%20Trimmed-BNAnyvY0.mp4",
        from: "Harvard Blockchain",
        name: "Jason Dou",
        poster: posterJasonDou
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/3%20Jennifer_%20Co-founder%20of%20XueDAO%20Trimmed-BW2VtFfg.mp4",
        from: "Co-founder of XueDAO",
        name: "Jennifer",
        poster: posterJennifer
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/2%20YH%20-%20Trimmed-C827AM1R.mp4",
        from: "Web3 Lead of Moledao",
        name: "YH",
        poster: posterYH
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/5%20Saed_%20Co-founder%20of%20ICP.Hub%20UAE%20-%20Trimmed-A2OBJY6U.mp4",
        from: "Co-founder of ICP.Hub UAE",
        name: "Saed",
        poster: posterSaed
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/6%20Max%20Ward_%20CEO%20of%20Libera%20-%20Trimmed-htq7wRT3.mp4",
        from: "CEO of Libera",
        name: "Max",
        poster: posterMax
    },
    {
        src: "https://www.blockchainforgood.xyz/assets/4%20Jaden_%20Co-founder%20of%20Coineasy%20-%20Trimmed-_kf-iR04.mp4",
        from: "Co-founder of Coineasy",
        name: "Jaden",
        poster: posterJaden
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
                        const { src, poster, width, from, name } = video;

                        return (
                            <CustomVideoPlayer key={index} src={src} poster={poster} width={width} from={from} name={name} style={videoStyle} >
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