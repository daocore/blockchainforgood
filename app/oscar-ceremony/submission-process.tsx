import Image, { StaticImageData } from "next/image";
import ProcessIconImage from "@/assets/oscar-ceremony/process-icon.png";
import styles from "./index.module.css";
import { cn } from "@/lib";
import AgendaImage from "@/assets/oscar-ceremony/agenda.png";
import UserImage from "@/assets/oscar-ceremony/user.png";

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
          <PartItem time="9: 00 AM-10:00" title="The Opening Act">
            <PartContentItem
              title="AM The Red Carpet"
              desc="Registration for event participants begins."
            />
            <PartContentItem
              title="Opening Premiere"
              desc="Acinematic, epicstyle opening video will highlight the current
                  global sustainabilitychallenges, juxtaposed with innovative
                  blockchain solutions that have made a diference."
            />
          </PartItem>

          <PartItem time="10:00AM-10:20AM" title="The Spotlight">
            <div>
              <p className={cn(styles.description, "py-2")}>
                Registration for event participants begins.
              </p>
              <UserAvater
                img={UserImage}
                name="Allan"
                org="MoleDAO"
                relation="Partners"
              />
            </div>
          </PartItem>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div className={cn(styles["process-title"], "text-xl font-medium")}>
          <p>The 17SDGs Challenge, Part2</p>
        </div>

        <div className="space-y-8">
          <PartItem time="10:30 AM-12:00AM" title="The Arena of Heroes">
            <PartContentItem
              title="Rising Stars"
              desc="10 shortlisted projects from a cross the globe, who have
                  participated in the Sustainable Innovation Summit: The 17 SDGs
                  Challenge, will step into the spotlight, presenting their
                  blockchain solutions that confront sustainability challenges."
            />

            <PartContentItem
              title="Academy of Innovation"
              desc="Acinematic, epicstyle opening video will highlight the current
                  global sustainabilitychallenges, juxtaposed with innovative
                  blockchain solutions that have made a diference."
            />

            <PartContentItem
              title="The People's Choice"
              desc="In the spit of audience engagement atedee will
                  avetheopporturity to casthei votes live wi dedicated
                  ap,selectingtheirfavorite project as the People’s Choiceamong
                  the inovative blockchain solutions."
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
  return (
    <div className="flex gap-2">
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
