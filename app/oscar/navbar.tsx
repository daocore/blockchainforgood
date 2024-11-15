import Image from "next/image";
import MenuImage from "@/assets/vote/result/menu.png";
import AwardImage from "@/assets/oscar-ceremony/award.png";
import { cn } from "@/lib";
import styles from "./styles.module.css";

const navbars = [
  {
    label: "17 SDGs challenge",
    img: AwardImage,
  },
  {
    label: "Process",
    img: MenuImage,
  },
];

export function Navbar({
  showLeft,
  onSwitch,
}: {
  showLeft: boolean;
  onSwitch: (val: boolean) => void;
}) {
  const handleSwitch = (index: number) => {
    onSwitch(index === 0);
  };
  return (
    <div className="flex justify-center gap-2 bg-oscarBlack py-4 md:py-10">
      {navbars.map((navbar, index) => {
        const isActive = showLeft ? index === 0 : index === 1;
        return (
          <div
            key={navbar.label}
            className={cn(
              "text-[#576265] text-xl tracking-tighter flex items-center justify-center gap-2 cursor-pointer w-48 md:w-72 h-14",
              index === 1 && "w-40",
              isActive && styles["navbar-active"]
            )}
            onClick={() => handleSwitch(index)}
          >
            <Image
              className={cn(!isActive && "grayscale")}
              src={navbar.img}
              alt={navbar.label}
            />
            <span className={isActive && styles["gradiend-text"]}>
              {navbar.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// <Image
//   src={showCeremony ? Narbar1ActiveImage : Narbar1Image}
//   alt="17 SDGs challenge"
//   className="cursor-pointer"
// />
// <Image
//   src={showCeremony ? Narbar2Image : Narbar2ActiveImage}
//   alt="process"
//   className="cursor-pointer"
// />
