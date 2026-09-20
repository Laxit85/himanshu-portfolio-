import { useState, useEffect } from 'react';

export function useTimecode() {
  const [timecode, setTimecode] = useState('01:24:18:00');

  useEffect(() => {
    let hours = 1, minutes = 24, seconds = 18, frames = 0;

    const interval = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours = (hours + 1) % 24;
          }
        }
      }

      setTimecode([
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0'),
        String(frames).padStart(2, '0')
      ].join(':'));
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  return timecode;
}
