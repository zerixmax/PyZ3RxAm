'use client';

import { useState, useEffect } from 'react';

export default function Timer({ durationSeconds, onTimeUp }) {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    const isLowTime = timeLeft <= 600; // Last 10 minutes (600 seconds)

    return (
        <div className={`text-2xl font-bold p-4 rounded-lg shadow-md border-2 ${isLowTime ? 'border-red-500 text-red-600 bg-red-50' : 'border-blue-500 text-blue-600 bg-blue-50'
            }`}>
            Preostalo vrijeme: {formatTime(timeLeft)}
        </div>
    );
}
