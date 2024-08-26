import { Earth } from "./earth";
import { Button } from "@/components/ui";
import styles from "./earth/earth.module.css";
import { cn } from "@/lib";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTER_PATH } from "@/constants/router";
import Link from "next/link";
import { MoveDown } from "lucide-react";

export const Hero = () => {
  const onMoveDown = () => {
    const innerHeight = window.innerHeight;
    window.scrollTo({ top: innerHeight, behavior: "smooth" });
  };
  return (
    <div className="">
      <Earth>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className={cn("text-center", styles.button)}>
              <Button className="w-4/5 md:w-52 max-w-content py-3 bg-main hover:bg-main/90 rounded-none shadow-md hover:shadow-lg font-bold">
                Make an Impact Now
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem className="hover:text-main">
              <Link href={ROUTER_PATH.FORM.ORGANIZATION}>
                Join as an Organization
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:text-main">
              <Link href={ROUTER_PATH.FORM.PERSON}>Join as an Individual</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div
          className="justify-center mt-2 cursor-pointer hidden md:flex"
          onClick={onMoveDown}
        >
          <MoveDown className={cn("text-main", styles["arrow-down"])} />
        </div>
      </Earth>
    </div>
  );
};
