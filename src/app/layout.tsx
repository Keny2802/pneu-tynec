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
  title: "PneuTýnec s.r.o.",
  description: "PneuTýnec s.r.o.",
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
