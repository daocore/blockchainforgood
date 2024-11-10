import { cn } from "@/lib";
import styles from "../styles.module.css";
import BGAGlodImage from "@/assets/vote/BGA Gold.png";
import Image from "next/image";

export function QRCode() {
  return (
    <div
      className={cn(
        "w-full p-4 pl-0 flex justify-between items-center relative overflow-hidden",
        styles.qrcode,
        styles.bulibuli
      )}
    >
      <Image
        className="h-[88px] w-[198px]"
        width={198}
        height={88}
        src={BGAGlodImage}
        alt="BGA"
      />
      <div className="text-right -tracking-[1px]">
        <h3 className="text-[#C09845] text-xl font-bold">
          Please scan the QR code on your card
        </h3>
        <p className="text-[#C09845]/80 font-medium">
          For any issues or if the card is lost,contact a BGA team member.
        </p>
      </div>
    </div>
  );
}
