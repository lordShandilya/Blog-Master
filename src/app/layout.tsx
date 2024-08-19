import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BgImage from "@/components/BgImage";
import Header from "@/components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog-Master",
  description: "The blogging solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <BgImage/> */}
        <Header show={true}/>
        {children}
      </body>
    </html>
  );
}
