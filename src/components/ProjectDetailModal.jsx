import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projects';

export function ProjectDetailModal({ project, onClose, onSelectProject }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (project) {
      console.log('[DEBUG] ProjectDetailModal mounted with project data:', project);
    }
  }, [project?.id]);

  // Reset zoom state when project changes
  useEffect(() => {
    setIsZoomed(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) {
    console.log('[DEBUG] ProjectDetailModal rendered with null project state (modal hidden)');
    return null;
  }

  const isVideo = project.category === 'video';
  const categoryProjects = projectsData.filter(p => p.category === project.category);
  const currentIndex = categoryProjects.findIndex(p => p.id === project.id);

  const handleNext = (e) => {
    e?.stopPropagation();
    if (currentIndex !== -1 && categoryProjects.length > 0) {
      const nextIndex = (currentIndex + 1) % categoryProjects.length;
      onSelectProject(categoryProjects[nextIndex].id);
    }
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (currentIndex !== -1 && categoryProjects.length > 0) {
      const prevIndex = (currentIndex - 1 + categoryProjects.length) % categoryProjects.length;
      onSelectProject(categoryProjects[prevIndex].id);
    }
  };

  const isInstagram = project.videoUrl && project.videoUrl.includes('instagram.com');
  const isDrive = project.videoUrl && project.videoUrl.includes('drive.google.com');

  return (
    <div
      className="graphic-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="graphic-modal-container">
        {/* Modal Top Header Bar */}
        <div className="graphic-modal-header">
          <div className="header-title-wrap">
            <span className="mono-tag" style={{ color: 'var(--cyan)' }}>
              {isVideo ? 'VIDEO EDIT' : 'GRAPHIC ARTWORK'} [{currentIndex + 1}/{categoryProjects.length}]
            </span>
            <h2 className="modal-project-title">{project.title}</h2>
            <span className="modal-category-subtitle">
              {project.categoryLabel} • {project.year}
            </span>
          </div>

          <div className="modal-header-actions">
            {categoryProjects.length > 1 && (
              <div className="modal-nav-arrows">
                <button
                  onClick={handlePrev}
                  className="modal-nav-btn"
                  title="Previous Project (Left Arrow)"
                  aria-label="Previous"
                >
                  ← PREV
                </button>
                <button
                  onClick={handleNext}
                  className="modal-nav-btn"
                  title="Next Project (Right Arrow)"
                  aria-label="Next"
                >
                  NEXT →
                </button>
              </div>
            )}

            {/* Close Button in Top-Right Corner */}
            <button
              className="modal-close-btn"
              onClick={onClose}
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Main Content (Image Stage + Details Section) */}
        <div className="graphic-modal-body">
          {/* Graphic Media Stage */}
          <div className="graphic-stage">
            {isVideo ? (
              project.embedUrl ? (
                <iframe
                  src={project.embedUrl}
                  title={project.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="modal-video-iframe"
                ></iframe>
              ) : (
                <div className="video-fallback-screen" style={{ width: '100%', height: '100%' }}>
                  <div className="play-badge video-pulse">🎬</div>
                  <span className="mono-tag" style={{ color: 'var(--cyan)' }}>VIDEO EDIT</span>
                </div>
              )
            ) : (
              <div className="image-zoom-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`modal-full-image ${isZoomed ? 'zoomed' : ''}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                <button
                  className="zoom-toggle-badge"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  {isZoomed ? '📐 FIT SCREEN' : '🔍 CLICK TO ZOOM'}
                </button>
              </div>
            )}
          </div>

          {/* Details Sidebar / Bottom Section */}
          <div className="graphic-details-panel">
            <div className="details-section">
              <span className="mono-tag">PROJECT INFO</span>
              <h3 className="details-heading">{project.title}</h3>
              <p className="details-subtitle">
                {project.categoryLabel} • {project.year} • {project.client}
              </p>
            </div>

            <div className="details-section">
              <span className="mono-tag">DESCRIPTION & CONCEPT</span>
              <p className="details-description">{project.description}</p>
            </div>

            <div className="details-section">
              <span className="mono-tag">ROLE & BRAND</span>
              <p className="details-meta-text"><strong>Role:</strong> {project.role}</p>
              <p className="details-meta-text"><strong>Client:</strong> {project.client}</p>
            </div>

            <div className="details-section">
              <span className="mono-tag">TOOLS & SOFTWARE</span>
              <div className="chip-cloud" style={{ marginTop: '0.4rem' }}>
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="chip-item">
                    <span className="chip-cat">TOOL:</span> {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="details-section">
              <span className="mono-tag">TAGS</span>
              <div className="card-tags" style={{ marginTop: '0.4rem' }}>
                {project.tags.map((t, idx) => (
                  <span key={idx} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="details-action-bar">
              {isVideo && project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{isInstagram ? 'WATCH REEL ON INSTAGRAM' : isDrive ? 'OPEN FILE ON GOOGLE DRIVE' : 'OPEN LINK'}</span>
                  <span>↗</span>
                </a>
              )}
              {!isVideo && project.image && (
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>OPEN HIGH-RES IMAGE</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




