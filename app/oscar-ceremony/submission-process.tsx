"use client";

import Image, { StaticImageData } from "next/image";
import ProcessIconImage from "@/assets/oscar-ceremony/process-icon.png";
import styles from "./index.module.css";
import { cn } from "@/lib";
import AgendaImage from "@/assets/oscar-ceremony/agenda.png";
import UserImage from "@/assets/oscar-ceremony/user.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";

export function SubmissionProcess() {
  return (
    <div>
      <div id="agenda" className="flex items-center gap-2">
        <Image width={40} height={40} src={ProcessIconImage} alt="Process" />
        <h2 className="text-oscarActive text-3xl font-bold">
          Submission Process
        </h2>
      </div>

      <div className="mt-8 space-y-8">
        <div className={cn(styles["process-title"], "text-xl font-medium")}>
          <p>The 17SDGs Challenge, Part I</p>
        </div>

        <div className="space-y-8">
          <PartItem time="9:00 AM - 9:30 AM" title="The Opening Act">
            <PartContentItem
              title="The Red Carpet"
              desc="Registration for event participants begins. In true glamour and excitement, take a snapshot to remember this event at our red carpet and photobooth."
            />
            <PartContentItem
              title="Opening Premiere"
              desc="A cinematic, epic style opening video will highlight the current global sustainability challenges, juxtaposed with innovative blockchain solutions that have made a difference. "
            />
            <PartContentItem
              title="The Spotlight"
              desc="A BGA member introduces the theme and agenda and gives an opening welcome."
            />
          </PartItem>

          <PartItem time="9:30 AM - 12:30 PM" title="The Arena of Heroes">
            <PartContentItem
              title="Rising Stars"
              desc="10 shortlisted projects from across the globe, who have participated in the Sustainable Innovation Summit: The 17 SDGs Challenge, will step into the spotlight, presenting their blockchain solutions that confront sustainability challenges."
            />
            <PartContentItem
              title="Academy of Innovation (name of panel to put on website)"
              desc="The judging panel, known as The Academy, comprises esteemed leaders and visionaries from the blockchain, sustainability, and tech industries. These experts will evaluate the pitches based on innovation, impact, and potential for global scalability. "
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

          <PartItem time="1:30 PM - 3:30 PM" title="A Stage of Visionaries">
            <PartContentItem
              title="The Luminaries"
              desc="The BGA will open the afternoon segment by introducing leaders from the blockchain and sustainability sectors, along with the organizations they represent, in preparation for their keynotes. (10 minutes)
Delivered by the gathering of prominent thought leaders, a series of insightful and exciting keynotes will outline the current state of global sustainability efforts and how blockchain is uniquely positioned to contribute."
            />
          </PartItem>

          <PartItem time="3:30 PM - 4:30 PM" title="The Oscar Awards">
            <PartContentItem
              title="The Hall of Fame"
              desc="An awards ceremony is conducted to recognize BGA members such as ambassadors, advisors, partners, and project teams making strides in promoting blockchain for good. 
Each award presentation should include a brief narrative of the recipient's journey and impact."
            />
          </PartItem>

          <PartItem time="4:30 PM - 5:30 PM" title="The Chains of Change">
            <PartContentItem
              title="The New Age"
              desc="A closing speech will close in on the future of blockchain for sustainability, outlining the BGA's vision for the next decade, focused on the exciting grants and programmes planned and awarded by the BGA beyond the Oscars."
            />
          </PartItem>

          <PartItem time="5:30 PM - 7:00 PM" title="The Gala">
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
  relation,
}: {
  img: string | StaticImageData;
  name: string;
  org: string;
  relation: string;
}) {
  return (
    <div className="flex gap-2">
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

function PartContentItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className={cn(styles.description, "py-2")}>{desc}</p>
      <UserAvater
        img={UserImage}
        name="Allan"
        org="MoleDAO"
        relation="Partners"
      />
    </div>
  );
}
