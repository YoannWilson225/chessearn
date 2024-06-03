import ScrollUp from "@/components/Common/ScrollUp";
import GamesProgress from "@/components/GamesProgress";
import Hero from "@/components/Hero";
import TournamentProgress from "@/components/TournamentProgress";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight:'400'});

export const metadata: Metadata = {
  title: "ChessEarn",
  description: "RealTime Chess money website",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <GamesProgress />
      <TournamentProgress />
    </>
  );
}
