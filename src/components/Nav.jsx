import React, { useState } from 'react';

export function Nav({ activeRoute }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'Home', route: 'home', hash: '#/' },
    { name: 'Work', route: 'work', hash: '#/work' },
    { name: 'About', route: 'about', hash: '#/about' },
    { name: 'Services', route: 'services', hash: '#/services' },
    { name: 'Contact', route: 'contact', hash: '#/contact' }
  ];

  return (
    <>
      <header className="site-nav">
        <a href="#/" className="nav-brand">
          <div className="brand-symbol">HS</div>
          <span className="brand-text">HIMANSHU SRIMALI</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.route}>
              <a
                href={l.hash}
                className={`nav-link ${activeRoute === l.route ? 'active' : ''}`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l.route}
            href={l.hash}
            className={`nav-link ${activeRoute === l.route ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {l.name}
          </a>
        ))}
      </div>
    </>
  );
}
