import React from 'react';

export function ShutterTransition({ active }) {
  return (
    <div className={`shutter-curtain ${active ? 'active' : ''}`}>
      <div className="shutter-leaf shutter-leaf-top"></div>
      <div className="shutter-leaf shutter-leaf-bottom"></div>
    </div>
  );
}
