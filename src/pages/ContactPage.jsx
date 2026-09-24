import React, { useState } from 'react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="section-container">
      <div className="contact-grid">
        <div className="contact-form-card">
          <span className="mono-tag">DISPATCH // DIRECT TRANSMISSION</span>
          <h2 style={{ fontSize: '2.8rem', margin: '0.5rem 0 1.5rem' }}>START A CONVERSATION</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-control"
                  placeholder="e.g. Your Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  className="form-control"
                  placeholder="e.g. yourname@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-type">Project Discipline</label>
                <select id="contact-type" className="form-control">
                  <option value="video">Video Editing & Commercial Cut</option>
                  <option value="motion">Motion Graphics & Title Sequence</option>
                  <option value="design">Graphic Design & Brand Identity</option>
                  <option value="full">Full Dual-Craft Project (Video + Design)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Project Brief & Timeline</label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  placeholder="Tell me about your project goals, scope, and target deadline..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                disabled={loading}
              >
                <span>{loading ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}</span>
                <span>→</span>
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <span className="mono-tag" style={{ color: 'var(--cyan)' }}>STATUS // SENT SUCCESSFULLY</span>
              <h3 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>TRANSMISSION RECEIVED</h3>
              <p style={{ color: 'var(--ink-dim)' }}>
                Thank you for reaching out. I will review your project brief and respond within 24 hours.
              </p>
            </div>
          )}
        </div>

        <div>
          <div className="availability-badge">
            <div className="status-dot"></div>
            <span>AVAILABLE FOR Q4 2026 PROJECTS</span>
          </div>

          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>DIRECT INFO</h3>

          <div style={{ marginBottom: '2rem' }}>
            <span className="mono-tag">EMAIL</span>
            <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--cyan)', marginTop: '0.2rem' }}>
              <a href="mailto:anokhasaty@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                anokhasaty@gmail.com
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <span className="mono-tag">PHONE</span>
            <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--cyan)', marginTop: '0.2rem' }}>
              <a href="tel:7568987244" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 7568987244
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <span className="mono-tag">LOCATION</span>
            <p style={{ fontSize: '1.1rem', color: 'var(--ink)', marginTop: '0.2rem' }}>
              Jodhpur, Rajasthan, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
