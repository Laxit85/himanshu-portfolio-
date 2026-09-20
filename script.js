/* ==========================================================================
   Kieran Ashe Portfolio — Core JavaScript Logic & Interactive Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. PROJECT DATASET (8 Projects Total)
     ------------------------------------------------------------------------ */
  const projectsData = [
    {
      id: 'cyber-cut',
      title: 'NEON SYNDICATE',
      category: 'video',
      categoryLabel: 'Video Editing & Trailer',
      image: 'assets/project_cyber_cut.jpg',
      year: '2026',
      client: 'Aether Studios / Warner Digital',
      role: 'Lead Trailer Editor & Colorist',
      tags: ['Video Editing', 'Cinematic Cut', 'Sound Design'],
      tools: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro'],
      description: 'A high-octane 90-second cinematic trailer edit featuring hyper-precise rhythmic cutting, custom sound design sync, and anamorphic neon color grading for a dystopian cyberpunk feature.'
    },
    {
      id: 'brand-rebrand',
      title: 'KINETIC TYPE POSTERS',
      category: 'design',
      categoryLabel: 'Graphic Design & Typography',
      image: 'assets/project_brand_rebrand.jpg',
      year: '2025',
      client: 'London Design Biennale',
      role: 'Creative Director & Graphic Designer',
      tags: ['Graphic Design', 'Kinetic Type', 'Editorial'],
      tools: ['Photoshop', 'Illustrator', 'InDesign'],
      description: 'An experimental series of large-format printed posters exploring the collision of broadcast NLE timecode typography and high-fashion editorial layouts.'
    },
    {
      id: 'documentary-cut',
      title: 'SILENT HORIZONS',
      category: 'video',
      categoryLabel: 'Documentary Feature',
      image: 'assets/hero_timeline.jpg',
      year: '2025',
      client: 'National Geographic / Netflix',
      role: 'Senior Feature Editor',
      tags: ['Documentary Cut', 'Color Match', 'Multi-Cam'],
      tools: ['Premiere Pro', 'DaVinci Resolve', 'iZotope RX'],
      description: 'Full feature documentary edit balancing archival footage, 4K multi-cam drone cinematography, and delicate acoustic soundscapes across a 45-minute narrative arc.'
    },
    {
      id: 'album-art',
      title: 'AETHERIA 3D VISUALS',
      category: 'design',
      categoryLabel: '3D Graphic Design & Art Direction',
      image: 'assets/project_brand_rebrand.jpg',
      year: '2025',
      client: 'Ninja Tune Records',
      role: 'Art Director',
      tags: ['3D Art', 'Album Direction', 'Cover Art'],
      tools: ['Cinema 4D', 'Photoshop', 'Octane Render'],
      description: 'Surrealist 3D album cover packaging and visualizer design featuring iridescent glass geometry and deep dark mode tactile textures.'
    },
    {
      id: 'volt-commercial',
      title: 'VOLT X ELECTRIC',
      category: 'video',
      categoryLabel: 'Commercial Spot',
      image: 'assets/project_cyber_cut.jpg',
      year: '2024',
      client: 'VOLT Motors UK',
      role: 'Commercial Editor & Motion VFX',
      tags: ['Commercial Spot', 'Kinetic Cut', 'VFX'],
      tools: ['Premiere Pro', 'After Effects', 'Resolve'],
      description: '30-second broadcast television commercial with pulse-pacing visual match cuts, sound-triggered light flashes, and high-tech vehicle interface callouts.'
    },
    {
      id: 'hud-motion',
      title: 'CYBERGRID HUD UI',
      category: 'design',
      categoryLabel: 'Motion Graphics & Title Card',
      image: 'assets/hero_timeline.jpg',
      year: '2024',
      client: 'Paramount Interactive',
      role: 'Motion Graphics Lead',
      tags: ['Motion Graphics', 'HUD UI', '3D Titles'],
      tools: ['After Effects', 'Cinema 4D', 'Illustrator'],
      description: 'Futuristic sci-fi user interface title sequence featuring custom vector blueprint renders, camera parallax depth layers, and optical flare tracking.'
    },
    {
      id: 'chroma-fashion',
      title: 'CHROMA EDITORIAL',
      category: 'video',
      categoryLabel: 'Fashion Film',
      image: 'assets/project_cyber_cut.jpg',
      year: '2024',
      client: 'Vogue Scandinavia',
      role: 'Lead Editor & Finishing',
      tags: ['Fashion Film', 'Duotone Grade', 'Rhythm'],
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      description: 'Avant-garde fashion showcase cut to an asynchronous electronic soundtrack, employing extreme color channel split grading and rapid frame stutter cuts.'
    },
    {
      id: 'apex-identity',
      title: 'APEX FORM SYSTEM',
      category: 'design',
      categoryLabel: 'Brand Identity & Design',
      image: 'assets/project_brand_rebrand.jpg',
      year: '2024',
      client: 'Apex Architecture London',
      role: 'Lead Brand Designer',
      tags: ['Brand Identity', 'Grid System', 'Print Art'],
      tools: ['Illustrator', 'Figma', 'InDesign'],
      description: 'Comprehensive structural brand identity system based on architectural grid lines, hairline rule accents, and industrial typographic hierarchy.'
    }
  ];

  /* ------------------------------------------------------------------------
     2. EDIT SUITE PRELOADER LOGIC
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPercent = document.getElementById('loader-percent');
  const loaderStatus = document.getElementById('loader-status');

  const statuses = [
    'INITIALIZING EDIT SUITE...',
    'INDEXING 24FPS TIMELINE TRACKS...',
    'LOADING COLOR LUT PROFILES...',
    'SYNCING AUDIO SOUNDSCAPES...',
    'READY FOR PLAYBACK'
  ];

  let progress = 0;
  const loaderInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 10;
    if (progress > 100) progress = 100;

    if (loaderBar) loaderBar.style.width = `${progress}%`;
    if (loaderPercent) loaderPercent.textContent = `${progress < 10 ? '0' + progress : progress}%`;

    const statusIdx = Math.min(Math.floor((progress / 100) * statuses.length), statuses.length - 1);
    if (loaderStatus) loaderStatus.textContent = statuses[statusIdx];

    if (progress >= 100) {
      clearInterval(loaderInterval);
      setTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
      }, 300);
    }
  }, 100);

  /* ------------------------------------------------------------------------
     3. 24FPS BROADCAST TIMECODE GENERATOR
     ------------------------------------------------------------------------ */
  const navTimecode = document.getElementById('nav-timecode');
  const footerClock = document.getElementById('footer-clock');

  let hours = 1, minutes = 24, seconds = 18, frames = 0;

  setInterval(() => {
    frames++;
    if (frames >= 24) {
      frames = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours = (hours + 1) % 24;
        }
      }
    }

    const tcString = [
      String(hours).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      String(seconds).padStart(2, '0'),
      String(frames).padStart(2, '0')
    ].join(':');

    if (navTimecode) navTimecode.textContent = tcString;
    if (footerClock) footerClock.textContent = tcString;
  }, 1000 / 24);

  /* ------------------------------------------------------------------------
     4. HASH ROUTER & SHUTTER TRANSITION ENGINE
     ------------------------------------------------------------------------ */
  const routes = ['home', 'work', 'about', 'services', 'contact'];
  const shutter = document.getElementById('shutter-curtain');
  const navLinks = document.querySelectorAll('.nav-link');
  const pageViews = document.querySelectorAll('.page-view');

  function handleRoute() {
    const hash = window.location.hash || '#/';
    let route = hash.replace('#/', '').split('?')[0] || 'home';
    if (!routes.includes(route)) route = 'home';

    // Trigger Camera Shutter Wipe Animation
    if (shutter) shutter.classList.add('active');

    setTimeout(() => {
      // Update Page Views
      pageViews.forEach(view => {
        if (view.id === `page-${route}`) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      });

      // Update Active Navigation Links
      navLinks.forEach(link => {
        if (link.dataset.route === route) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      // Close Mobile Menu Drawer if Open
      const mobileDrawer = document.getElementById('mobile-drawer');
      if (mobileDrawer) mobileDrawer.classList.remove('open');

      window.scrollTo({ top: 0, behavior: 'instant' });

      // Deep Linking Check for Project Panel
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const projectParam = params.get('project');
      if (projectParam) {
        openProjectDetail(projectParam);
      }
    }, 400);

    setTimeout(() => {
      if (shutter) shutter.classList.remove('active');
    }, 700);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Initial execution

  /* ------------------------------------------------------------------------
     5. MOBILE MENU TOGGLE
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  /* ------------------------------------------------------------------------
     6. RENDER PROJECTS INTO GRIDS
     ------------------------------------------------------------------------ */
  function createProjectCardHTML(project) {
    return `
      <div class="project-card" data-project="${project.id}" data-category="${project.category}">
        <div class="card-media">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="card-media-overlay">
            <div class="play-badge">▶</div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-tags">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <h3 class="card-title">
            <span>${project.title}</span>
            <span class="card-arrow">→</span>
          </h3>
          <p style="color: var(--ink-dim); font-size: 0.88rem;">${project.categoryLabel} • ${project.year}</p>
        </div>
      </div>
    `;
  }

  const featuredGrid = document.getElementById('featured-projects-grid');
  const allProjectsGrid = document.getElementById('all-projects-grid');

  if (featuredGrid) {
    featuredGrid.innerHTML = projectsData.slice(0, 4).map(createProjectCardHTML).join('');
  }

  if (allProjectsGrid) {
    allProjectsGrid.innerHTML = projectsData.map(createProjectCardHTML).join('');
  }

  // Attach click listener to all project cards (delegation)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card') || e.target.closest('.floating-frame');
    if (card && card.dataset.project) {
      openProjectDetail(card.dataset.project);
    }
  });

  /* ------------------------------------------------------------------------
     7. SLIDE-IN PROJECT DETAIL PANEL LOGIC
     ------------------------------------------------------------------------ */
  const overlay = document.getElementById('detail-panel-overlay');
  const closeBtn = document.getElementById('panel-close-btn');

  function openProjectDetail(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    document.getElementById('panel-img').src = project.image;
    document.getElementById('panel-title').textContent = project.title;
    document.getElementById('panel-description').textContent = project.description;
    document.getElementById('panel-client').textContent = project.client;
    document.getElementById('panel-year-role').textContent = `${project.year} — ${project.role}`;

    document.getElementById('panel-tags').innerHTML = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    document.getElementById('panel-tools').innerHTML = project.tools.map(t => `
      <div class="chip-item"><span class="chip-cat">TOOL:</span> ${t}</div>
    `).join('');

    if (overlay) overlay.classList.add('open');
  }

  function closeProjectDetail() {
    if (overlay) overlay.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeProjectDetail);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProjectDetail();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectDetail();
  });

  /* ------------------------------------------------------------------------
     8. WORK PAGE FILTERING LOGIC
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('#all-projects-grid .project-card');

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     9. MOUSE PARALLAX 3D HERO SCENE (Bold Moment Engine)
     ------------------------------------------------------------------------ */
  const heroContainer = document.getElementById('hero-scene-container');
  const heroScene = document.getElementById('hero-scene-3d');

  if (heroContainer && heroScene) {
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = heroContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = ((e.clientX - centerX) / rect.width) * 30; // Max 30deg tilt
      targetY = -((e.clientY - centerY) / rect.height) * 30;
    });

    function animateParallax() {
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      heroScene.style.transform = `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
      requestAnimationFrame(animateParallax);
    }
    animateParallax();
  }

  /* ------------------------------------------------------------------------
     10. SCROLL SCRUBBER & PROCESS TIMELINE OBSERVER
     ------------------------------------------------------------------------ */
  const playheadFill = document.getElementById('playhead-fill');
  const processLineFill = document.getElementById('process-line-fill');
  const processSteps = document.querySelectorAll('.process-step');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (playheadFill) playheadFill.style.width = `${scrollPercent}%`;

    // Process Timeline Scrubbing
    const processSection = document.getElementById('process-timeline');
    if (processSection && processLineFill) {
      const rect = processSection.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      if (rect.top < viewHeight && rect.bottom > 0) {
        const totalDist = rect.height;
        const currentDist = Math.max(0, Math.min(totalDist, viewHeight * 0.6 - rect.top));
        const processPercent = (currentDist / totalDist) * 100;

        processLineFill.style.height = `${processPercent}%`;

        // Highlight Active Process Node
        processSteps.forEach((step, idx) => {
          if (processPercent >= (idx / processSteps.length) * 80) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      }
    }
  });

  /* ------------------------------------------------------------------------
     11. CUSTOM MAGNETIC CURSOR
     ------------------------------------------------------------------------ */
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('cursor-dot');

  let curX = 0, curY = 0;
  let dotX = 0, dotY = 0;

  window.addEventListener('mousemove', (e) => {
    curX = e.clientX;
    curY = e.clientY;
  });

  function renderCursor() {
    dotX += (curX - dotX) * 0.3;
    dotY += (curY - dotY) * 0.3;

    if (cursor) cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    if (cursorDot) cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Scale cursor over interactive elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .project-card, .floating-frame, .filter-btn')) {
      if (cursor) cursor.classList.add('active');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .project-card, .floating-frame, .filter-btn')) {
      if (cursor) cursor.classList.remove('active');
    }
  });

  /* ------------------------------------------------------------------------
     12. INTERACTIVE CONTACT FORM VALIDATION & SUBMIT STATE
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const successState = document.getElementById('form-success-state');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show temporary loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (successState) successState.style.display = 'block';
      }, 1200);
    });
  }

});
