'use client';
import React from 'react';

const Speaker = ({ width = 50, height = 50 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 50" fill="none">
    <defs>
      <radialGradient id="spk-cone" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#555" /><stop offset="60%" stopColor="#333" /><stop offset="100%" stopColor="#1a1a1a" />
      </radialGradient>
      <linearGradient id="spk-frame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#444" /><stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <filter id="spk-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" /></filter>
    </defs>
    <line x1="18" y1="46" x2="18" y2="50" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="46" x2="32" y2="50" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="25" cy="24" r="22" fill="url(#spk-frame)" filter="url(#spk-shadow)" />
    <circle cx="25" cy="24" r="18" fill="url(#spk-cone)" />
    <circle cx="25" cy="24" r="12" fill="none" stroke="#444" strokeWidth="0.5" />
    <circle cx="25" cy="24" r="6" fill="none" stroke="#444" strokeWidth="0.5" />
    <circle cx="25" cy="24" r="4" fill="#1a1a1a" stroke="#555" strokeWidth="0.8" />
    {/* Screw holes */}
    {[0,90,180,270].map(a => {
      const rad = a * Math.PI / 180;
      return <circle key={a} cx={25 + 20*Math.cos(rad)} cy={24 + 20*Math.sin(rad)} r="1.5" fill="#222" stroke="#444" strokeWidth="0.3" />;
    })}
  </svg>
);

export default Speaker;
