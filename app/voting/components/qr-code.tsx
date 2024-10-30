import { cn } from "@/lib";
import styles from "../styles.module.css";
import CodeImage from "@/assets/vote/BGA Oscar QR.png";
import BGAGlodImage from "@/assets/vote/BGA Gold.png";
import Image from "next/image";

export function QRCode() {
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
        <Image
          // style={{ width: "264px" }}
          className="h-16 w-auto"
          width={264}
          height={64}
          src={BGAGlodImage}
          alt="BGA"
        />
      </div>
    </div>
  );
}
