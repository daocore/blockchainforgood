"use client";

import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { forwardRef, useImperativeHandle, useState } from "react";
import ConfettiImage from "@/assets/vote/confetti.png";
// @ts-ignore
import confetti from "canvas-confetti";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTER_PATH } from "@/constants";

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const Successed = forwardRef(function Successed(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        onSuccessed() {
          setOpen(true);
          confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 },
          });
        },
      };
    },
    []
  );

  const router = useRouter();
  const onCheckResult = () => router.push(ROUTER_PATH.OSCAR);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1F2734] border-none">
        <DialogHeader>
          <Image src={ConfettiImage} className="w-full" alt="confetti" />
          <DialogTitle className="text-center text-[#FFD989]">
            Congrats! You’ve just voted project!
          </DialogTitle>
          <DialogDescription className="text-center text-white">
            See your voted projects in the projects tab.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={onCheckResult}
          className="bg-[#FFD989] hover:bg-bg-[#FFD989] text-[#1F2734] w-full"
        >
          Check Results
        </Button>
      </DialogContent>
    </Dialog>
  );
});
