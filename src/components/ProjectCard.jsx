import React from 'react';

export function ProjectCard({ project, onClick }) {
  const isVideo = project.category === 'video';
  const isDriveVideo = isVideo && project.embedUrl && project.embedUrl.includes('drive.google.com');

  const handleCardClick = (e) => {
    e.stopPropagation();
    console.log('[DEBUG] Project card / VIEW FULL GRAPHIC button clicked:', project.id, project.title);
    onClick(project.id);
  };

  return (
    <div
      className={`project-card ${isVideo ? 'video-card' : 'graphic-card'}`}
      onClick={handleCardClick}
      data-category={project.category}
    >
      <div className="card-media">
        {isVideo ? (
          <div className="video-card-preview">
            {project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="video-iframe-preview"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            ) : (
              <div className="video-fallback-screen">
                <div className="play-badge video-pulse">🎬</div>
                <span className="mono-tag" style={{ color: 'var(--cyan)' }}>PLAY VIDEO</span>
              </div>
            )}
            <div className="card-media-overlay">
              <button className="play-badge" onClick={handleCardClick}>
                {isDriveVideo ? '▶ PLAY DRIVE VIDEO' : '▶ PLAY VIDEO REEL'}
              </button>
            </div>
          </div>
        ) : (
          <>
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="card-media-overlay">
              <button className="play-badge" onClick={handleCardClick}>
                🔍 VIEW FULL GRAPHIC
              </button>
            </div>
          </>
        )}
      </div>

      <div className="card-body">
        <div className="card-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill">{tag}</span>
          ))}
        </div>
        <h3 className="card-title">
          <span>{project.title}</span>
          <span className="card-arrow">→</span>
        </h3>
        <p style={{ color: 'var(--ink-dim)', fontSize: '0.88rem' }}>
          {project.categoryLabel} • {project.year}
        </p>
      </div>
    </div>
  );
}

