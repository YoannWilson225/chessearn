import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChessEarn",
  description: "RealTime Chess money website",
};

export default function Home() {
  return (
    <><ScrollUp />
      <Hero /></>
  );
}
