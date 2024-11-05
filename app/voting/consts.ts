import PlasticOdysseyImage from "@/assets/voting/01-1.png";
import PlasticOdysseyActiveImage from "@/assets/voting/01.png";
import UCONetworkImage from "@/assets/voting/02-1.png";
import UCONetworkActiveImage from "@/assets/voting/02.png";
import Edu3LabImage from "@/assets/voting/03-1.png";
import Edu3LabActiveImage from "@/assets/voting/03.png";
import ArkreenNetworkImage from "@/assets/voting/04-1.png";
import ArkreenNetworkActiveImage from "@/assets/voting/04.png";
import WavyHealthImage from "@/assets/voting/05-1.png";
import WavyHealthActiveImage from "@/assets/voting/05.png";
import LakeImage from "@/assets/voting/06-1.png";
import LakeActiveImage from "@/assets/voting/06.png";
import EthicHubImage from "@/assets/voting/07-1.png";
import EthicHubActiveImage from "@/assets/voting/07.png";
import ErableImage from "@/assets/voting/08-1.png";
import ErableActiveImage from "@/assets/voting/08.png";
import KulaDAOImage from "@/assets/voting/09-1.png";
import KulaDAOActiveImage from "@/assets/voting/09.png";
import ResearchHubImage from "@/assets/voting/10-1.png";
import ResearchHubActiveImage from "@/assets/voting/10.png";
import { IExtraProjectInfo } from "./types";

export const PROJECT_LOGO_MAP: Record<string, IExtraProjectInfo> = {
  "Wavy Health, Inc.": {
    logo: WavyHealthImage,
    activeLogo: WavyHealthActiveImage,
    intro:
      "Women and ethnic minorities in Western countries die earlier by receiving suboptimal medical treatment. Because manual medical trial inclusion is expensive. WaveData’s marketplace for medical trials lets people contribute their data securely and automatically at low cost for medical researchers.",
  },
  KulaDAO: {
    logo: KulaDAOImage,
    activeLogo: KulaDAOActiveImage,
    intro:
      "KulaDAO transforms global challenges into opportunities by leveraging blockchain to empower communities. Through sustainable development, fair resource allocation, and transparent systems, we drive impactful change in sectors like water, energy, and agriculture, creating shared value across regions worldwide.",
  },
  "erable°": {
    logo: ErableImage,
    activeLogo: ErableActiveImage,
    intro: `Onchain Revenue-Based Crowdfunding.
Bridging the gap in impact investing, erable° aligns project success with investor returns. Through flexible, transparent funding, it supports the growth of impact-driven projects via its web2 and web3 crowdfunding platforms and Financial Innovation Lab.`,
  },
  Arkreen: {
    logo: ArkreenNetworkImage,
    activeLogo: ArkreenNetworkActiveImage,
    intro: `DePIN+ReFi for Climate Change and Public Goods
Arkreen is a DePIN network for distributed renewable energy resources connection and monetization towards a carbon-neutral Earth. Aiming to establish DePIN for ReFi infrastructure and global inclusive network for climate action.`,
  },
  "Arkreen network": {
    logo: ArkreenNetworkImage,
    activeLogo: ArkreenNetworkActiveImage,
    intro: `DePIN+ReFi for Climate Change and Public Goods
Arkreen is a DePIN network for distributed renewable energy resources connection and monetization towards a carbon-neutral Earth. Aiming to establish DePIN for ReFi infrastructure and global inclusive network for climate action.`,
  },
  EthicHub: {
    logo: EthicHubImage,
    activeLogo: EthicHubActiveImage,
    intro: `Rethinking regenerative supply chains
EthicHub is a social enterprise that connects small farmers with the financing needed to work their land and sell their crops to direct markets`,
  },
  ResearchHub: {
    logo: ResearchHubImage,
    activeLogo: ResearchHubActiveImage,
    intro:
      "Accelerating scientific research by financially incentivizing open peer reviews and academic discussion.ResearchHub aims to accelerate the pace of scientific research by creating incentives that encourage academics and citizen scientists to openly share knowledge.",
  },
  "Plastic Odyssey": {
    logo: PlasticOdysseyImage,
    activeLogo: PlasticOdysseyActiveImage,
    intro:
      "The mission is to fight plastic pollution by transforming waste into valuable resources, empowering communities with sustainable recycling solutions, and protecting marine ecosystems. Our vision: a world where plastic pollution is eliminated, supporting cleaner oceans and resilient communities.",
  },
  "UCO Network": {
    logo: UCONetworkImage,
    activeLogo: UCONetworkActiveImage,
    intro: `Revolutionizing the Used Cooking Oil Industry
UCO Network is a blockchain-based ecosystem dedicated to improving the collection and recycling of used cooking oil for biofuel production.`,
  },
  Edu3Labs: {
    logo: Edu3LabImage,
    activeLogo: Edu3LabActiveImage,
    intro:
      "Edu3Labs is redefining the educational experience in a way that suits the modern age. We transform learning into a more accessible, effective and fun process by gamifying and interactive education through Web3 technologies.",
  },
  "LAKE (LAK3)": {
    logo: LakeImage,
    activeLogo: LakeActiveImage,
    intro:
      "LAKE is a Real World Asset project that leverages blockchain technology to invite everyone into the New Water Economy. By addressing global water accessibility and promoting sustainability, we're paving the way for a more equitable and resilient future for all.",
  },
};

export const PROJECT_LIST = [
  "Arkreen",
  "Edu3Labs",
  "EthicHub",
  "erable°",
  "KulaDAO",
  "LAKE (LAK3)",
  "Plastic Odyssey",
  "ResearchHub",
  "UCO Network",
  "Wavy Health, Inc.",
];
