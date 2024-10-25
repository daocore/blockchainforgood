import { cn } from "@/lib";
import styles from "../styles.module.css";
import { TopThree } from "./top-three";
import { QRCode } from "./qr-code";
import { Title } from "./title";
import { ReactNode } from "react";
import { IVoteResult } from "@/app/vote/[id]/types";

const data = [
  {
    id: "0c75c1aa-79a4-4c3e-892a-d658f6f8b26a",
    project: {
      approve: 3,
      id: "0c75c1aa-79a4-4c3e-892a-d658f6f8b26a",
      name: "YetiGood",
      logo: "/organization/044ab86bad52483ea3019612050de884.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"country":710,"latlng":[103.80218827696572,1.4208504749592477]}',
      assets: "/organization/625a84bec9534b42825096a5331fdcaa.webp",
      intro:
        "YetiGood turns gaming into giving with a 16bit easy-to-play, hard-to-master skiing game! Every run funds causes you love. Win or lose, they earn. Play, donate, and change lives. Be YetiGood!",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "KJNQLVEOKU",
      createDate: "2024-10-13T09:56:47.359Z",
      updateDate: "2024-10-13T09:56:47.000Z",
    },
    count: 2423,
    total: 41354,
    formId: "7",
    ranking: 1,
    trend: 0,
  },
  {
    id: "565eb12c-b731-444d-9351-a92b00968f49",
    project: {
      approve: 3,
      id: "565eb12c-b731-444d-9351-a92b00968f49",
      name: "The Green Tips",
      logo: "/organization/8da78b7d0b9d4fbf9a71ed9013b919c8.jpeg",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"Abu Dhabi MASDAR city","country":83600,"latlng":[53.57561492469472,24.072332298732405]}',
      assets: "",
      intro:
        "Green Tips is blockchain powered B2B2C payments orchestration platform that connects businesses, individuals, and carbon offsetting projects directly without middle man. Part of Green Falcon ecosystem",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "LA55E9LLOD",
      createDate: "2024-10-20T23:32:11.230Z",
      updateDate: "2024-10-20T23:32:11.000Z",
    },
    count: 2166,
    total: 41354,
    formId: "7",
    ranking: 2,
    trend: 0,
  },
  {
    id: "a01a3b72-2334-4ca7-809f-1c721d95a7e6",
    project: {
      approve: 3,
      id: "a01a3b72-2334-4ca7-809f-1c721d95a7e6",
      name: "BitDoctor.ai",
      logo: "/organization/557e5067a292431c823216f2bab6a8c4.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"RAK BANK ROC OFFICE , GROUND FLOOR, AL RIFAA,  SHEIKH MOHAMMED BIN ZAYED ROAD, RAS AL KHAIMAH","country":83600,"latlng":[55.093549084884955,24.228751826534957]}',
      assets: "/organization/7e0159d38e994d1dbeaa2dfa265a22ff.jpeg",
      intro:
        "The decentralise AI & DePIN solution for a problem that 4.5 billion people in this world face developing AI Doctor that can preliminary diagnose diseases with a working product",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "B385NBCOML",
      createDate: "2024-09-10T08:28:24.496Z",
      updateDate: "2024-09-27T05:16:39.000Z",
    },
    count: 1622,
    total: 41354,
    formId: "7",
    ranking: 3,
    trend: 0,
  },
  {
    id: "66a2f530-b575-460a-8ed1-a0b2ea87643a",
    project: {
      approve: 3,
      id: "66a2f530-b575-460a-8ed1-a0b2ea87643a",
      name: "Marina Protocol",
      logo: "/organization/1c1fbea2093242eaa07a804e4ac55e3b.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"207, Jungdae-ro, Songpa-gu, Seoul","country":100210,"latlng":[127.5,37]}',
      assets: "/organization/a3e6130e4d1d4e8b872b42001b492949.false",
      intro:
        "Marina Protocol is a global Web3 Learn & Earn platform built on the XRP Ledger ecosystem. Users can solve daily quizzes and earn rewards, while also gaining additional rewards by inviting friends.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "G8I1C697CV",
      createDate: "2024-09-25T15:09:54.628Z",
      updateDate: "2024-09-25T15:09:55.000Z",
    },
    count: 1358,
    total: 41354,
    formId: "7",
    ranking: 4,
    trend: 0,
  },
  {
    id: "8511ec0a-1ccb-4055-b514-9d21ba12d3c8",
    project: {
      approve: 3,
      id: "8511ec0a-1ccb-4055-b514-9d21ba12d3c8",
      name: "VORNE Technologies",
      logo: "/organization/d2425c727b2e45b39cd334a10289db47.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"Gebhardstorkel 3, 9494 Schaan","country":160,"latlng":[9.545733728430438,47.18593385392963]}',
      assets: "/organization/e785ede8b7024c4aa86e187bc2de736e.png",
      intro:
        "We are revolutionizing health care philanthropy by making donations transparent along the whole life cycle, based on a network of Web3 + Web2 technology to ensure maximum accountability.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "FFVR5KS9HV",
      createDate: "2024-09-26T11:27:52.296Z",
      updateDate: "2024-09-27T07:27:26.000Z",
    },
    count: 1119,
    total: 41354,
    formId: "7",
    ranking: 5,
    trend: 0,
  },
  {
    id: "71500ee1-9024-4eea-9977-e788fe157d43",
    project: {
      approve: 3,
      id: "71500ee1-9024-4eea-9977-e788fe157d43",
      name: "Daren Market",
      logo: "/organization/a3c7a8039b394d379d72134765e11416.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"13, 1st floor, 203, Gangnam-daero 112-gil, Gangnam-gu","country":100210,"latlng":[127.5,37]}',
      assets: "/organization/15754b4b4ad44030a06d1f5ae15cb8b1.zip",
      intro:
        "DAREN stands as the first on-chain talent market powered by AI, adeptly connecting top global talent with merchants to guarantee a swift and convenient crypto-based trading experience.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "1IO6DU9QF7",
      createDate: "2024-09-30T15:01:28.085Z",
      updateDate: "2024-09-30T15:01:28.000Z",
    },
    count: 1052,
    total: 41354,
    formId: "7",
    ranking: 6,
    trend: 0,
  },
  {
    id: "87c31276-edeb-4829-b0dd-c115f9e31865",
    project: {
      approve: 3,
      id: "87c31276-edeb-4829-b0dd-c115f9e31865",
      name: "PWR Labs",
      logo: "/organization/d7323b5c8d774a379cfcfdb6de13628a.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"One Central, Office 4, The Crypto Arc - Bybit. ","country":83600,"latlng":[55.03052942093278,23.93659024762128]}',
      assets:
        '["/organization/c342956e02f5440584afb9c438fc03ee.png","/organization/5ca5b8f6fbe448ac83f9df7824d896c1.jpeg","/organization/1fcbf623726840d493354fb10384ae68.jpeg","/organization/0d9e79a575ba441cb2508422ce3f13d6.png"]',
      intro:
        "PWR Chain is eco-friendly, supporting 300,000+ TPS on <$24/month hardware. Its energy-efficient, scalable design aligns with the UN’s SDGs, making it perfect for sustainable blockchain innovation.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "BJVUV7PR4E",
      createDate: "2024-09-25T14:58:27.684Z",
      updateDate: "2024-09-27T05:12:38.000Z",
    },
    count: 735,
    total: 41354,
    formId: "7",
    ranking: 7,
    trend: 0,
  },
  {
    id: "25b6bd23-0edf-4cf5-a768-1853ddc85dbe",
    project: {
      approve: 3,
      id: "25b6bd23-0edf-4cf5-a768-1853ddc85dbe",
      name: "LAKE (LAK3)",
      logo: "/organization/9983364d08dd4cd1977439e8cb3f2ded.jpeg",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"","country":41284,"latlng":[9.561460188746441,46.31239788471861]}',
      assets: "/organization/2e18fed9c0f14cb0a795d1785789000c.false",
      intro:
        "LAKE is an Real World Asset project that leverages blockchain technology to invite everyone into the New Water Economy, addressing global water accessibility while promoting sustainability.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "F7SBFPIAOL",
      createDate: "2024-10-07T15:59:04.592Z",
      updateDate: "2024-10-23T09:01:03.000Z",
    },
    count: 735,
    total: 41354,
    formId: "7",
    ranking: 8,
    trend: 0,
  },
  {
    id: "55f4e696-4254-4ad7-b47d-98cd3a7dd0d9",
    project: {
      approve: 3,
      id: "55f4e696-4254-4ad7-b47d-98cd3a7dd0d9",
      name: "ResearchHub",
      logo: "/organization/55e862ac06a045a1b16e795606a0f7fb.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"548 MARKET ST  APT 26680 SAN FRANCISCO CA 94104","country":9372610,"latlng":[-79.29517713174789,39.98570901545051]}',
      assets: "",
      intro:
        "ResearchHub uses reputational and financial incentives to open-source the funding, publishing and replication of scientific research. A self-governing financialized github for science.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "3E71BIR3Q5",
      createDate: "2024-10-19T00:31:24.576Z",
      updateDate: "2024-10-19T00:31:25.000Z",
    },
    count: 658,
    total: 41354,
    formId: "7",
    ranking: 9,
    trend: 0,
  },
  {
    id: "01bfad00-715a-46ec-a4c5-4c577f3ed55a",
    project: {
      approve: 3,
      id: "01bfad00-715a-46ec-a4c5-4c577f3ed55a",
      name: "Glo Dollar",
      logo: "/organization/0a400567f61c484d92828f8d3fb9ed86.png",
      cover: "",
      stage: 0,
      type: 0,
      location:
        '{"area":"447 Sutter Street, San Francisco, 94108 California","country":9372610,"latlng":[-147.4648521460187,68.27679632237678]}',
      assets:
        '["/organization/1156f92e6be14ea5a5a5dff0f9103c36.png","/organization/b5bcb56e3d42496986bfc9803bd4e3de.png"]',
      intro:
        "Glo Dollar is a stablecoin that generates funds for public goods and charitable causes—at no cost to the Glo Dollar user. \n\nWe call this zero-cost philanthropy.",
      solve: "",
      credit: 0,
      settle: 0,
      address: null,
      demo: null,
      invitationCode: "SDIOTIRUD0",
      createDate: "2024-09-27T14:29:12.567Z",
      updateDate: "2024-09-27T14:29:13.000Z",
    },
    count: 649,
    total: 41354,
    formId: "7",
    ranking: 10,
    trend: 0,
  },
] as unknown as IVoteResult[];

export function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className={cn("-mt-20 pt-20 w-full h-screen", styles.voting)}>
      <div className="w-full md:w-content mx-auto">
        <Title>{title}</Title>

        <div className="flex gap-2">
          <div className="space-y-8">
            <TopThree dataSource={data} />
            <QRCode />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
