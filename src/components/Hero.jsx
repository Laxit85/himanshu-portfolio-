import React, { useState, useEffect } from 'react';

export function Hero({ onSelectProject }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let animFrame;

    const handleMouseMove = (e) => {
      const container = document.getElementById('hero-3d-wrap');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = ((e.clientX - centerX) / rect.width) * 30;
      targetY = -((e.clientY - centerY) / rect.height) * 30;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setRotation({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="mono-tag">HIGH-VELOCITY EDITS & GRAPHIC ART // HIMUUXD</span>
        </div>
        <h1 className="hero-headline">
          CRAFTING CUTS.<br />
          <span className="gradient-text">SHAPING VISIONS.</span>
        </h1>
        <p className="hero-subtitle">
          Himanshu Srimali — Senior Video Editor & Graphic Designer combining rhythmic video pacing, kinetic typography, and surgical color grading into one coherent aesthetic.
        </p>

        <div className="hero-cta-group">
          <a href="#/work" className="btn-primary">
            <span>EXPLORE ARCHIVE (20)</span>
            <span>→</span>
          </a>
          <a href="#/contact" className="btn-secondary">
            <span>START A PROJECT</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>02+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>140+</h3>
            <p>Edits & Designs</p>
          </div>
        </div>
      </div>

      {/* 3D FLOATING SCENE HERO (Bold Moment) */}
      <div className="hero-scene-wrap" id="hero-3d-wrap">
        <div
          className="hero-scene-3d"
          style={{ transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)` }}
        >
          <div className="scene-ring"></div>

          <div className="floating-frame frame-1" onClick={() => onSelectProject('porsche-911')}>
            <img src="/assets/porsche_911.jpg" alt="Porsche 911 GT3 Poster" />
          </div>

          <div className="floating-frame frame-2" onClick={() => onSelectProject('gt-650')}>
            <img src="/assets/gt_650.jpg" alt="Continental GT 650 Poster" />
          </div>

          <div className="floating-frame frame-3" onClick={() => onSelectProject('spiderman-art')}>
            <img src="/assets/spiderman.jpg" alt="Spider-Man Key Art" />
          </div>

          <div className="floating-frame frame-4" onClick={() => onSelectProject('aymist-body-spray')}>
            <img src="/assets/aymist_body_spray.jpg" alt="AYMIST Body Spray" />
          </div>

          <div className="floating-frame frame-5" onClick={() => onSelectProject('we-fit-design')}>
            <img src="/assets/we_fit.jpg" alt="We Fit Brand Design" />
          </div>
        </div>
      </div>
    </section>
  );
}
