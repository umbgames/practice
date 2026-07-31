'use client';
import React from 'react';

const ScrewTerminalBlock = ({ width = 40, height = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 30" fill="none">
    <defs>
      <linearGradient id="stb-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e7d32" />
        <stop offset="100%" stopColor="#1b5e20" />
      </linearGradient>
      <filter id="stb-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.3" /></filter>
    </defs>
    {/* Pins */}
    <line x1="12" y1="24" x2="12" y2="30" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="28" y1="24" x2="28" y2="30" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Body */}
    <rect x="4" y="4" width="32" height="20" rx="1" fill="url(#stb-body)" filter="url(#stb-shadow)" />
    
    {/* Wire entry holes */}
    <rect x="8" y="4" width="8" height="6" fill="#111" />
    <rect x="24" y="4" width="8" height="6" fill="#111" />
    
    {/* Screws */}
    <circle cx="12" cy="16" r="3" fill="#e0e0e0" stroke="#999" strokeWidth="0.5" />
    <line x1="10" y1="16" x2="14" y2="16" stroke="#555" strokeWidth="1" />
    
    <circle cx="28" cy="16" r="3" fill="#e0e0e0" stroke="#999" strokeWidth="0.5" />
    <line x1="26" y1="16" x2="30" y2="16" stroke="#555" strokeWidth="1" />
  </svg>
);

export default ScrewTerminalBlock;
