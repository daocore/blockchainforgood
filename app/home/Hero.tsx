import HeroImg from "@/assets/KV.webp";
import Edu3Labslogo from "@/assets/Edu3Labs Globe.webp";
import Liberalogo from "@/assets/Libera Globe.webp";
import HeroImageRubixcubewText from "@/assets/HeroImage-RubixcubewText.png";
import { RowSpace } from "@/components/RowSpace";
import Cubes from "@/assets/CubesPatterns.svg";
import { HTMLAttributes, useEffect, useState } from "react";
import { Videos } from "./Video";
import { CustomVideoPlayer, IVideo } from "@/components/Video";
import { DialogsWithFooterAndTitle } from "@/components/Dialog";
import posterMax from "@/assets/video/1713084084649.jpg";
import playicon from "@/assets/play.svg";
import Image, { StaticImageData } from "next/image";
import { ROUTER_PATH } from "@/constants";
import { useIsMobile } from "@/hooks";
import { trackSensors } from "@/lib/sensors";
import { JoinUs } from "@/components/JoinUs";

const LogoDialog = ({
  project,
  ...props
}: {
  project: {
    logo: StaticImageData;
    video?: IVideo;
    link?: string;
    name: string;
  };
} & HTMLAttributes<HTMLImageElement>) => {
  const { logo, video, link, name } = project;
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useIsMobile();
  const w = 1000;

  return (
    <>
      <Image
        {...props}
        src={logo}
        alt=""
        className={`w-[18vw] md:w-[107px] md:h-[107px] cursor-pointer ${props?.className}`}
        onClick={() => {
          if (video) {
            setIsOpen(true);
            trackSensors("ButtonClicked", {
              buttonName: `Hero ${name} Logo Button`,
            });
          } else {
            window.open(link, "_blank");
          }
        }}
      />
      {video && (
        <DialogsWithFooterAndTitle
          open={isOpen}
          setOpen={() => {
            setIsOpen(false);
          }}
          css={{ height: video?.width ? (video?.width / 9) * 18 : "auto" }}
          width={w + 300}
          close={() => {
            setIsOpen(false);
          }}
        >
          <CustomVideoPlayer
            src={video?.src}
            poster={video?.poster}
            width={video?.width}
            name={name}
            style={{
              width: mobile ? "88vw" : w,
              height: mobile ? `${(88 / 16) * 9}vw` : (w / 16) * 9,
              margin: "-10px auto 20px auto",
            }}
          >
            {({ isPlaying, togglePlay }) => {
              return (
                <div
                  className={`absolute w-full h-full z-10 top-0 md:flex justify-center items-center hidden`}
                >
                  {!isPlaying && (
                    <Image
                      src={playicon}
                      alt=""
                      className="w-[80px] h-[80px] cursor-pointer z-20"
                      onClick={togglePlay}
                    />
                  )}
                  <div
                    className="absolute h-full w-full -mb-[2px] hidden md:block"
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 81.72%, rgba(0, 0, 0, 0.75) 110%)`,
                    }}
                  ></div>
                </div>
              );
            }}
          </CustomVideoPlayer>
        </DialogsWithFooterAndTitle>
      )}
    </>
  );
};

export const Hero = () => {
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    if (!document?.getElementById) return;
    document?.addEventListener("scroll", () => {
      if (window?.scrollY <= 1200 && window?.scrollY >= 400) {
        setTop(window.scrollY - 400);
      }
    });

    return () => {
      document?.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="w-full md:w-content m-auto mt-16">
      <div className="items-center justify-between inline-flex w-full flex-wrap mb-4">
        <div className="w-full md:w-[600px] flex-col justify-start items-start inline-flex px-4 md:px-0">
          <div className="w-full md:w-[600px] flex-col justify-start items-start inline-flex px-4 md:px-0">
            <h1 className="self-stretch text-black text-[40px] xs:text-[64px] md:text-[82px] font-extrabold font-['Inter'] leading-[36px] xs:leading-[48px] md:leading-[82px]">
              Blockchain <br className="md:block hidden" />
              for Good
            </h1>
            <h2 className="self-stretch text-text text-[20px] xs:text-[32px] md:text-[26px] font-normal font-['Inter'] leading-loose">
              Your Key to Web3
            </h2>
          </div>
          <div className="flex gap-4 justify-start md:justify-center md:flex-row flex-col mt-4 xs:mt-6 md:mt-8 w-full md:w-auto">
            <JoinUs
              text="Join as an Organization"
              link={ROUTER_PATH.FORM.ORGANIZATION}
            />
            <JoinUs
              text="Join as an Individual"
              link={ROUTER_PATH.FORM.PERSON}
            />
          </div>
        </div>
        <div className="relative w-full md:w-[605px] mr-0 desktop:-mr-[92px] mt-4 md:mt-0 h-full">
          <LogoDialog
            className="absolute left-[28.9vw] bottom-[8.5vw] md:left-[176px] md:bottom-[56px] logo-up-down-move"
            style={{
              animationDelay: "0.1s",
            }}
            project={{
              logo: Liberalogo,
              video: {
                src: "/video/Max_CEO_of_Libera_logo.mp4",
                poster: posterMax,
                width: 316,
              },
              name: "Libera",
            }}
          />

          <LogoDialog
            className="absolute right-[30.5vw] bottom-[5vw] md:right-[186px] md:bottom-[34px] logo-up-down-move"
            style={{
              animationDelay: "1s",
            }}
            project={{
              logo: Edu3Labslogo,
              link: "https://edu3labs.com/",
              name: "Edu3Labs",
            }}
          />
          <Image src={HeroImg} alt="Edu3Labs" />
        </div>
      </div>
      <Videos />
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center pb-0 md:pb-16 flex-wrap mt-8 xs:mt-12 md:mt-0 relative gap-4 desktop:overflow-hidden overflow-visible px-4 md:px-0">
        <Image
          className="w-[300px] md:w-[340px] ml-0 md:ml-[37px] mb-10 md:mb-0"
          src={HeroImageRubixcubewText}
          alt=""
        />
        <div className="w-full md:w-[604px] flex-col justify-start items-start gap-2 inline-flex z-20">
          <h3 className="grow shrink basis-0 text-black text-[32px] font-bold font-['Inter'] leading-[41.60px] text-center md:text-left w-full md:w-auto">
            Care. Create. Change.
          </h3>
          <div className="self-stretch justify-center items-center inline-flex">
            <p className="grow shrink basis-0 text-[#576172] text-sm md:text-base font-normal font-['Inter'] leading-normal  text-center md:text-left w-full md:w-auto">
              At Blockchain for Good Alliance (BGA), we believe in the
              transformative potential of blockchain technology to address some
              of the most pressing challenges facing our society.
              <RowSpace />
              Our alliance serves as a collaborative hub, bringing together a
              diverse range of stakeholders to collectively explore, innovate
              and implement blockchain solutions for social good.
            </p>
          </div>
        </div>
        <Image
          src={Cubes}
          className="absolute"
          alt=""
          style={{
            transform: `scale(1) translateY(-${top / 5}px)`,
          }}
        />
      </div>
    </div>
  );
};
