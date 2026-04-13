import type {
  Metadata
} from "next";
import {
  Geist,
  Geist_Mono,
  Teko
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontTeko = Teko({
  variable: "--font-teko",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pneutynec.cz"),
  title: "Pneuservis PneuTýnec s.r.o. | Přezutí, opravy pneu, Týnec nad Sázavou",
  description: "Profesionální pneuservis v Týnci nad Sázavou. Nabízíme přezutí pneumatik, opravy, vyvážení kol a uskladnění pneu. Rychlé termíny a kvalitní servis.",
  icons: [
      {
        url: "/favicon.avif",
        type: "image/avif",
      }
  ],
  keywords: [
    "pneuservis Týnec nad Sázavou",
    "přezutí pneumatik",
    "oprava pneu",
    "vyvážení kol",
    "uskladnění pneumatik",
    "levný pneuservis",
    "pneu servis Týnec",
    "servis kol",
    "zimní pneumatiky",
    "letní pneumatiky"
  ],
  openGraph: {
    title: "Pneuservis PneuTýnec s.r.o.",
    description: "Přezutí, opravy a servis pneumatik v Týnci nad Sázavou.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/uvodni-sekce.avif",
        alt: "Přezutí, opravy a servis pneumatik v Týnci nad Sázavou - www.pneutynec.cz"
      }
    ],
    url: "https://www.pneutynec.cz",
    siteName: "PneuTýnec s.r.o.",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTeko.variable} antialiased`}
    >
      <body className="">{children}</body>
    </html>
  );
}
