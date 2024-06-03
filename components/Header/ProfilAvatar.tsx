import React, { useState } from 'react';
import { Avatar, Badge, Button } from "@nextui-org/react";
import { Transition } from '@headlessui/react';
import AccordionProfile from './AccordionProfile';

export default function ProfilAvatar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center space-x-4 mr-5">
            <div className="relative">
                <div className="flex items-center gap-2 cursor-pointer pt-4" onClick={() => setIsOpen(!isOpen)}>
                    <Badge content="5" color="primary" shape="circle" showOutline={false}>
                        <Avatar
                            isBordered
                            radius="full"
                            src="https://github.com/shadcn.png"
                        />
                    </Badge>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute right-0 mt-2 w-[320px] dark:bg-[#292929] bg-white rounded-lg shadow-lg p-4">
                        <div className="flex items-center flex-col">
                            <p className="mt-2 text-sm font-semibold"><span className='text-[#F9CE00]'>GM</span> Yoann_wilson_Cl</p>
                            <Avatar
                                isBordered
                                radius="full"
                                size="lg"
                                src="https://github.com/shadcn.png"
                                className='my-3'
                            />
                            <p className='font-semibold text-md'>Bonjour, <span className='text-[#F9CE00]'>GM</span> Yoann_wilson_Cl</p>
                            <div className="flex mt-4 space-x-2">
                                <Button
                                    href="/play"
                                    className={`px-6 py-3 rounded-[20px] border font-semibold bg-transparent dark:border-white border-[#1B1B1B]`}
                                >
                                    Play !
                                </Button>
                                <Button
                                    href="/"
                                    className={`px-6 py-3 rounded-[20px] font-semibold text-black bg-[#F9CE00]`}
                                >
                                    Deposit
                                </Button>
                                {/* <Link
                                    href="/sign-up"
                                    className={`px-6 py-3 ml-5 w-[169px] h-[69px] rounded-[20px] border dark:border-white border-[#1B1B1B]`}
                                >
                                    Register
                                </Link> */}
                            </div>
                        </div>
                        <div className="mt-4">
                            <AccordionProfile></AccordionProfile>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
}
