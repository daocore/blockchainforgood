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
        if (!link?.link) return null
        return (
          <Tooltip key={link.id}>
            <TooltipTrigger asChild>
              <div className="space-x-2">
                <span>{LINKS_ICON[link.type as 1]}</span>
                <Link target="__blank" className="hover:text-bgaActive" href={link.link}>
                  {link.link}
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>Created on</TooltipContent>
          </Tooltip>
        )
      })}
    </>
  );
}
