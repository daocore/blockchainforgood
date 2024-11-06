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

export const PROJECT_LIST = [
  {
    id: "526965e1-b186-40ba-ad20-bcd7c1e046f2",
    name: "Arkreen network",
    logo: ArkreenNetworkImage,
    activeLogo: ArkreenNetworkActiveImage,
    intro: `DePIN+ReFi for Climate Change and Public Goods
Arkreen is a DePIN network for distributed renewable energy resources connection and monetization towards a carbon-neutral Earth. Aiming to establish DePIN for ReFi infrastructure and global inclusive network for climate action.`,
  },
  {
    id: "90b2d2af-9295-4bdc-a9ea-945ce9d2725a",
    name: "Edu3Labs",
    logo: Edu3LabImage,
    activeLogo: Edu3LabActiveImage,
    intro:
      "Edu3Labs is redefining the educational experience in a way that suits the modern age. We transform learning into a more accessible, effective and fun process by gamifying and interactive education through Web3 technologies.",
  },
  {
    id: "3ff91d74-4efa-4f3a-8f11-a1fc0b25bd39",
    name: "EthicHub",
    logo: EthicHubImage,
    activeLogo: EthicHubActiveImage,
    intro: `Rethinking regenerative supply chains
EthicHub is a social enterprise that connects small farmers with the financing needed to work their land and sell their crops to direct markets`,
  },
  {
    id: "65eb3749-eb75-44de-81d4-a90755f9c40b",
    name: "erable°",
    logo: ErableImage,
    activeLogo: ErableActiveImage,
    intro: `Onchain Revenue-Based Crowdfunding.
Bridging the gap in impact investing, erable° aligns project success with investor returns. Through flexible, transparent funding, it supports the growth of impact-driven projects via its web2 and web3 crowdfunding platforms and Financial Innovation Lab.`,
  },
  {
    id: "c32a947d-0a14-4906-b3ba-4a76644fc146",
    name: "KulaDAO",
    logo: KulaDAOImage,
    activeLogo: KulaDAOActiveImage,
    intro:
      "KulaDAO transforms global challenges into opportunities by leveraging blockchain to empower communities. Through sustainable development, fair resource allocation, and transparent systems, we drive impactful change in sectors like water, energy, and agriculture, creating shared value across regions worldwide.",
  },
  {
    id: "25b6bd23-0edf-4cf5-a768-1853ddc85dbe",
    name: "LAKE (LAK3)",
    logo: LakeImage,
    activeLogo: LakeActiveImage,
    intro:
      "LAKE is a Real World Asset project that leverages blockchain technology to invite everyone into the New Water Economy. By addressing global water accessibility and promoting sustainability, we're paving the way for a more equitable and resilient future for all.",
  },
  {
    id: "bb263e69-00b7-414a-b27d-dd0053bfa8c8",
    name: "Plastic Odyssey",
    logo: PlasticOdysseyImage,
    activeLogo: PlasticOdysseyActiveImage,
    intro:
      "The mission is to fight plastic pollution by transforming waste into valuable resources, empowering communities with sustainable recycling solutions, and protecting marine ecosystems. Our vision: a world where plastic pollution is eliminated, supporting cleaner oceans and resilient communities.",
  },
  {
    id: "55f4e696-4254-4ad7-b47d-98cd3a7dd0d9",
    name: "ResearchHub",
    logo: ResearchHubImage,
    activeLogo: ResearchHubActiveImage,
    intro:
      "Accelerating scientific research by financially incentivizing open peer reviews and academic discussion.ResearchHub aims to accelerate the pace of scientific research by creating incentives that encourage academics and citizen scientists to openly share knowledge.",
  },
  {
    id: "ad0a6049-d73f-4d5b-ba0e-eee215b37d1b",
    name: "UCO Network",
    logo: UCONetworkImage,
    activeLogo: UCONetworkActiveImage,
    intro: `Revolutionizing the Used Cooking Oil Industry
UCO Network is a blockchain-based ecosystem dedicated to improving the collection and recycling of used cooking oil for biofuel production.`,
  },
  {
    id: "25cf3af6-33c9-44aa-b3fd-c539a59561b0",
    name: "Wavy Health, Inc.",
    logo: WavyHealthImage,
    activeLogo: WavyHealthActiveImage,
    intro:
      "Women and ethnic minorities in Western countries die earlier by receiving suboptimal medical treatment. Because manual medical trial inclusion is expensive. WaveData’s marketplace for medical trials lets people contribute their data securely and automatically at low cost for medical researchers.",
  },
];

export const PROJECT_LOGO_MAP = PROJECT_LIST.reduce((acc, cur) => {
  acc[cur.name] = {
    logo: cur.logo,
    activeLogo: cur.activeLogo,
    intro: cur.intro,
  };
  return acc;
}, {} as Record<string, IExtraProjectInfo>);
