import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SingleChessBoard from './SingleChessBoard';

export default function GamesInProgress() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Games in progress</h2>
        <Link className="text-[#F9CE00] font-semibold flex items-center gap-x-1" href="/all">
          More +
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <SingleChessBoard />
        <SingleChessBoard />
        <SingleChessBoard />
      </div>
    </div>
  );
}
