import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export function WorkPage({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section className="section-container">
      <div className="section-header">
        <div>
          <span className="mono-tag">HIMANSHU SRIMALI ARCHIVE // REELS, DRIVE VIDEOS & GRAPHICS</span>
          <h2>PORTFOLIO ARCHIVE</h2>
        </div>
      </div>

      <div className="filter-tabs">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ALL ({projectsData.length})
        </button>
        <button
          className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
          onClick={() => setFilter('video')}
        >
          VIDEO EDITS & REELS ({projectsData.filter(p => p.category === 'video').length})
        </button>
        <button
          className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
          onClick={() => setFilter('design')}
        >
          GRAPHIC POSTERS & ART ({projectsData.filter(p => p.category === 'design').length})
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
