import React from 'react';

export function Marquee() {
  const tools = [
    'ADOBE PREMIERE PRO', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'CINEMA 4D',
    'PHOTOSHOP', 'ILLUSTRATOR', 'BLENDER', 'FIGMA'
  ];

  return (
    <section className="marquee-container">
      <div className="marquee-track">
        {tools.concat(tools).map((tool, idx) => (
          <div key={idx} className="marquee-item">
            <span>{tool}</span>
            <div className="dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
