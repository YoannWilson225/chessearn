'use client';
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ initialSeconds }: { initialSeconds: any }) => {
    const [seconds, setSeconds]: any = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setInterval(() => {

                setSeconds((prevSeconds: number) => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(timerId); // Cleanup the interval on component unmount
        }
    }, [seconds]);

    const formatTime = (totalSeconds: any) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <p className="text-sm font-bold text-yellow-500">
            {formatTime(seconds)}
        </p>
    );
};

export default CountdownTimer;
