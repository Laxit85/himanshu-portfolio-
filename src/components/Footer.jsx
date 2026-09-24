import React from 'react';

export function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: '1px solid var(--hairline)', padding: '3rem 2rem', background: '#07080b' }}>
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', color: 'var(--ink-bright)' }}>
            HIMANSHU SRIMALI
          </h3>
          <p style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
            VIDEO EDITING × GRAPHIC DESIGN
          </p>
          <div style={{ marginTop: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <a href="mailto:anokhasaty@gmail.com" style={{ color: 'var(--cyan)', textDecoration: 'none', marginRight: '1.2rem' }}>
              ✉ anokhasaty@gmail.com
            </a>
            <a href="tel:7568987244" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
              📞 +91 7568987244
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'var(--ink-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            JODHPUR, RAJASTHAN
          </p>
          <p style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: '1.6' }}>
            © {new Date().getFullYear()} HIMANSHU SRIMALI. ALL RIGHTS RESERVED BY{' '}
            <a
              href="https://morphnex.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cyan)', textDecoration: 'none', fontWeight: '600' }}
            >
              MORPHNEX
            </a>.
          </p>
          <p style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
            POWERED BY{' '}
            <a
              href="https://morphnex.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cyan)', textDecoration: 'none', fontWeight: '600', letterSpacing: '0.05em' }}
            >
              MORPHNEX (MORPHNEX.IN) ↗
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
