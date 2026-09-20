import React, { useState, useEffect, useCallback } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ShutterTransition } from './components/ShutterTransition';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

import { useHashRoute } from './hooks/useHashRoute';
import { projectsData } from './data/projects';

export default function App() {
  const [shutterActive, setShutterActive] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [playheadPercent, setPlayheadPercent] = useState(0);

  const handleRouteStart = useCallback(() => {
    setShutterActive(true);
    setTimeout(() => setShutterActive(false), 700);
  }, []);

  const route = useHashRoute(handleRouteStart);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPlayheadPercent(pct);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);
  if (selectedProjectId) {
    console.log('[DEBUG] App state selectedProjectId:', selectedProjectId, 'Resolved project data:', selectedProject);
  }

  return (
    <>
      <div className="film-grain"></div>
      <CustomCursor />
      <Preloader />
      <ShutterTransition active={shutterActive} />

      {/* Top Playhead Indicator */}
      <div className="top-playhead-bar">
        <div className="playhead-fill" style={{ width: `${playheadPercent}%` }}></div>
      </div>

      <Nav activeRoute={route} />

      <main className="site-content">
        {route === 'home' && <HomePage onSelectProject={setSelectedProjectId} />}
        {route === 'work' && <WorkPage onSelectProject={setSelectedProjectId} />}
        {route === 'about' && <AboutPage />}
        {route === 'services' && <ServicesPage />}
        {route === 'contact' && <ContactPage />}
      </main>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onSelectProject={setSelectedProjectId}
      />

      <Footer />
    </>
  );
}
