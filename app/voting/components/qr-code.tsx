import { cn } from "@/lib";
import styles from "../styles.module.css";
import CodeImage from "@/assets/vote/BGA Oscar QR.png";
import BGAGlodImage from "@/assets/vote/BGA Gold.png";
import Image from "next/image";

export function QRCode() {
  console.log(BGAGlodImage.width, BGAGlodImage.height);
  return (
    <div
      className={cn(
        "w-full p-4 flex justify-between relative overflow-hidden",
        styles.qrcode,
        styles.bulibuli
      )}
    >
      <Image className="w-36 h-36" src={CodeImage} alt="vote" />
      <div className="flex flex-col justify-between">
        <p className="text-oscarActive text-4xl font-medium">Call To Action</p>
        <div className="flex justify-end">
          <Image
            className="h-12 w-48"
            width={240}
            height={64}
            src={BGAGlodImage}
            alt="BGA"
          />
        </div>
      </div>
    </div>
  );
}
