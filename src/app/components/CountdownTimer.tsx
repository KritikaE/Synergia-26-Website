import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  // Set fest date to March 15, 2026
  const festDate = new Date('2026-03-31T00:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = festDate - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-black/60 neon-border-blue pixel-corners p-3 sm:p-4 md:p-6 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]">
          <div className="font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl neon-text-blue text-center">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="font-['Press_Start_2P'] text-[8px] sm:text-[10px] md:text-xs text-[#ff1493] mt-2 md:mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <div className="font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl text-[#ff00ff] mb-6 animate-pulse">:</div>
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <div className="font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl text-[#ff00ff] mb-6 animate-pulse">:</div>
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <div className="font-['Orbitron'] text-2xl sm:text-3xl md:text-5xl text-[#ff00ff] mb-6 animate-pulse">:</div>
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
}
