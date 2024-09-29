import { Metadata } from "next";
import { Banner } from "./Banner";
import { OscarIntro } from "./OscarIntro";
import OscarImage1 from "@/assets/oscar/oscar1.png";

export default function Oscar() {
  return (
    <div>
      <Banner />
      <OscarIntro />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const coverImage = OscarImage1.src;

  const name = "Oscar";
  const desc = "BGA Oscar";
  return {
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
