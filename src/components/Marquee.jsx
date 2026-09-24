import React from 'react';

export function Marquee() {
  const tools = [
    'ADOBE PREMIERE PRO',
    'ADOBE AFTER EFFECTS',
    'ADOBE PHOTOSHOP',
    'ADOBE ILLUSTRATOR',
    'ADOBE AUDITION',
    'ADOBE LIGHTROOM'
  ];

  return (
    <section className="marquee-container">
      <div className="marquee-track">
        {tools.concat(tools).concat(tools).map((tool, idx) => (
          <div key={idx} className="marquee-item">
            <span>{tool}</span>
            <div className="dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
