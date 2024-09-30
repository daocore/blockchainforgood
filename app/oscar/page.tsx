import { Metadata } from "next";
import { Banner } from "./Banner";
import { OscarIntro } from "./OscarIntro";
import OscarImage1 from "@/assets/oscar/oscar1.png";
import { IMAGE_URL } from "@/constants";

export default function Oscar() {
  return (
    <div>
      <Banner />
      <OscarIntro />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const coverImage = "https://test.blockchainforgood.xyz" + OscarImage1.src;
  const name = "BGA Oscar";
  const desc =
    "Discover Blockchain for Good Alliance (BGA) and our mission to leverage blockchain technology for social impact. Join us to explore, innovate, and implement blockchain solutions for societal challenges.";
  return {
    title: name,
    description: desc,
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: desc,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: desc,
      url: "https://www.blockchainforgood.xyz/oscar",
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
      type: "website",
    },
  };
}
