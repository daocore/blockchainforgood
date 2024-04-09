import { VideoHTMLAttributes, useEffect, useRef, useState } from "react";
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
    },
    {
        src: mov,
        width: "280px",
        title: "‘That makes a community stronger’",
        from: "FFF",
        name: "XXX"
    },
    {
        src: mov,
        width: "280px",
        title: "‘That makes a community stronger’",
        from: "FFF",
        name: "XXX"
    },
];

const MyVideo = ({ video }: { video: IVideo }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [enter, setEnter] = useState(false);

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
        <div className="relative custom-video-player" style={{ width: video?.width, height: "100%" }} onMouseEnter={() => { setEnter(true) }} onMouseLeave={() => { setEnter(false) }}>
            <video width={video.width} className="absolute top-0" controls ref={videoRef} onEnded={() => {
                setIsPlaying(false)
            }}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute w-full h-full top-0 group z-20">
                {isPlaying && <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer group-hover:block hidden" onClick={togglePlay}>
                    <rect x="10" y="8" width="8" height="28" fill="white" />
                    <rect x="26" y="8" width="8" height="28" fill="white" />
                </svg>}
            </div> */}
            <div className={`absolute w-full h-full z-10 top-0 ${enter ? "bg-videoHover" : "bg-video"} flex justify-center items-center`}>
                {isPlaying ? <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer ${enter ? "block" : "hidden"}`} onClick={togglePlay}>
                    <rect x="10" y="8" width="8" height="28" fill="white" />
                    <rect x="26" y="8" width="8" height="28" fill="white" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="cursor-pointer" onClick={togglePlay}>
                        <g opacity="0.75">
                            <path d="M6 5.89355V38.0897C6 41.208 9.46904 43.079 12.0416 41.325L36.2084 25.2269C38.5081 23.6677 38.5081 20.2766 36.2084 18.7564L12.0416 2.65826C9.46904 0.94321 6 2.77527 6 5.89355Z" fill="white" />
                        </g>
                    </svg>}
            </div>
            <div className="absolute left-0 right-0 z-20 pt-3 px-4">
                <div className="font-bold font-['Inter'] mb-1">{video?.title}</div>
                <div className="font-bold font-['Inter']">{video?.name}</div>
                <div className="text-xs">{video?.from}</div>
            </div>
        </div>
    )
}

const CustomVideoPlayer = ({ video }: { video: IVideo }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setPlaying] = useState<any>();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setMuted] = useState(false);
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleDurationChange = () => {
            setDuration(video.duration);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
        };
    }, []);

    const togglePlayback = () => {
        const video = videoRef.current;
        if (!video) return
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setPlaying(!isPlaying);
    };

    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    const handleVolumeChange = (event: any) => {
        const video = videoRef.current;
        if (!video) return
        const newVolume = parseFloat(event.target.value);
        video.volume = newVolume;
        setVolume(newVolume);
        if (newVolume === 0) {
            setMuted(true);
        } else {
            setMuted(false);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return
        if (isMuted) {
            video.volume = volume;
            setMuted(false);
        } else {
            video.volume = 0;
            setMuted(true);
        }
    };

    const calculateProgress = () => {
        if (duration > 0) {
            return (currentTime / duration) * 100;
        }
        return 0;
    };

    return (
        <div className="relative" style={{ width: video?.width, height: "100%" }} onMouseEnter={() => { setEnter(true) }} onMouseLeave={() => { setEnter(false) }}>
            <video ref={videoRef} onEnded={togglePlayback}>
                <source src={video?.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 right-0 z-20 pt-3 px-4">
                <div className="font-bold font-['Inter'] mb-1">{video?.title}</div>
                <div className="font-bold font-['Inter']">{video?.name}</div>
                <div className="text-xs">{video?.from}</div>
            </div>
            <div className={`absolute w-full h-full z-10 top-0 ${enter ? "bg-videoHover" : "bg-video"} flex justify-center items-center`}>
                {!isPlaying && <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" className="cursor-pointer" onClick={togglePlayback}>
                    <g opacity="0.75">
                        <path d="M6 5.89355V38.0897C6 41.208 9.46904 43.079 12.0416 41.325L36.2084 25.2269C38.5081 23.6677 38.5081 20.2766 36.2084 18.7564L12.0416 2.65826C9.46904 0.94321 6 2.77527 6 5.89355Z" fill="white" />
                    </g>
                </svg>}
            </div>
            {enter && isPlaying !== undefined && <div className="absolute left-4 right-4 bottom-3 z-20">
                <div style={{
                    height: '4px',
                    background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${calculateProgress()}%, rgba(255, 255, 255, 0.35) ${calculateProgress()}%, rgba(255, 255, 255, 0.35) 100%)`,
                }}>

                </div>
                <div className="flex items-center select-none">
                    <div className="h-[40px] w-[40px] cursor-pointer" onClick={togglePlayback}>
                        {isPlaying ? <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14" y="11" width="4" height="18" fill="white" />
                            <rect x="22" y="11" width="4" height="18" fill="white" />
                        </svg>
                            : <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 12.7069V26.8222C13 28.1893 14.5209 29.0096 15.6487 28.2406L26.2438 21.183C27.2521 20.4994 27.2521 19.0127 26.2438 18.3462L15.6487 11.2885C14.5209 10.5366 13 11.3398 13 12.7069Z" fill="white" />
                            </svg>
                        }
                    </div>
                    <div className="text-white text-xs font-['Inter'] font-normal">
                        <span>{formatTime(currentTime)}</span>
                        <span> / </span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <div className="volume-controls flex-1 flex justify-end mr-2">
                        <button onClick={toggleMute}>
                            {!isMuted ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89928 11.2328L7.29319 11.8389C5.74504 13.3871 5.74504 15.8971 7.29319 17.4453C8.84134 18.9934 11.3514 18.9934 12.8995 17.4453L13.5056 16.8392L14.5663 17.8998L13.9602 18.5059C11.8263 20.6399 8.36647 20.6399 6.23253 18.5059C4.09859 16.372 4.0986 12.9122 6.23253 10.7783L6.83862 10.1722L7.89928 11.2328Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09681 7.03867L7.82729 10.7062L14.0323 16.9112L17.7001 15.6416C17.6904 15.6247 17.6767 15.6058 17.6573 15.5864L9.15209 7.08124C9.13429 7.06344 9.11525 7.04921 9.09681 7.03867ZM9.75114 5.6884C9.92242 5.77327 10.0785 5.8863 10.2128 6.02058L18.7179 14.5258C19.2509 15.0588 19.4772 16.0393 18.819 16.6976C18.6713 16.8453 18.4935 16.9543 18.3002 17.0212L13.6357 18.6359L6.10265 11.1029L7.71729 6.43834C8.03336 5.52525 9.03445 5.33324 9.75114 5.6884Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.87 5.78875C19.1629 6.08164 19.1629 6.55651 18.87 6.84941L16.4836 9.23589C16.1907 9.52879 15.7158 9.52879 15.4229 9.23589C15.13 8.943 15.13 8.46813 15.4229 8.17523L17.8094 5.78875C18.1023 5.49585 18.5772 5.49585 18.87 5.78875ZM13.8054 3.81899C14.2196 3.81899 14.5554 4.15477 14.5554 4.56899L14.5554 6.95547C14.5554 7.36969 14.2196 7.70547 13.8054 7.70547C13.3912 7.70547 13.0554 7.36969 13.0554 6.95547L13.0554 4.56899C13.0554 4.15477 13.3912 3.81899 13.8054 3.81899ZM20.9194 10.9329C20.9194 11.3472 20.5836 11.6829 20.1694 11.6829H17.7829C17.3687 11.6829 17.0329 11.3472 17.0329 10.9329C17.0329 10.5187 17.3687 10.1829 17.7829 10.1829L20.1694 10.1829C20.5836 10.1829 20.9194 10.5187 20.9194 10.9329Z" fill="white" />
                            </svg>
                                : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3334 5.07663C19.6263 5.36952 19.6263 5.8444 19.3334 6.13729L18.337 7.13367L19.3334 8.13005C19.6263 8.42294 19.6263 8.89781 19.3334 9.19071C19.0405 9.4836 18.5656 9.4836 18.2727 9.19071L17.2764 8.19433L16.28 9.19071C15.9871 9.4836 15.5122 9.4836 15.2193 9.19071C14.9264 8.89781 14.9264 8.42294 15.2193 8.13005L16.2157 7.13367L15.2193 6.13729C14.9264 5.8444 14.9264 5.36952 15.2193 5.07663C15.5122 4.78374 15.9871 4.78374 16.28 5.07663L17.2764 6.07301L18.2727 5.07663C18.5656 4.78374 19.0405 4.78374 19.3334 5.07663Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91613 11.0491L7.31004 11.6552C5.76189 13.2034 5.76189 15.7134 7.31004 17.2616C8.85819 18.8097 11.3682 18.8097 12.9164 17.2616L13.5225 16.6555L14.5831 17.7161L13.977 18.3222C11.8431 20.4562 8.38331 20.4562 6.24938 18.3222C4.11544 16.1883 4.11544 12.7285 6.24938 10.5946L6.85547 9.98846L7.91613 11.0491Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11366 6.85495L7.84413 10.5225L14.0492 16.7275L17.7169 15.4579C17.7072 15.441 17.6935 15.4221 17.6741 15.4027L9.16894 6.89753C9.15113 6.87972 9.13209 6.86549 9.11366 6.85495ZM9.76799 5.50468C9.93927 5.58956 10.0953 5.70259 10.2296 5.83687L18.7348 14.3421C19.2678 14.875 19.4941 15.8556 18.8358 16.5139C18.6881 16.6616 18.5104 16.7706 18.317 16.8375L13.6525 18.4522L6.11949 10.9192L7.73414 6.25463C8.05021 5.34153 9.0513 5.14953 9.76799 5.50468Z" fill="white" />
                                </svg>
                            }
                        </button>
                        {/* <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        /> */}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export const Videos = () => {
    return <div className="hidden md:flex items-center justify-center gap-4 w-full md:w-content m-auto mb-16 h-[498px]">
        {videos.map((video, index) => {
            return <CustomVideoPlayer key={index} video={video} />
        })}
    </div>
}