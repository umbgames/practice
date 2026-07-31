'use client';
import React from 'react';

const Fuse = ({ width = 64, height = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 20" fill="none">
    <defs>
      <linearGradient id="fuse-glass" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="50%" stopColor="rgba(200,220,255,0.15)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
      </linearGradient>
      <linearGradient id="fuse-cap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <filter id="fuse-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.2" />
      </filter>
    </defs>
    {/* Left cap */}
    <rect x="2" y="3" width="12" height="14" rx="2" fill="url(#fuse-cap)" />
    {/* Right cap */}
    <rect x="50" y="3" width="12" height="14" rx="2" fill="url(#fuse-cap)" />
    {/* Glass tube body */}
    <rect x="14" y="4" width="36" height="12" rx="6" fill="url(#fuse-glass)" stroke="rgba(200,220,255,0.3)" strokeWidth="0.8" filter="url(#fuse-shadow)" />
    {/* Internal wire */}
    <line x1="14" y1="10" x2="50" y2="10" stroke="#C0C0C0" strokeWidth="0.8" />
    {/* Highlight on glass */}
    <rect x="18" y="5" width="24" height="3" rx="3" fill="rgba(255,255,255,0.3)" />
    {/* Rating */}
    <text x="32" y="10.5" fill="#666" fontSize="3.5" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: 'none' }}>1A</text>
  </svg>
);

export default Fuse;
