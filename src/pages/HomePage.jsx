import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { ProjectCard } from '../components/ProjectCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { projectsData } from '../data/projects';

export function HomePage({ onSelectProject }) {
  const featured = projectsData.slice(0, 6);

  return (
    <>
      <Hero onSelectProject={onSelectProject} />
      <Marquee />

      {/* Featured Work */}
      <section className="section-container">
        <div className="section-header">
          <div>
            <span className="mono-tag">SELECTED CUTS & GRAPHIC ART // HIMUUXD</span>
            <h2>FEATURED WORK</h2>
          </div>
          <a href="#/work" className="btn-secondary">View All Archive ({projectsData.length}) →</a>
        </div>

        <div className="projects-grid">
          {featured.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="section-header">
          <div>
            <span className="mono-tag">CAPABILITIES // DISCIPLINE</span>
            <h2>DUAL-CRAFT MASTERY</h2>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">[01]</div>
            <h3>SHORT FORM & REEL EDITING</h3>
            <p>Rhythmic video editing for Instagram Reels, TikTok, YouTube Shorts, commercial spots, sound design sync, and high-retention velocity cuts.</p>
            <ul className="service-inclusions">
              <li>Pacing & Beat-Synced Cuts</li>
              <li>Sound Design & SFX Punch</li>
              <li>Color Grading & Speed Ramps</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">[02]</div>
            <h3>POSTER ART & KEY GRAPHICS</h3>
            <p>Bold editorial poster design, automotive visual key art, motorcycle poster art, cosmetic product advertising graphics, and visual identity systems.</p>
            <ul className="service-inclusions">
              <li>Automotive & Bike Posters</li>
              <li>Product & Cosmetic Ad Art</li>
              <li>Kinetic Typography Layouts</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">[03]</div>
            <h3>MOTION GRAPHICS & TITLES</h3>
            <p>2D/3D kinetic title sequences, animated brand logos, lower thirds, HUD callouts, and broadcast graphic packaging.</p>
            <ul className="service-inclusions">
              <li>Kinetic Typography</li>
              <li>3D Camera Movement</li>
              <li>VFX Compositing</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">[04]</div>
            <h3>COLOR GRADING & FINISHING</h3>
            <p>Lumetri Color passes, match-grading, cinematic film emulation LUTs, and high-dynamic-range mastering.</p>
            <ul className="service-inclusions">
              <li>Match Grading & Look Creation</li>
              <li>HDR Mastering</li>
              <li>Deliverable Tech Specs</li>
            </ul>
          </div>
        </div>
      </section>

      <ProcessTimeline />
    </>
  );
}
