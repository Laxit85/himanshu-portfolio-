import React, { useState, useEffect } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    let animationFrame;
    let targetX = 0, targetY = 0;
    let currentDotX = 0, currentDotY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-card, .floating-frame, .filter-btn')) {
        setActive(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .project-card, .floating-frame, .filter-btn')) {
        setActive(false);
      }
    };

    const render = () => {
      currentDotX += (targetX - currentDotX) * 0.3;
      currentDotY += (targetY - currentDotY) * 0.3;
      setDotPos({ x: currentDotX, y: currentDotY });
      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${active ? 'active' : ''}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
      ></div>
      <div
        className="custom-cursor-dot"
        style={{ transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)` }}
      ></div>
    </>
  );
}
