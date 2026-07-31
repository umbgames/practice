'use client';
import React from 'react';

const Diode = ({ width = 70, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 70 24" fill="none">
    <defs>
      <linearGradient id="diode-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0f0f0f" />
      </linearGradient>
      <filter id="diode-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Left lead (Anode) */}
    <line x1="0" y1="12" x2="16" y2="12" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Right lead (Cathode) */}
    <line x1="54" y1="12" x2="70" y2="12" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Epoxy body */}
    <rect x="16" y="3" width="38" height="18" rx="3" fill="url(#diode-body)" filter="url(#diode-shadow)" />
    {/* Cathode band */}
    <rect x="48" y="3" width="5" height="18" rx="1" fill="#C0C0C0" opacity="0.8" />
    {/* Body highlight */}
    <rect x="16" y="3" width="38" height="5" rx="3" fill="rgba(255,255,255,0.08)" />
    {/* Label */}
    <text x="33" y="13" fill="#777" fontSize="4.5" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: 'none' }}>1N4007</text>
  </svg>
);

export default Diode;
