'use client';
import React from 'react';

const LM358 = ({ width = 40, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 40" fill="none">
    <defs>
      <linearGradient id="lm358-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <filter id="lm358-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.3" /></filter>
    </defs>
    {/* Pins */}
    {[8, 16, 24, 32].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="4" x2={x} y2="10" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
        <line x1={x} y1="30" x2={x} y2="36" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}
    
    <rect x="4" y="10" width="32" height="20" rx="1" fill="url(#lm358-body)" filter="url(#lm358-shadow)" />
    <path d="M4 17 A3 3 0 0 0 4 23" fill="#111" stroke="#000" strokeWidth="0.5" />
    <circle cx="8" cy="27" r="1.5" fill="#444" />
    
    <text x="20" y="21" fill="#777" fontSize="4.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>LM358</text>
  </svg>
);

export default LM358;
