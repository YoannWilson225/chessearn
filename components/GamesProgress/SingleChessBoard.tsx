import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import CountdownTimer from "./CountdownTimer";

export default function SingleChessBoard() {
    return (
        <Card className="py-2 bg-white dark:bg-[#292929] rounded-lg shadow-md">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex justify-between w-full">
                    <p className=""><span className="text-[#F9CE00] font-semibold">GM</span> Yoann_wilson_CI 2800</p>
                    <p className="">1:45</p>
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Chess game"
                    className="object-cover rounded-md"
                    src="/images/chessboard.png"
                    width={360}
                    height={270}
                />
            </CardBody>
            <CardFooter>
                <div className="flex justify-between w-full">
                    <p className=""><span className="text-[#F9CE00] font-semibold">IM</span> TimVass19 2755</p>
                    <p className="text-[#F9CE00]"><CountdownTimer initialSeconds={320} /></p>
                </div>
            </CardFooter>
        </Card>
    );
}
