"use client";
import { IFrameForm } from "@/components/IframePage";
import {
  INDIVIDUAL_PATH,
  OSCAR_EVENT_ID,
  OSCAR_HACKTHON_EVENT_ID,
} from "@/constants";
import { useGetInfamSrc } from "@/hooks";
import { Metadata } from "next";
import ShareBgImage from "@/assets/oscar/form-share.jpeg";

interface IProps {
  params: { id: string };
}

export default function CommonPersonForm({ params }: IProps) {
  const channel = useGetInfamSrc({
    path: INDIVIDUAL_PATH,
    eventId: params?.id,
  });

  return <IFrameForm channel={channel} id={params?.id} />;
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { id } = params;
  if (id !== OSCAR_HACKTHON_EVENT_ID && id === OSCAR_EVENT_ID) {
    return null;
  }
  const coverImage = "https://www.blockchainforgood.xyz" + ShareBgImage.src;
  const name = "Blockchain for Good";
  const description =
    "Discover Blockchain for Good Alliance (BGA) and our mission to leverage blockchain technology for social impact. Join us to explore, innovate, and implement blockchain solutions for societal challenges.";
  return {
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: description,
      images: [
        {
          url: coverImage,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: description,
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
