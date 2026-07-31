'use client';
import React from 'react';

const Capacitor = ({ width = 44, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 40" fill="none">
    <defs>
      <linearGradient id="cap-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e9c46a" />
        <stop offset="50%" stopColor="#dba23a" />
        <stop offset="100%" stopColor="#c49122" />
      </linearGradient>
      <filter id="cap-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* Top lead */}
    <line x1="22" y1="0" x2="22" y2="8" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Bottom lead */}
    <line x1="22" y1="32" x2="22" y2="40" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Ceramic disc body */}
    <ellipse cx="22" cy="20" rx="16" ry="12" fill="url(#cap-body)" filter="url(#cap-shadow)" />
    {/* Highlight */}
    <ellipse cx="19" cy="16" rx="8" ry="4" fill="rgba(255,255,255,0.22)" />
    {/* Label */}
    <text x="22" y="21" fill="#5a3e1b" fontSize="5" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: 'none' }}>104</text>
  </svg>
);

export default Capacitor;
