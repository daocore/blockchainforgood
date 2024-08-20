"use client";

import { useState } from "react";
import Image from "next/image";
import HackathonImage from "@/assets/hackathon.png";

export const Form = () => {
  const [hackathonTitle, setHackathonTitle] = useState("");
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const email = "hello@blockchainforgood.xyz";

  return (
    <div className="w-full p-6 bg-white shadow flex-col justify-start items-start gap-4 inline-flex z-20">
      <div className="self-stretch h-6 flex-col justify-start items-start flex">
        <div className="self-stretch justify-center items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 text-black text-base font-bold font-['Inter'] leading-normal flex items-center">
            <Image
              className="w-8 h-8"
              src={HackathonImage}
              width={32}
              height={32}
              alt="Hackathon Image"
            />
            Apply Now
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch h-[62px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">
              Hackthon Title*
            </div>
          </div>
          <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
            <input
              maxLength={100}
              className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none"
              placeholder="enter your hackathon title"
              value={hackathonTitle}
              onChange={(e) => {
                setHackathonTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">
              Name*
            </div>
          </div>
          <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
            <input
              maxLength={100}
              className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none"
              placeholder="enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal font-['Inter'] leading-[18px]">
              Telegram Handler*
            </div>
          </div>
          <div className="self-stretch h-10 bg-white shadow-inner border border-neutral-400 flex-col justify-center items-start gap-2.5 flex">
            <input
              maxLength={100}
              className="text-xs font-normal font-['Inter'] leading-[18px] w-full h-full p-2 text-black focus:outline-none"
              placeholder="enter your telegram handler"
              value={telegram}
              onChange={(e) => {
                setTelegram(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <a
        className="w-full h-8 px-6 border border-active justify-center items-center gap-2.5 inline-flex hover:border-text hover:bg-text group cursor-pointer hover:border-main"
        href={`mailto:${email}?subject=${hackathonTitle}&body=${name}`}
        rel="noopener noreferrer"
      >
        <div className="text-center text-text text-sm font-medium font-['Inter'] leading-[14px] group-hover:text-main">
          Apply
        </div>
      </a>
    </div>
  );
};
