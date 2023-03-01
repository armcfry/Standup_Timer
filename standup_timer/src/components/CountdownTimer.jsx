import React, { useState, useEffect } from 'react';

function CountdownTimer({ minutes, seconds }) {
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds(totalSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalSeconds]);

  const displayMinutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');

  return (
    <div>
      <span>{displayMinutes}</span>:<span>{displaySeconds}</span>
    </div>
  );
}

export default CountdownTimer;

