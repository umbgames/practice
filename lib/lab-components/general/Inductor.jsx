'use client';
import React from 'react';

const Inductor = ({ width = 80, height = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 30" fill="none">
    <defs>
      <linearGradient id="ind-wire" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#b87333" />
        <stop offset="50%" stopColor="#da8a47" />
        <stop offset="100%" stopColor="#b87333" />
      </linearGradient>
      <linearGradient id="ind-core" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#222" />
      </linearGradient>
      <filter id="ind-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Lead wires */}
    <line x1="0" y1="15" x2="14" y2="15" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    <line x1="66" y1="15" x2="80" y2="15" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Ferrite core */}
    <rect x="14" y="6" width="52" height="18" rx="9" fill="url(#ind-core)" filter="url(#ind-shadow)" />
    {/* Coil windings */}
    {[0,1,2,3,4,5,6].map(i => (
      <ellipse key={i} cx={21 + i * 7} cy="15" rx="3.2" ry="8" fill="none" stroke="url(#ind-wire)" strokeWidth="2.2" opacity="0.85" />
    ))}
    {/* Core highlight */}
    <rect x="14" y="6" width="52" height="5" rx="9" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export default Inductor;
