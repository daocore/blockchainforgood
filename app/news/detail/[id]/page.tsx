import { getNewsDetail } from "../../api";
import { IMAGE_URL } from "@/constants";
import { GoBack } from "./back";
import { Metadata, ResolvingMetadata } from "next";
import { Content } from "./content";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: IProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = (await getNewsDetail(id)).data;

  const { name, intro, cover } = data;

  return {
    title: name,
    twitter: {
      card: "summary_large_image",
      title: name,
      creator: "@chainforgood",
      site: "@chainforgood",
      description: intro,
      images: [
        {
          url: `${IMAGE_URL}${cover}`,
          alt: name,
        },
      ],
    },
    openGraph: {
      title: name,
      description: intro,
      // url: "https://www.blockchainforgood.xyz/",
      siteName: "Blockchain for Good",
      images: [
        {
          url: `${IMAGE_URL}${cover}`,
          alt: name,
        },
      ],
      type: "website",
    },
  };
}

export default async function Detail({ params }: IProps) {
  return (
    <div className="w-full md:w-content mx-auto">
      <GoBack />
      <Content id={params.id} />
    </div>
  );
}
