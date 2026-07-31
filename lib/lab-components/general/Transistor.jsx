'use client';
import React from 'react';

const Transistor = ({ width = 40, height = 50, type = 'NPN' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 50" fill="none">
    <defs>
      <linearGradient id="trans-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
      <linearGradient id="trans-tab" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
      <filter id="trans-shadow">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* 3 Leads: E, B, C */}
    <line x1="12" y1="38" x2="12" y2="50" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="38" x2="20" y2="50" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="28" y1="38" x2="28" y2="50" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Metal tab / heatsink at top */}
    <rect x="6" y="2" width="28" height="6" rx="1.5" fill="url(#trans-tab)" />
    <circle cx="20" cy="5" r="2" fill="#bbb" stroke="#999" strokeWidth="0.5" />
    {/* Epoxy body */}
    <path d="M8 8 L32 8 L32 38 Q20 42 8 38 Z" fill="url(#trans-body)" filter="url(#trans-shadow)" />
    {/* Face flat */}
    <rect x="10" y="10" width="20" height="26" rx="2" fill="#1a1a1a" />
    {/* Highlight */}
    <rect x="10" y="10" width="20" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
    {/* Part label */}
    <text x="20" y="22" fill="#777" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>2N2222</text>
    <text x="20" y="28" fill="#555" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>{type}</text>
    {/* Pin labels */}
    <text x="12" y="47" fill="#888" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>E</text>
    <text x="20" y="47" fill="#888" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>B</text>
    <text x="28" y="47" fill="#888" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>C</text>
  </svg>
);

export default Transistor;
