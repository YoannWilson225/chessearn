'use client';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Sheet, SheetContent } from '../ui/sheet';
import { LeftNav } from './LeftNavigation';

export default function Burger() {
    const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

    const openLeftNavigation = (event: any) => {
        event.preventDefault();
        setIsLeftNavOpen(true);
    }
 
    return (
        <div className="pr-2 pt-2">
            <button onClick={openLeftNavigation}>
                <svg width="38" height="54" className='' viewBox="0 0 38 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="37.5" y1="2.18557e-08" x2="37.5" y2="54" stroke="currentColor" />
                    <line x1="1" y1="16" x2="23" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <line x1="1" y1="26" x2="28" y2="26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <line x1="1" y1="36" x2="23.5" y2="36" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
            {isLeftNavOpen && (
                <Sheet open={isLeftNavOpen} onOpenChange={() => setIsLeftNavOpen(false)}>
                    <SheetContent side={"left"}>
                        <LeftNav />
                    </SheetContent>
                </Sheet>
            )}
        </div>
    )
}
