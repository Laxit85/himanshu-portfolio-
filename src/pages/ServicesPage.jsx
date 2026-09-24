import React from 'react';

export function ServicesPage() {
  return (
    <section className="section-container">
      <div className="section-header">
        <div>
          <span className="mono-tag">ENGAGEMENT // OFFERINGS</span>
          <h2>DETAILED SERVICES</h2>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">OFFERING A</div>
          <h3>COMMERCIAL & TRAILER EDITING</h3>
          <p>End-to-end video cutting for film trailers, high-energy product commercials, and brand campaign films designed to captivate audiences immediately.</p>
          <ul className="service-inclusions">
            <li>Full Narrative Cut</li>
            <li>Sound Design & SFX</li>
            <li>Lumetri Color Grade</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">OFFERING B</div>
          <h3>KINETIC TYPOGRAPHY & TITLE SEQUENCES</h3>
          <p>Custom 2D/3D title sequence design, animated brand identity stings, music video graphic overlays, and broadcast graphics packaging.</p>
          <ul className="service-inclusions">
            <li>Title Card Design</li>
            <li>3D Camera Movement</li>
            <li>Alpha Channel Exports</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">OFFERING C</div>
          <h3>VISUAL IDENTITY & ART DIRECTION</h3>
          <p>Comprehensive graphic design systems, key art poster design, album sleeve artwork, and digital campaign asset generation.</p>
          <ul className="service-inclusions">
            <li>Key Art Poster Design</li>
            <li>Style Guides & Guidelines</li>
            <li>Social Asset Suite</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">OFFERING D</div>
          <h3>COLOR GRADING & ADOBE FINISHING</h3>
          <p>Professional color correction, look development, shot matching, skin tone preservation, and delivery in 4K DCI / Rec.709 / HDR10.</p>
          <ul className="service-inclusions">
            <li>Shot-to-Shot Matching</li>
            <li>LUT Creation</li>
            <li>High-Res Deliverables</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
