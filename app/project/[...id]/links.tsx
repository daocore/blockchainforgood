import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SocialLinksEntity, SocialLinksEnum } from "@/hooks/useLink";
import { Github, Linkedin, PanelTop, Twitter } from "lucide-react";
import Link from "next/link";
import Wechat from "@/assets/wechat.svg";
import Discard from "@/assets/discard.svg";
import Telegram from "@/assets/telegram.svg";
import Image from "next/image";

const LINKS_ICON = {
  [SocialLinksEnum.DISCORD]: (
    <Image alt="discard" src={Discard} className="inline-block mr-1 w-4 h-4" />
  ),
  [SocialLinksEnum.GITHUB]: <Github className="inline-block mr-1 w-5 h-5" />,
  [SocialLinksEnum.LINKEDIN]: (
    <Linkedin className="inline-block  mr-1 w-5 h-5" />
  ),
  [SocialLinksEnum.WEBSITE]: (
    <PanelTop className="inline-block  mr-1 w-5 h-5" />
  ),
  [SocialLinksEnum.TELEGRAM]: (
    <Image
      alt="telegram"
      src={Telegram}
      className="inline-block mr-1 w-4 h-4"
    />
  ),
  [SocialLinksEnum.TWITTER]: <Twitter className="inline-block mr-1 w-5 h-5" />,
  [SocialLinksEnum.WECHAT]: (
    <Image alt="wechat" src={Wechat} className="inline-block mr-1 w-4 h-4" />
  ),
};

export function Links({ data }: { data: SocialLinksEntity[] }) {
  return (
    <>
      {data.map((link) => {
        if (!link?.link) return null;
        let fullLink = link?.link;
        if (link.type === SocialLinksEnum.TWITTER) {
          if (fullLink?.startsWith("@")) {
            fullLink = fullLink?.substring(1); // Remove the '@' symbol
          }
          if (
            !fullLink?.startsWith("https://") &&
            !fullLink?.startsWith("http://")
          ) {
            fullLink = `https://x.com/${fullLink}`;
          }
        } else if (!fullLink.startsWith("http")) {
          fullLink = `https://${fullLink}`;
        }
        return (
          <div>
            <Tooltip key={link.id}>
              <TooltipTrigger>
                <div className="space-x-2">
                  <span>{LINKS_ICON[link.type as 1]}</span>
                  <Link
                    target="__blank"
                    className="hover:text-bgaActive"
                    href={fullLink}
                  >
                    {link.link}
                  </Link>
                </div>
              </TooltipTrigger>
              {/* <TooltipContent>{fullLink}</TooltipContent> */}
            </Tooltip>
          </div>
        );
      })}
    </>
  );
}
