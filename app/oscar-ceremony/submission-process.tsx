"use client";

import Image, { StaticImageData } from "next/image";
import ProcessIconImage from "@/assets/oscar-ceremony/process-icon.png";
import styles from "./index.module.css";
import { cn } from "@/lib";
import AgendaImage from "@/assets/oscar-ceremony/agenda.png";
import UserImage from "@/assets/oscar-ceremony/user.png";
import HelenImage from "@/assets/oscar/Avatar Helen.png";
import AdzImage from "@/assets/oscar/Avatar Adz.png";
import LucasImage from "@/assets/oscar/Avatar Lucas.png";
import MarianaImage from "@/assets/oscar/Avatar Mariana.png";
import VenusKhorImage from "@/assets/oscar/Avatar VenusKhor.png";
import MeetImage from "@/assets/oscar/Avatar Meet.png";
import MikeImage from "@/assets/oscar/Avatar Mike.png";
import ScootImage from "@/assets/oscar/Avatar Scott Moore.png";
import BenImage from "@/assets/oscar/Avatar Ben.png";
import DilipChenoyImage from "@/assets/oscar/Avatar DilipChenoy.png";
import DFBAWImage from "@/assets/oscar/Avatar Datuk Fadzli Bin Abdul Wahit.png";
import HarnImage from "@/assets/oscar/Avatar Harn.png";
import GianlucaImage from "@/assets/oscar/Avatar Gianluca.png";
import KCImage from "@/assets/oscar/Avatar KC.png";
import AdamImage from "@/assets/oscar/Avatar Adam.png";
import ComposeusImage from "@/assets/oscar/Avatar Composeus.png";
import RodrigoVasquezImage from "@/assets/oscar/Avatar Rodrigo Vasquez.png";
import FelixsimImage from "@/assets/oscar/Avatar28.png";
import JayKohImage from "@/assets/oscar/Avatar22.png";
import GabrielaChangValdovinosImage from "@/assets/oscar/Avatar Gabriela Chang Valdovinos.png";
import CryptobirdImage from "@/assets/oscar/Avatar Cryptobird.png";
import BruceImage from "@/assets/oscar/Avatar Bruce.png";
import BurcuMavisImage from "@/assets/oscar/Avatar Burcu Mavis.png";
import RobertPasickeImage from "@/assets/oscar/Avatar Robert Pasicko.png";
import AnkeLiuImage from "@/assets/oscar/Avatar Anke Liu.png";
import AbdullaAlDhaheriImage from "@/assets/oscar/Avatar Abdulla Al Dhaheri.png";
import AlexandereEislImage from "@/assets/oscar/Avatar AlexanderEisl.png";
import PinakiImage from "@/assets/oscar/Avatar Pinaki.png";
import DrWIssamanyaTulthaisongImage from "@/assets/oscar/Avatar Dr. Wissamanya Tulthaisong.png";

import AutoScroll from "embla-carousel-auto-scroll";
import Image1_1 from "@/assets/vote/result/1-1.png";
import Image1_2 from "@/assets/vote/result/1-2.png";
import Image1_3 from "@/assets/vote/result/1-3.png";
import Image1_4 from "@/assets/vote/result/1-4.png";
import Image1_5 from "@/assets/vote/result/1-5.png";
import Image1_6 from "@/assets/vote/result/1-6.png";
import Image1_7 from "@/assets/vote/result/1-7.png";
import Image1_8 from "@/assets/vote/result/1-8.png";
import Image2_1 from "@/assets/vote/result/2-1.png";
import Image2_2 from "@/assets/vote/result/2-2.png";
import Image2_3 from "@/assets/vote/result/2-3.png";
import Image2_4 from "@/assets/vote/result/2-4.png";
import Image2_5 from "@/assets/vote/result/2-5.png";
import Image2_6 from "@/assets/vote/result/2-6.png";
import Image2_7 from "@/assets/vote/result/2-7.png";
import Image2_8 from "@/assets/vote/result/2-8.png";
import Image3_1 from "@/assets/vote/result/3-1.png";
import Image3_2 from "@/assets/vote/result/3-2.png";
import Image3_3 from "@/assets/vote/result/3-3.png";
import Image3_4 from "@/assets/vote/result/3-4.png";
import Image3_5 from "@/assets/vote/result/3-5.png";
import Image3_6 from "@/assets/vote/result/3-6.png";
import Image3_7 from "@/assets/vote/result/3-7.png";
import Image3_8 from "@/assets/vote/result/3-8.png";
import Image4_1 from "@/assets/vote/result/4-1.png";
import Image4_2 from "@/assets/vote/result/4-2.png";
import Image4_3 from "@/assets/vote/result/4-3.png";
import Image4_4 from "@/assets/vote/result/4-4.png";
import Image4_5 from "@/assets/vote/result/4-5.png";
import Image4_6 from "@/assets/vote/result/4-6.png";
import Image4_7 from "@/assets/vote/result/4-7.png";
import Image4_8 from "@/assets/vote/result/4-8.png";
import Image4_9 from "@/assets/vote/result/4-8.png";
import Image4_10 from "@/assets/vote/result/4-10.png";
import Image5_1 from "@/assets/vote/result/5-1.png";
import Image5_2 from "@/assets/vote/result/5-2.png";
import Image5_3 from "@/assets/vote/result/5-3.png";
import Image5_4 from "@/assets/vote/result/5-4.png";
import Image5_5 from "@/assets/vote/result/5-5.png";
import Image5_6 from "@/assets/vote/result/5-6.png";
import Image5_7 from "@/assets/vote/result/5-7.png";
import Image5_8 from "@/assets/vote/result/5-8.png";
import Image6_1 from "@/assets/vote/result/6-1.png";
import Image7_1 from "@/assets/vote/result/7-1.png";
import Image7_2 from "@/assets/vote/result/7-2.png";
import Image7_3 from "@/assets/vote/result/7-3.png";
import Image7_4 from "@/assets/vote/result/7-4.png";
import Image7_5 from "@/assets/vote/result/7-5.png";
import Image7_6 from "@/assets/vote/result/7-6.png";
import Image7_7 from "@/assets/vote/result/7-7.png";

import Image8_1 from "@/assets/vote/result/8-1.png";
import Image8_2 from "@/assets/vote/result/8-2.png";
import Image8_3 from "@/assets/vote/result/8-3.png";
import Image8_4 from "@/assets/vote/result/8-4.png";
import Image8_5 from "@/assets/vote/result/8-5.png";
import Image8_6 from "@/assets/vote/result/8-6.png";
import Image8_7 from "@/assets/vote/result/8-7.png";
import Image8_8 from "@/assets/vote/result/8-8.png";
import Image9_1 from "@/assets/vote/result/9-1.png";
import Image9_2 from "@/assets/vote/result/9-2.png";
import Image9_3 from "@/assets/vote/result/9-3.png";
import Image9_4 from "@/assets/vote/result/9-4.png";
import Image9_5 from "@/assets/vote/result/9-5.png";
import Image9_6 from "@/assets/vote/result/9-6.png";
import Image9_7 from "@/assets/vote/result/9-7.png";
import Image10_1 from "@/assets/vote/result/10-1.png";
import Image10_2 from "@/assets/vote/result/10-2.png";
import Image10_3 from "@/assets/vote/result/10-3.png";
import Image10_4 from "@/assets/vote/result/10-4.png";
import Image10_5 from "@/assets/vote/result/10-5.png";
import Image11_1 from "@/assets/vote/result/11-1.png";
import Image11_2 from "@/assets/vote/result/11-2.png";
import Image11_3 from "@/assets/vote/result/11-3.png";
import Image11_4 from "@/assets/vote/result/11-4.png";
import Image11_5 from "@/assets/vote/result/11-5.png";
import Image11_6 from "@/assets/vote/result/11-6.png";
import Image11_7 from "@/assets/vote/result/11-7.png";
import Image11_8 from "@/assets/vote/result/11-8.png";
import Image12_1 from "@/assets/vote/result/12-1.png";
import Image12_2 from "@/assets/vote/result/12-2.png";
import Image12_3 from "@/assets/vote/result/12-3.png";
import Image12_4 from "@/assets/vote/result/12-4.png";
import Image12_5 from "@/assets/vote/result/12-5.png";
import Image12_6 from "@/assets/vote/result/12-6.png";
import Image13_1 from "@/assets/vote/result/13-1.png";
import Image13_2 from "@/assets/vote/result/13-2.png";
import Image13_3 from "@/assets/vote/result/13-3.png";
import Image13_4 from "@/assets/vote/result/13-4.png";
import Image13_5 from "@/assets/vote/result/13-5.png";
import Image13_6 from "@/assets/vote/result/13-6.png";
import Image13_7 from "@/assets/vote/result/13-7.png";
import Image13_8 from "@/assets/vote/result/13-8.png";
import Image14_1 from "@/assets/vote/result/14-1.png";
import Image14_2 from "@/assets/vote/result/14-2.png";
import Image14_3 from "@/assets/vote/result/14-3.png";
import Image14_4 from "@/assets/vote/result/14-4.png";
import Image15_1 from "@/assets/vote/result/15-1.png";
import Image15_2 from "@/assets/vote/result/15-2.png";
import Image15_3 from "@/assets/vote/result/15-3.png";
import Image15_4 from "@/assets/vote/result/15-4.png";
import Image15_5 from "@/assets/vote/result/15-5.png";
import Image15_6 from "@/assets/vote/result/15-6.png";
import Image15_7 from "@/assets/vote/result/15-7.png";
import Image16_1 from "@/assets/vote/result/16-1.png";
import Image16_2 from "@/assets/vote/result/16-2.png";
import Image16_3 from "@/assets/vote/result/16-3.png";
import Image16_4 from "@/assets/vote/result/16-4.png";
import Image16_5 from "@/assets/vote/result/16-5.png";
import Image16_6 from "@/assets/vote/result/16-6.png";
import Image16_7 from "@/assets/vote/result/16-7.png";
import Image16_8 from "@/assets/vote/result/16-8.png";
import Image16_9 from "@/assets/vote/result/16-9.png";
import Image16_10 from "@/assets/vote/result/16-10.png";
import Image16_11 from "@/assets/vote/result/16-11.png";
import Image16_12 from "@/assets/vote/result/16-12.png";
import Image17_1 from "@/assets/vote/result/17-1.png";
import Image17_2 from "@/assets/vote/result/17-2.png";
import Image17_3 from "@/assets/vote/result/17-3.png";
import Image17_4 from "@/assets/vote/result/17-4.png";
import Image17_5 from "@/assets/vote/result/17-5.png";
import Image17_6 from "@/assets/vote/result/17-6.png";
import Image17_7 from "@/assets/vote/result/17-7.png";
import Image17_8 from "@/assets/vote/result/17-8.png";
import Image17_9 from "@/assets/vote/result/17-9.png";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCallback, useState } from "react";

export function SubmissionProcess() {
  return (
    <div className="w-screen md:w-content mx-auto px-2 md:px-0">
      <div id="agenda" className="hash-section flex items-center gap-2">
        <Image width={40} height={40} src={ProcessIconImage} alt="Process" />
        <h2 className="text-oscarActive text-3xl font-bold">Event Agenda</h2>
      </div>

      <div className="mt-8 space-y-8">
        <div
          className={cn(
            styles["process-title"],
            "text-xl font-medium whitespace-nowrap"
          )}
        >
          <p>Session 1: The 17 SDGs Challenge </p>
        </div>

        <div className="space-y-8">
          <PartItem time="9:00 AM - 9:30 AM" title="The Opening Act">
            <PartContentItem
              title="The Red Carpet"
              desc="Registration for event participants begins. In true glamour and excitement, take a snapshot to remember this event at our red carpet and photobooth."
              imageSource={[
                Image1_1,
                Image1_2,
                Image1_3,
                Image1_4,
                Image1_5,
                Image1_6,
                Image1_7,
                Image1_8,
              ]}
            />
            <PartContentItem
              title="Opening Premiere"
              desc="A cinematic, epic style opening video will highlight the current global sustainability challenges, juxtaposed with innovative blockchain solutions that have made a difference."
              imageSource={[
                Image2_1,
                Image2_2,
                Image2_3,
                Image2_4,
                Image2_5,
                Image2_6,
                Image2_7,
                Image2_8,
              ]}
            />
            <PartContentItem
              title="The Spotlight"
              desc="A BGA member introduces the theme and agenda and gives an opening welcome."
              spearks={[
                {
                  img: UserImage,
                  name: "Allan",
                  org: [
                    {
                      name: "Blockchain For Good Alliance (BGA)",
                      title: "Partner",
                    },
                    {
                      name: "Moledao",
                      title: "Co-Builder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/allanfang/",
                },
              ]}
              imageSource={[
                Image3_1,
                Image3_2,
                Image3_3,
                Image3_4,
                Image3_5,
                Image3_6,
                Image3_7,
                Image3_8,
              ]}
            />
          </PartItem>

          <PartItem time="9:30 AM - 12:30 PM" title="The Arena of Heroes">
            <PartContentItem
              title="Rising Stars"
              desc={`10 shortlisted projects from across the globe, who have participated in the Sustainable Innovation Summit: The 17 SDGs Challenge, will step into the spotlight, presenting their blockchain solutions that confront sustainability challenges. 
In true cinematic fashion, each project pitch will have to tell the story of a "hero" facing a global crisis (one of the 17 SDGs), with blockchain as the "tool" they wield to drive change and create a better future.`}
              imageSource={[
                Image4_1,
                Image4_2,
                Image4_3,
                Image4_4,
                Image4_5,
                Image4_6,
                Image4_7,
                Image4_8,
                Image4_9,
                Image4_10,
              ]}
            />
            <PartContentItem
              title="Academy of Innovation"
              desc={`The judging panel, known as The Academy, comprises esteemed leaders and visionaries from the blockchain, sustainability, and tech industries. These experts will evaluate the pitches based on innovation, impact, and potential for global scalability. 
Just as the Academy determines the best in film, our "Academy of Innovation" will determine which project stands as the beacon of blockchain excellence, shaping the future of sustainable development.`}
              spearks={[
                {
                  img: HarnImage,
                  name: "Harn",
                  org: [
                    {
                      name: "Trigger Asset Management",
                      title: "CEO",
                    },
                  ],
                  link: "",
                },
                {
                  img: KCImage,
                  name: "KC",
                  org: [
                    {
                      name: "AYA Foundation",
                      title: "Investments, Impact Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/ong-kok-chung/",
                },
                {
                  img: GianlucaImage,
                  name: "Gianluca",
                  org: [
                    {
                      name: "NapulETH",
                      title: "CEO & Co-Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/gdbmoodglobalservices/?utm_source=share&utm_campaign=share_via&utm_conte",
                },
                {
                  img: AdamImage,
                  name: "Adam",
                  org: [
                    {
                      name: "3 Comma Capital SCR",
                      title: "Venture Partner",
                    },
                  ],
                  link: "https://www.linkedin.com/in/adamihsanboon/",
                },
                {
                  img: FelixsimImage,
                  name: "Felixsim",
                  org: [
                    {
                      name: "Salad Ventures",
                      title: "Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/simfelix",
                },
                {
                  img: JayKohImage,
                  name: "JayKoh",
                  org: [
                    {
                      name: "Association Blockchain Asia",
                      title: "Vice President",
                    },
                  ],
                  link: "https://x.com/Krypto_JayK",
                },
                {
                  img: CryptobirdImage,
                  name: "Cryptobird",
                  org: [
                    {
                      name: "ThreeDAO Founders' Fund",
                      title: "Manager Partner",
                    },
                  ],
                  link: "https://twitter.com/tianhongfei",
                },
                {
                  img: BruceImage,
                  name: "Bruce",
                  org: [
                    {
                      name: "Partisia Blockchain Foundation",
                      title: "Chief of Staff",
                    },
                  ],
                  link: "https://linkedin.com/in/ahnbruce",
                },
                {
                  img: BurcuMavisImage,
                  name: "Burcu Mavis",
                  org: [
                    {
                      name: "UNDP",
                      title: "Blockchain Academy and Accelerator Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/burcu-m-7a9325149/",
                },
                {
                  img: PinakiImage,
                  name: "Pinaki",
                  org: [
                    {
                      name: "Affi Network",
                      title: "Founder/CEO",
                    },
                  ],
                  link: "https://www.linkedin.com/in/pinaki-s/",
                },
              ]}
              imageSource={[
                Image5_1,
                Image5_2,
                Image5_3,
                Image5_4,
                Image5_5,
                Image5_6,
                Image5_7,
                Image5_8,
              ]}
            />

            <PartContentItem
              title="The People's Choice"
              desc={`In the spirit of audience engagement, attendees will have the opportunity to cast their votes live via a dedicated app, selecting their favorite project as the "People’s Choice" among the innovative blockchain solutions.`}
              imageSource={[Image6_1]}
            />
          </PartItem>

          <PartItem time="12:30 PM - 1:30 PM" title="Intermission">
            <p className={cn(styles.description)}>
              Lunch break and mini networking.
            </p>
            <CarouselList
              dataSource={[
                Image7_1,
                Image7_2,
                Image7_3,
                Image7_4,
                Image7_5,
                Image7_6,
                Image7_7,
              ]}
            />
          </PartItem>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div
          className={cn(
            styles["process-title"],
            "text-xl font-medium whitespace-nowrap"
          )}
        >
          <p>Session 2: The Chains of Change</p>
        </div>

        <div className="space-y-8">
          <PartItem time="1:30 PM - 1:40 PM" title="A Vision for Global Change">
            <PartContentItem
              title="Opening Remarks"
              desc="The United Nations Development Programme (UNDP) will highlight the critical role blockchain can play in accelerating global development."
              spearks={[
                {
                  img: RobertPasickeImage,
                  name: "Robert Pasicko",
                  org: [
                    {
                      name: "UNDP",
                      title: "AltFinLab Team Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/robert-pasicko-5a563a3/",
                },
              ]}
              imageSource={[
                Image8_1,
                Image8_2,
                Image8_3,
                Image8_4,
                Image8_5,
                Image8_6,
                Image8_7,
                Image8_8,
              ]}
            />
            <PartContentItem
              title=""
              desc="The representatives of the Thai National Assembly will discuss blockchain solutions for the region of Thailand."
              spearks={[
                {
                  img: DrWIssamanyaTulthaisongImage,
                  name: "Dr. Wissamanya Tulthaisong",
                  org: [
                    {
                      name: "National Assembly of Thailand",
                      title: `Secretary of the commerce commission and intellectual property house of representatives
& Expert on the committee of the fund for agricultural rehabilitation and development`,
                    },
                  ],
                  link: "",
                },
              ]}
              className="md:grid-cols-1"
              imageSource={[
                Image9_1,
                Image9_2,
                Image9_3,
                Image9_4,
                Image9_5,
                Image9_6,
                Image9_7,
              ]}
            />
          </PartItem>

          <PartItem
            time="1:40 PM - 1:50 PM"
            title="Leading the Future: Blockchain for Good"
          >
            <PartContentItem
              title="An Intro the BGA"
              desc="BGA's Partner, Allan, will introduce Blockchain for Good Alliance and outline its mission to harness blockchain technology for positive impact, emphasizing the importance of collaboration across industries."
              spearks={[
                {
                  img: UserImage,
                  name: "Allan",
                  org: [
                    {
                      name: "Blockchain For Good Alliance (BGA)",
                      title: "Partner",
                    },
                    {
                      name: "Moledao",
                      title: "Co-Builder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/allanfang/",
                },
              ]}
              imageSource={[
                Image10_1,
                Image10_2,
                Image10_3,
                Image10_4,
                Image10_5,
              ]}
            />
          </PartItem>

          <PartItem
            time="1:50 PM - 2:40 PM"
            title="Governments on the Cutting Edge: Blockchain as a Global Enabler"
          >
            <PartContentItem
              title="A Take from Global Governments"
              desc="Representatives from various institutions across India, Malaysia, Japan, South Korea, Hong Kong, Abu Dhabi, and Thailand, will come together in a high-level panel, discussing national initiatives to adopt blockchain for public good."
              spearks={[
                {
                  img: DilipChenoyImage,
                  name: "Dilip Chenoy",
                  org: [
                    {
                      name: "Bharat Web3 Association",
                      title: "Chairman",
                    },
                  ],
                  link: "https://www.linkedin.com/in/dilip-chenoy-59613215/",
                },
                {
                  img: DFBAWImage,
                  name: "Datuk Ts. Fadzli Abdul Wahit",
                  org: [
                    {
                      name: "Digital Industry Development at Malaysia Digital Economy Corporation (MDEC)",
                      title: "Head/SVP Digital Industry Development",
                    },
                  ],
                  link: "https://www.linkedin.com/in/datuk-ts-fadzli-abdul-wahit-6813244b/",
                },
                {
                  img: BurcuMavisImage,
                  name: "Burcu Mavis",
                  org: [
                    {
                      name: "UNDP",
                      title: "Blockchain Academy and Accelerator Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/burcu-m-7a9325149/",
                },
                {
                  img: AbdullaAlDhaheriImage,
                  name: "Abdulla Al Dhaheri",
                  org: [
                    {
                      name: "The Blockchain Center Abu Dhabi",
                      title: "CEO",
                    },
                  ],
                  link: "https://www.linkedin.com/in/abdulla-a-297569b7/",
                },
                {
                  img: AlexandereEislImage,
                  name: "AlexanderEisl",
                  org: [
                    {
                      name: "ABC Research",
                      title: "Managing Director",
                    },
                  ],
                  link: "https://www.linkedin.com/in/alexandereisl",
                },
              ]}
              imageSource={[
                Image11_1,
                Image11_2,
                Image11_3,
                Image11_4,
                Image11_5,
                Image11_6,
                Image11_7,
                Image11_8,
              ]}
            />
          </PartItem>

          <PartItem time="2:40 PM - 3:00 PM" title="A View from EthicHub">
            <PartContentItem
              title="EthicHub's Keynote"
              desc="EthicHub, one of the flagship projects of BGA's incubation, will present its groundbreaking work in using blockchain to support farmers in developing countries through decentralized finance (DeFi). "
              spearks={[
                {
                  img: GabrielaChangValdovinosImage,
                  name: "Gabriela Chang Valdovinos",
                  org: [
                    {
                      name: "EthicHub",
                      title: "CSO and Co-Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/gabriela-chang-valdovinos-76b34410/",
                },
              ]}
              imageSource={[
                Image12_1,
                Image12_2,
                Image12_3,
                Image12_4,
                Image12_5,
                Image12_6,
              ]}
            />
          </PartItem>

          <PartItem
            time="3:00 PM - 3:45 PM"
            title="A Real-World Impact - Strategies, Opportunities, and Challenges"
          >
            <PartContentItem
              title="Impact Panel"
              desc="A powerful panel discusses the impact of blockchain for public good, diving deep into the potential of blockchain as a tool for addressing some of the world’s most critical social challenges, providing insights into scaling blockchain initiatives for a broader, global reach."
              spearks={[
                {
                  img: AdzImage,
                  name: "Adz",
                  org: [
                    {
                      name: "Partisia Blockchain Foundation",
                      title: "CEO",
                    },
                  ],
                  link: "https://www.linkedin.com/in/adrienneyoungman/",
                },
                {
                  img: LucasImage,
                  name: "LucasZhgr",
                  org: [
                    {
                      name: "PositiveBlockchain",
                      title: "Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/lucas-zaehringer-65725145/",
                },
                {
                  img: MarianaImage,
                  name: "MarianadlRW",
                  org: [
                    {
                      name: "Inatba",
                      title: "BoD",
                    },
                  ],
                  link: "https://www.linkedin.com/in/mariana-de-la-roche-es?utm_source=share&utm_campaign=share_via&utm_conte",
                },
                {
                  img: VenusKhorImage,
                  name: "VenusKhor",
                  org: [
                    {
                      name: "Masverse/Maschain",
                      title: "Chief Brand Officer",
                    },
                  ],
                  link: "https://my.linkedin.com/in/vgotlight",
                },
                {
                  img: MeetImage,
                  name: "Meet",
                  org: [
                    {
                      name: "Algorand Foundation",
                      title: "Engagement Support Engineer",
                    },
                  ],
                  link: "https://www.linkedin.com/in/meet-thosar-bb049225/",
                },
                {
                  img: AnkeLiuImage,
                  name: "Anke Liu",
                  org: [
                    {
                      name: "Stellar Development Foundation",
                      title: "Ecosystem Growth Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/ankeliu/",
                },
              ]}
              imageSource={[
                Image13_1,
                Image13_2,
                Image13_3,
                Image13_4,
                Image13_5,
                Image13_6,
                Image13_7,
                Image13_8,
              ]}
            />
          </PartItem>

          <PartItem
            time="3:45 PM - 4:00 PM"
            title="Advancing Public Goods through Blockchain"
          >
            <PartContentItem
              title="A View from Bybit"
              desc={`Ben, CEO of Bybit and the initiator of the Blockchain for Good Alliance, will deliver an insightful keynote address on the transformative potential of blockchain in supporting public goods.`}
              spearks={[
                {
                  img: BenImage,
                  name: "Ben",
                  org: [
                    {
                      name: "Blockchain For Good Alliance (BGA)",
                      title: "Initiator",
                    },
                    {
                      name: "Bybit",
                      title: "Co-founder and CEO",
                    },
                  ],
                  link: "",
                },
              ]}
              imageSource={[Image14_1, Image14_2, Image14_3, Image14_4]}
            />
          </PartItem>

          <PartItem
            time="4:00 PM - 4:45 PM"
            title="Catalyzing Change: Protocol-Level Innovations Empowering Public Goods Funding in Ethereum"
          >
            <PartContentItem
              title="Tech Panel"
              desc={`This tech-focused panel will explore how blockchain, notably Ethereum, is revolutionizing the funding of public goods at the protocol-level.`}
              spearks={[
                {
                  img: RodrigoVasquezImage,
                  name: "Rodrigo Vasquez",
                  org: [
                    {
                      name: "Ethereum Foundation",
                      title: "Ecosystem Funding Initiative Lead",
                    },
                  ],
                  link: "https://www.linkedin.com/in/rodrigo-vasquez-89514569/",
                },
                {
                  img: ScootImage,
                  name: "Scott Moore",
                  org: [
                    {
                      name: "Public Works",
                      title: "Founder",
                    },
                    {
                      name: "Gitcoin",
                      title: "Co-Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/notscottmoore",
                },
                {
                  img: MikeImage,
                  name: "Mike",
                  org: [
                    {
                      name: "Immunefi",
                      title: "Head Of Sales",
                    },
                  ],
                  link: "https://www.linkedin.com/in/mike-o-keeffe/",
                },
                {
                  img: ComposeusImage,
                  name: "Composeus",
                  org: [
                    {
                      name: "DV Labs",
                      title: "Chief Growth Officer",
                    },
                  ],
                  link: "https://x.com/composeus",
                },
                {
                  img: FelixsimImage,
                  name: "Felixsim",
                  org: [
                    {
                      name: "Salad Ventures",
                      title: "Founder",
                    },
                  ],
                  link: "https://www.linkedin.com/in/simfelix",
                },
              ]}
              imageSource={[
                Image15_1,
                Image15_2,
                Image15_3,
                Image15_4,
                Image15_5,
                Image15_6,
                Image15_7,
              ]}
            />
          </PartItem>

          <PartItem time="4:45 PM - 5:30 PM" title="Celebrating Excellence">
            <PartContentItem
              title="The Hall of Fame"
              desc="The Chains of Change Hall of Fame will honor visionary leaders, trailblazing projects and BGA members that have leveraged blockchain technology to drive real-world positive impact."
              imageSource={[
                Image16_1,
                Image16_2,
                Image16_3,
                Image16_4,
                Image16_5,
                Image16_6,
                Image16_7,
                Image16_8,
                Image16_9,
                Image16_10,
                Image16_11,
                Image16_12,
              ]}
            />
          </PartItem>

          <PartItem
            time="5:30 PM - 5:40 PM"
            title="A Call to Action for the Future"
          >
            <PartContentItem
              title="Closing Remarks"
              desc="Helen, Bybit's COO, will deliver a final message to wrap up the event, focusing on the benefits of collective action on a global scale, powered by blockchain."
              spearks={[
                {
                  img: HelenImage,
                  name: "Helen",
                  org: [
                    {
                      name: "Blockchain For Good Alliance (BGA)",
                      title: "Founder",
                    },
                    {
                      name: "Bybit",
                      title: "Co-founder and COO",
                    },
                  ],
                },
              ]}
              imageSource={[
                Image17_1,
                Image17_2,
                Image17_3,
                Image17_4,
                Image17_5,
                Image17_6,
                Image17_7,
                Image17_8,
                Image17_9,
              ]}
            />
          </PartItem>

          <PartItem time="5:40 PM - 7:00 PM" title="The Gala">
            <PartContentItem
              title="Encore"
              desc="Networking session with an afterparty and light refreshments and networking before the event ends."
            />
          </PartItem>
        </div>
      </div>
    </div>
  );
}

function UserAvater({
  img,
  name,
  org,
  link = "",
}: {
  img: string | StaticImageData;
  name: string;
  org: any[];
  link?: string;
}) {
  return (
    <a target="__blank" href={link || undefined}>
      <div className={cn("flex gap-2", styles.speaker)}>
        <Image
          width={56}
          height={56}
          className="w-14 h-14 rounded-full"
          src={img}
          alt="User"
        />
        <div>
          <p className={cn(styles.typ, "font-semibold")}>{name}</p>
          {org.map((item) => (
            <p className="text-xs">
              <span className={cn(styles.typ)}>{item.name}, </span>
              <span className={cn(styles["typ-description"])}>
                {item.title}
              </span>
            </p>
          ))}
        </div>
      </div>
    </a>
  );
}

function PartItem({
  time,
  title,
  children,
}: {
  time: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block md:flex space-y-2 md:space-y-0 md:space-x-2">
      <div
        className={cn(
          styles["process-part-title"],
          "text-oscarActive w-48 flex-none text-right font-bold pr-6"
        )}
      >
        {time}
      </div>
      <div
        className={cn(
          styles["process-part-content"],
          "w-full md:w-[calc(100%-12.5rem)] p-6"
        )}
      >
        <div className="flex items-center gap-4">
          <Image className="w-6 h-5" src={AgendaImage} alt="agenda" />
          <h3 className="text-oscarActive text-xl font-semibold">{title}</h3>
        </div>
        <div className="w-full h-0 border-b border-[rgba(134,106,48,0.3)] my-4" />
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </div>
  );
}

function PartContentItem({
  title,
  desc,
  spearks = [],
  className,
  imageSource,
}: {
  title: string;
  desc: string;
  spearks?: any[];
  className?: string;
  imageSource?: StaticImageData[];
}) {
  return (
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className={cn(styles.description, "py-2")}>{desc}</p>
      <div
        className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 my-3", className)}
      >
        {spearks.map((speark) => (
          <UserAvater
            img={speark.img}
            name={speark.name}
            org={speark.org}
            link={speark.link}
          />
        ))}
      </div>
      {imageSource && <CarouselList dataSource={imageSource} />}
    </div>
  );
}

function CarouselList({ dataSource }: { dataSource: StaticImageData[] }) {
  const [api, setApi] = useState<CarouselApi>(null);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = api?.plugins()?.autoScroll;

    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          duration: 40,
          watchDrag: false,
          watchFocus: false,
          watchResize: false,
          watchSlides: false,
        }}
        plugins={[
          AutoScroll({
            playOnInit: false,
          }),
        ]}
        onMouseEnter={toggleAutoplay}
        onMouseLeave={toggleAutoplay}
      >
        <CarouselContent>
          {dataSource.map((data) => (
            <CarouselItem
              key={data.src}
              className="w-32 md:w-[285px] basis-auto"
            >
              <Image src={data} width={285} height={160} alt={data.src} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
