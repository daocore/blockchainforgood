import { Earth } from "./earth";
import { Button } from "@/components/ui";
import styles from "./earth/earth.module.css";
import { cn } from "@/lib";

export const Hero = () => {
  return (
    <div className="">
      <Earth>
        <div className={cn("text-center", styles.button)}>
          <Button className="w-full md:w-52 max-w-content py-3 bg-main hover:bg-main/90 rounded-none shadow-md hover:shadow-lg font-bold">
            Make an Impact Now
          </Button>
        </div>
      </Earth>
    </div>
  );
};
