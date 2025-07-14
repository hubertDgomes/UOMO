import React, { useState, useEffect } from "react";

const Counter = ({className}) => {
  // Set your target date/time here
  const targetDate = new Date("2025-08-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`flex gap-5 ${className}`}>
      <div>
        <span className="countdown font-mono text-4xl">
          <span
            style={{ "--value": timeLeft.days }}
            aria-live="polite"
            aria-label={`${timeLeft.days} days`}
          >
            {timeLeft.days}
          </span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span
            style={{ "--value": timeLeft.hours }}
            aria-live="polite"
            aria-label={`${timeLeft.hours} hours`}
          >
            {timeLeft.hours}
          </span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span
            style={{ "--value": timeLeft.minutes }}
            aria-live="polite"
            aria-label={`${timeLeft.minutes} minutes`}
          >
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span
            style={{ "--value": timeLeft.seconds }}
            aria-live="polite"
            aria-label={`${timeLeft.seconds} seconds`}
          >
            {timeLeft.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Counter;
