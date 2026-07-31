'use client';
import React from 'react';

const PiezoBuzzer = ({ width = 40, height = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 34" fill="none">
    <defs>
      <radialGradient id="piezo-top" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#333" />
        <stop offset="80%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#111" />
      </radialGradient>
      <linearGradient id="piezo-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#222" />
      </linearGradient>
      <filter id="piezo-shadow">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Leads */}
    <line x1="16" y1="28" x2="16" y2="34" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="28" x2="24" y2="34" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    {/* Side cylinder */}
    <rect x="6" y="16" width="28" height="14" rx="2" fill="url(#piezo-side)" filter="url(#piezo-shadow)" />
    {/* Top face */}
    <ellipse cx="20" cy="16" rx="14" ry="5" fill="url(#piezo-top)" />
    {/* Sound hole */}
    <circle cx="20" cy="14" r="3" fill="#0a0a0a" />
    {/* Ring detail */}
    <ellipse cx="20" cy="16" rx="10" ry="3.5" fill="none" stroke="#444" strokeWidth="0.5" />
    {/* + marker */}
    <text x="25" y="30" fill="#e63946" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>+</text>
  </svg>
);

export default PiezoBuzzer;
