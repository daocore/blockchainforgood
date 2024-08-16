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
import { Earth } from "./earth";
import { Button } from "@/components/ui";
import styles from "./earth/earth.module.css";
import { cn } from "@/lib";

export const Hero = () => {
  return (
    <div className="w-full md:w-content m-auto">
      <Earth>
        <div className={cn("text-center", styles.button)}>
          <Button className="w-full md:w-52 py-3 bg-main hover:bg-main/90 rounded-none shadow-md hover:shadow-lg font-bold">
            Make an Impact Now
          </Button>
        </div>
      </Earth>
    </div>
  );
};
