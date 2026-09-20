import React, { useState, useEffect } from 'react';

export function ProcessTimeline() {
  const [fillHeight, setFillHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'INGEST & FOOTAGE AUDIT',
      desc: 'Organizing raw source media, proxy generation, script review, visual styleboarding, and story arc mapping before making the first cut.'
    },
    {
      num: '02',
      title: 'ASSEMBLY & RHYTHM CUT',
      desc: 'Laying down the rough timeline, testing audio beats, building sequence momentum, and establishing graphic hierarchy.'
    },
    {
      num: '03',
      title: 'REFINE, COLOR & MOTION',
      desc: 'Surgical frame trimming, custom DaVinci color grading, kinetic title animations, and immersive sound design layering.'
    },
    {
      num: '04',
      title: 'DELIVER & RENDER MASTER',
      desc: 'Exporting multi-format master renders (4K ProRes, Social 9:16 vertical, Broadcast WebM) with zero technical compromises.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('process-timeline-sec');
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top < viewHeight && rect.bottom > 0) {
        const total = rect.height;
        const current = Math.max(0, Math.min(total, viewHeight * 0.6 - rect.top));
        const pct = (current / total) * 100;
        setFillHeight(pct);
        setActiveStep(Math.floor((pct / 100) * steps.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section className="section-container">
      <div className="section-header">
        <div>
          <span className="mono-tag">WORKFLOW // PLAYHEAD MOVES</span>
          <h2>HOW A PROJECT MOVES</h2>
        </div>
      </div>

      <div className="process-timeline-wrap" id="process-timeline-sec">
        <div className="process-line-track"></div>
        <div className="process-line-fill" style={{ height: `${fillHeight}%` }}></div>

        {steps.map((step, idx) => (
          <div key={idx} className={`process-step ${idx <= activeStep ? 'active' : ''}`}>
            <div className="process-node">{step.num}</div>
            <div className="process-content">
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
