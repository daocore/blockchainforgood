import { useRef, useState } from "react";
import mov from "../assets/IMG_7431.mov"
import WhatsApp from "../assets/WhatsApp Video 2024-04-02 at 18.40.22.mp4"

interface IVideo {
    src: string;
    width: string;
    title: string;
    from?: string;
    name?: string;
}

const videos: IVideo[] = [
    {
        src: mov,
        width: "280px",
        title: "‘That makes a community stronger’",
        from: "FFF",
        name: "XXX"
    },
    {
        src: WhatsApp,
        width: "342px",
        title: "‘That makes a community stronger’",
        from: "MMM",
        name: "XXX"
    }
];

const MyVideo = ({ video }: { video: IVideo }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // 播放/暂停切换
    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className="relative " style={{ width: video?.width, height: "100%" }}>
            <video width={video.width} className="absolute top-0" ref={videoRef}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && <><div className="absolute left-4 top-4 right-4 z-20">
                {video?.title}
            </div>
                <div className="absolute w-full h-full z-10 top-0 bg-opacity-0 hover:bg-opacity-30 bg-black flex justify-center items-center">
                    {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="cursor-pointer" onClick={togglePlay}>
                        <g opacity="0.75">
                            <path d="M6 5.89355V38.0897C6 41.208 9.46904 43.079 12.0416 41.325L36.2084 25.2269C38.5081 23.6677 38.5081 20.2766 36.2084 18.7564L12.0416 2.65826C9.46904 0.94321 6 2.77527 6 5.89355Z" fill="white" />
                        </g>
                    </svg>}
                </div>
                <div className="absolute bottom-10 left-4 right-4 z-20 font-bold font-['Inter']">{video?.name}</div>
                <div className="absolute bottom-4 left-4 right-4 z-20 text-xs">{video?.from}</div></>}
        </div>
    )
}

export const Videos = () => {
    return <div className="hidden md:flex items-center justify-center gap-4 w-full md:w-content m-auto mb-16 h-[498px]">
        {videos.map((video, index) => {
            return <MyVideo key={index} video={video} />
        })}
    </div>
}