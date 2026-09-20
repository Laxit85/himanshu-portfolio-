import React, { useState, useEffect } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const statuses = [
    'INITIALIZING EDIT SUITE...',
    'INDEXING 24FPS TIMELINE TRACKS...',
    'LOADING COLOR LUT PROFILES...',
    'SYNCING AUDIO SOUNDSCAPES...',
    'READY FOR PLAYBACK'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.floor(Math.random() * 15) + 10;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoaded(true), 300);
          return 100;
        }
        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  const statusIdx = Math.min(Math.floor((progress / 100) * statuses.length), statuses.length - 1);

  return (
    <div id="preloader" className={loaded ? 'loaded' : ''}>
      <div className="loader-brand">
        HIMANSHU SRIMALI <span className="accent">[EDIT]</span>
      </div>
      <div className="loader-progress-wrap">
        <div className="loader-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-meta">
        <span>{statuses[statusIdx]}</span>
        <span>{progress < 10 ? `0${progress}` : progress}%</span>
      </div>
    </div>
  );
}
