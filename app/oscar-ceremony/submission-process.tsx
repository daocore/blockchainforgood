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
import MikeImage from "@/assets/oscar/Avatar Mike.png";
import ScootImage from "@/assets/oscar/Avatar Scott Moore.png";
import BenImage from "@/assets/oscar/Avatar Ben.png";
import HarnImage from "@/assets/oscar/Avatar Harn.png";
import GianlucaImage from "@/assets/oscar/Avatar Gianluca.png";
import KCImage from "@/assets/oscar/Avatar KC.png";
import AdamImage from "@/assets/oscar/Avatar Adam.png";
import Adam2Image from "@/assets/oscar/Avatar Adam2.png";
import RodrigoVasquezImage from "@/assets/oscar/Avatar Rodrigo Vasquez.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";

export function SubmissionProcess() {
  return (
    <div className="w-full md:w-content mx-auto px-2 md:px-0">
      <div id="agenda" className="flex items-center gap-2">
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
            />
            <PartContentItem
              title="Opening Premiere"
              desc="A cinematic, epic style opening video will highlight the current global sustainability challenges, juxtaposed with innovative blockchain solutions that have made a difference."
            />
            <PartContentItem
              title="The Spotlight"
              desc="A BGA member introduces the theme and agenda and gives an opening welcome."
              spearks={[
                {
                  img: UserImage,
                  name: "Allan",
                  org: "Moledao",
                  relation: "Partner",
                  link: "https://www.linkedin.com/in/allanfang/",
                },
              ]}
            />
          </PartItem>

          <PartItem time="9:30 AM - 12:30 PM" title="The Arena of Heroes">
            <PartContentItem
              title="Rising Stars"
              desc={`10 shortlisted projects from across the globe, who have participated in the Sustainable Innovation Summit: The 17 SDGs Challenge, will step into the spotlight, presenting their blockchain solutions that confront sustainability challenges. 
In true cinematic fashion, each project pitch will have to tell the story of a "hero" facing a global crisis (one of the 17 SDGs), with blockchain as the "tool" they wield to drive change and create a better future.`}
            />
            <PartContentItem
              title="Academy of Innovation (name of panel to put on website)"
              desc={`The judging panel, known as The Academy, comprises esteemed leaders and visionaries from the blockchain, sustainability, and tech industries. These experts will evaluate the pitches based on innovation, impact, and potential for global scalability. 
Just as the Academy determines the best in film, our "Academy of Innovation" will determine which project stands as the beacon of blockchain excellence, shaping the future of sustainable development.`}
              spearks={[
                {
                  img: HarnImage,
                  name: "Harn",
                  org: "Trigger Asset Management",
                  relation: "CEO",
                  link: "",
                },
                {
                  img: KCImage,
                  name: "KC",
                  org: "AYA Foundation",
                  relation: "Investments, Impact Lead",
                  link: "",
                },
                {
                  img: GianlucaImage,
                  name: "Gianluca",
                  org: "NapulETH",
                  relation: "CEO & Co-Founder",
                  link: "",
                },
                {
                  img: AdamImage,
                  name: "Adam",
                  org: "3 Comma Capital SCR",
                  relation: "Venture Partner",
                  link: "",
                },
                {
                  img: Adam2Image,
                  name: "Adam",
                  org: "Growth Ensemble",
                  relation: "Co-Founder",
                  link: "",
                },
              ]}
            />

            <PartContentItem
              title="The People's Choice"
              desc={`In the spirit of audience engagement, attendees will have the opportunity to cast their votes live via a dedicated app, selecting their favorite project as the "People’s Choice" among the innovative blockchain solutions.`}
            />
          </PartItem>

          <PartItem time="12:30 PM - 1:30 PM" title="Intermission">
            <p className={cn(styles.description)}>
              Lunch break and mini networking.
            </p>
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
          <PartItem time="1:30 PM - 1:35 PM" title="A Vision for Global Change">
            <PartContentItem
              title="Opening Remarks"
              desc="The United Nations Development Programme (UNDP) will highlight the critical role blockchain can play in accelerating global development."
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
                  org: "Moledao",
                  relation: "Partner",
                  link: "https://www.linkedin.com/in/allanfang/",
                },
              ]}
            />
          </PartItem>

          <PartItem
            time="1:55 PM - 2:40 PM"
            title="Governments on the Cutting Edge: Blockchain as a Global Enabler"
          >
            <PartContentItem
              title="A Take from Global Governments"
              desc="Representatives from various institutions across India, Malaysia, Japan, South Korea, Hong Kong, Abu Dhabi, and Thailand, will come together in a high-level panel, discussing national initiatives to adopt blockchain for public good."
            />
          </PartItem>

          <PartItem time="2:45 PM - 2:55 PM" title="A View from EthicHub">
            <PartContentItem
              title="EthicHub's Keynote"
              desc="EthicHub, one of the flagship projects of BGA's incubation, will present its groundbreaking work in using blockchain to support farmers in developing countries through decentralized finance (DeFi). "
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
                  org: "Partisia Blockchain Foundation",
                  relation: "CEO",
                  link: "https://www.linkedin.com/in/adrienneyoungman/",
                },
                {
                  img: LucasImage,
                  name: "LucasZhgr",
                  org: "PositiveBlockchain",
                  relation: "Founder",
                  link: "https://www.linkedin.com/in/lucas-zaehringer-65725145/",
                },
                {
                  img: MarianaImage,
                  name: "MarianadlRW",
                  org: "Inatba",
                  relation: "BoD",
                  link: "https://www.linkedin.com/in/mariana-de-la-roche-es?utm_source=share&utm_campaign=share_via&utm_conte",
                },
                {
                  img: VenusKhorImage,
                  name: "VenusKhor",
                  org: "Masverse/Maschain",
                  relation: "Chief Brand Officer",
                  link: "https://my.linkedin.com/in/vgotlight",
                },
              ]}
            />
          </PartItem>

          <PartItem
            time="3:50 PM - 3:55 PM"
            title="Advancing Public Goods through Blockchain"
          >
            <PartContentItem
              title="A View from Bybit"
              desc={`Ben, CEO of Bybit and the initiator of the Blockchain for Good Alliance, will deliver an insightful keynote address on the transformative potential of blockchain in supporting public goods.`}
              spearks={[
                {
                  img: BenImage,
                  name: "Ben",
                  org: "Bybit",
                  relation: "CEO",
                  link: "",
                },
              ]}
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
                  img: MikeImage,
                  name: "Mike",
                  org: "Immunefi",
                  relation: "Head Of Sales",
                  link: "",
                },
                {
                  img: ScootImage,
                  name: "Scott Moore",
                  org: "Gitcoin",
                  relation: "Co-Founder",
                  link: "",
                },
                {
                  img: RodrigoVasquezImage,
                  name: "Rodrigo Vasquez",
                  org: "Ethereum Foundation",
                  relation: "Ecosystem Funding Initiative Lead",
                  link: "",
                },
              ]}
            />
          </PartItem>

          <PartItem time="4:50 PM - 5:30 PM" title="Celebrating Excellence">
            <PartContentItem
              title="The Hall of Fame"
              desc="The Chains of Change Hall of Fame will honor visionary leaders, trailblazing projects and BGA members that have leveraged blockchain technology to drive real-world positive impact."
            />
          </PartItem>

          <PartItem
            time="5:35 PM - 5:40 PM"
            title="A Call to Action for the Future"
          >
            <PartContentItem
              title="Closing Remarks"
              desc="Helen, Bybit's COO, will deliver a final message to wrap up the event, focusing on the benefits of collective action on a global scale, powered by blockchain."
              spearks={[
                {
                  img: HelenImage,
                  name: "Helen",
                  org: "Bybit",
                  relation: "COO",
                },
              ]}
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
  relation,
  link = "",
}: {
  img: string | StaticImageData;
  name: string;
  org: string;
  relation: string;
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
          <p className={cn(styles.typ, "text-xs")}>{org}</p>
          <p className={cn(styles["typ-description"], "text-xs")}>{relation}</p>
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
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
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
      <div className={cn(styles["process-part-content"], "w-full p-6")}>
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
}: {
  title: string;
  desc: string;
  spearks?: any[];
}) {
  return (
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className={cn(styles.description, "py-2")}>{desc}</p>
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {spearks.map((speark) => (
          <UserAvater
            img={speark.img}
            name={speark.name}
            org={speark.org}
            relation={speark.relation}
            link={speark.link}
          />
        ))}
      </div>
    </div>
  );
}
