import React from 'react';

export function AboutPage() {
  return (
    <section className="section-container">
      <div className="about-hero-grid">
        <div>
          <span className="mono-tag">BIO // DISCIPLINE & VISION</span>
          <h2 style={{ fontSize: '3.2rem', margin: '0.5rem 0 1.5rem' }}>ONE VOICE, DUAL CRAFTS.</h2>
          <p style={{ color: 'var(--ink-dim)', marginBottom: '1rem', fontSize: '1.05rem' }}>
            I’m Himanshu Srimali — a Senior Video Editor and Graphic Designer with 8+ years crafting high-velocity digital visual content for global brands, agencies, and record labels.
          </p>
          <p style={{ color: 'var(--ink-dim)', marginBottom: '2rem' }}>
            Rather than splitting video editing and graphic design into separate siloes, I build visual projects where typography breathes through frame cuts and video pacing dictates graphic layout.
          </p>

          <div className="chip-cloud">
            <div className="chip-item"><span className="chip-cat">NLE:</span> Premiere Pro / Resolve</div>
            <div className="chip-item"><span className="chip-cat">VFX:</span> After Effects / Cinema 4D</div>
            <div className="chip-item"><span className="chip-cat">ART:</span> Photoshop / Illustrator</div>
            <div className="chip-item"><span className="chip-cat">AUDIO:</span> Audition / Logic Pro</div>
          </div>
        </div>

        {/* 3D Polyhedron Crystal */}
        <div className="polyhedron-container">
          <div className="polyhedron-3d">
            <div className="poly-face"></div>
            <div className="poly-face"></div>
            <div className="poly-face"></div>
            <div className="poly-face"></div>
            <div className="poly-face"></div>
            <div className="poly-face"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
