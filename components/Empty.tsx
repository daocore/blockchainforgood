import EmptyImage from "@/assets/empty.png";
import Image from "next/image";

export function Empty() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-40">
      <Image width={80} height={80} src={EmptyImage} alt="empty" />
      <span className="font-bold">No data</span>
      <span className="text-description text-sm">
        No data, please try again later
      </span>
    </div>
  );
}
