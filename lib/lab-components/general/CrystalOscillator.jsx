'use client';
import React from 'react';

const CrystalOscillator = ({ width = 36, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <linearGradient id="xtal-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d8d8d8" />
        <stop offset="40%" stopColor="#c0c0c0" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
      <filter id="xtal-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Leads */}
    <line x1="14" y1="28" x2="14" y2="36" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="22" y1="28" x2="22" y2="36" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* HC-49 metal can body */}
    <rect x="5" y="4" width="26" height="24" rx="3" fill="url(#xtal-body)" filter="url(#xtal-shadow)" />
    {/* Edge bevel */}
    <rect x="5" y="4" width="26" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
    {/* Stamp / label area */}
    <rect x="8" y="10" width="20" height="12" rx="1" fill="rgba(0,0,0,0.05)" />
    {/* Frequency label */}
    <text x="18" y="15" fill="#555" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>16.000</text>
    <text x="18" y="20" fill="#777" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>MHz</text>
  </svg>
);

export default CrystalOscillator;
