import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics, VercelAnalytics } from "./analytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SWRProvider } from "./swr-provider";
import type { Viewport } from "next";
import { RouterProcess } from "./router-process";
import { GoogleTag } from "./google-tag";

export const metadata: Metadata = {
  title: "Blockchain for Good",
  description:
    "At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.  Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.",
  keywords:
    "Blockchain for Good, Blockchain for Good Alliance, BGA, wallet users, inclusive financial system,  public infrastructure,  crypto exchanges,  bybit web3,  blockchain life dubai,  helium and hivemapper,  harvard blockchain club,  impactful projects,  lily liu,  creating a more inclusive,  coo helen liu, cross border remittances, solana foundation",
  authors: {
    name: "Blockchain for Good Alliance",
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  twitter: {
    card: "summary_large_image",
    title: "Blockchain for Good Alliance",
    creator: "@chainforgood",
    site: "@chainforgood",
    description:
      "At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.  Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.",
    images: [
      {
        url: "https://www.blockchainforgood.xyz/share.jpg",
        alt: "Blockchain for Good Alliance",
      },
    ],
  },
  openGraph: {
    title: "Blockchain for Good Alliance",
    description:
      "At Blockchain for Good Alliance (BGA), we believe in the transformative potential of blockchain technology to address some of the most pressing challenges facing our society.  Our alliance serves as a collaborative hub, bringing together a diverse range of stakeholders to collectively explore, innovate and implement blockchain solutions for social good.",
    url: "https://www.blockchainforgood.xyz/",
    siteName: "Blockchain for Good",
    images: [
      {
        url: "https://www.blockchainforgood.xyz/share.jpg",
        alt: "Blockchain for Good Alliance",
      },
    ],
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/logo.png",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "black",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <meta
          name="copyright"
          content="© 2024 Blockchain For Good Alliance. All rights reserved."
        />
      </head>
      <GoogleAnalytics />

      <body>
        <RouterProcess>
          <SWRProvider>
            <div className="min-h-screen flex flex-col relative">
              <VercelAnalytics />
              <Header />
              <div
                // 减去header：72px和footer的高度:197px和1rem的margin
                className="flex justify-center flex-auto"
              >
                {children}
              </div>
              <Footer />
            </div>
          </SWRProvider>
        </RouterProcess>
      </body>
      <GoogleTag />
    </html>
  );
}

export default RootLayout;
