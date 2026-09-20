import React from 'react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3 style={{ fontSize: '2rem' }}>HIMANSHU SRIMALI</h3>
          <p style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            VIDEO EDITING × GRAPHIC DESIGN
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'var(--ink-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            LONDON & GLOBAL REMOTE
          </p>
          <p style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} HIMANSHU SRIMALI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
