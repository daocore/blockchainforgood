import Image from "next/image";
import ChainsImage from "@/assets/oscar-ceremony/chains.png";
import styles from "./index.module.css";
import { cn } from "@/lib";

export function Chains() {
  return (
    <div className={cn(styles.chains, "flex items-center px-2 py-4")}>
      {/* <Image className="" src={ChainsImage} alt="Chains" /> */}
      <section className="space-y-2 pl-96">
        <h2 className="text-5xl font-semibold leading-tight">
          Chains of Change
        </h2>
        <p>
          is a premier event that celebrates groundbreaking blockchain projects
          with a focus on sustainability and social impact.
        </p>
        <p>
          Hosted by the Blockchain for Good Alliance (BGA), this event gathers
          innovators, thought leaders, and industry pioneers to honor projects
          that align with the United Nations' Sustainable Development Goals
          (SDGs).
        </p>
        <p>
          This is not just an awards ceremony—it's a movement dedicated to
          showcasing how blockchain technology can be a driving force for global
          good.
        </p>
      </section>
    </div>
  );
}
