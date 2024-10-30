"use client";

import { Loading } from "@/components/Loading";
import { Suspense } from "react";
import HackathonImage from "@/assets/hackathon.png";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { ROUTER_PATH } from "@/constants";

export const Form = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, #02CCB7 0%, #47E6D6 70%, #8DF7EC 100%)",
      }}
      className="bg-white p-6 space-y-6"
    >
      <h4 className="flex items-center font-bold text-black">
        <Image src={HackathonImage} alt="Hackathon" width={31} height={31} />
        Apply Now
      </h4>
      <div className="text-xs text-typography space-y-6">
        <p>
          Are you organizing a hackathon and looking to incorporate
          sustainability into your event?
        </p>
        <p>
          Partner with us to add a dedicated BGA track to your hackathon. This
          collaboration will provide your event access to our extensive prize
          pool, expert judges, and increased visibility within the blockchain
          and sustainability communities.
        </p>

        <p>
          Apply now! Together, we can inspire and leverage blockchain technology
          for global good.
        </p>
      </div>

      <Suspense fallback={<Loading />}>
        <FormImpl />
      </Suspense>
    </div>
  );
};

function FormImpl() {
  const router = useRouter();

  return (
    <div
      style={{
        background: "linear-gradient(0deg, #97F6EC 0%, #FFFFFF 100%)",
      }}
      className="w-full cursor-pointer hover:shadow-lg h-8 px-6 text-center text-text text-sm font-medium font-['Inter'] leading-[14px] flex justify-center items-center"
      onClick={() => {
        router.push(
          `${ROUTER_PATH.FORM.ORGANIZATION}/6e18e6b2-477a-4213-8de2-ebdf6ac45c39`
        );
      }}
    >
      Apply
    </div>
  );

  // return (
  //   <Dialog>
  //     <DialogTrigger asChild>
  //       <div
  //         style={{
  //           background: "linear-gradient(0deg, #97F6EC 0%, #FFFFFF 100%)",
  //         }}
  //         className="w-full cursor-pointer hover:shadow-lg h-8 px-6 text-center text-text text-sm font-medium font-['Inter'] leading-[14px] flex justify-center items-center"
  //       >
  //         Apply
  //       </div>
  //     </DialogTrigger>
  //     <DialogContent
  //       onPointerDownOutside={(e) => e.preventDefault()}
  //       className="w-screen max-w-screen-lg h-4/5"
  //     >
  //       <div className="relative overflow-y-auto">
  //         <h3 className="text-main text-2xl font-bold pb-4 px-3 md:px-10 m-auto">
  //           Hackathon Collaberation Application Form
  //         </h3>
  //         <IFrameLoading size={60} id={ELEMENT_ID} className="w-full h-full" />
  //         <iframe
  //           id={ELEMENT_ID}
  //           src={organizationalChannel}
  //           style={{
  //             width: "100%",
  //             height: "100%",
  //           }}
  //         />
  //       </div>
  //     </DialogContent>
  //   </Dialog>
  // );
}
