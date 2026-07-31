'use client';
import React from 'react';

const Thermistor = ({ width = 34, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 34 40" fill="none">
    <defs>
      <radialGradient id="therm-body" cx="0.45" cy="0.4" r="0.55">
        <stop offset="0%" stopColor="#f4a261" />
        <stop offset="100%" stopColor="#a86832" />
      </radialGradient>
      <filter id="therm-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Leads */}
    <line x1="13" y1="30" x2="13" y2="40" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="21" y1="30" x2="21" y2="40" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Disc body */}
    <ellipse cx="17" cy="18" rx="13" ry="13" fill="url(#therm-body)" filter="url(#therm-shadow)" />
    {/* Highlight */}
    <ellipse cx="14" cy="13" rx="5" ry="4" fill="rgba(255,255,255,0.25)" transform="rotate(-15 14 13)" />
    {/* NTC label */}
    <text x="17" y="19" fill="#5a3e1b" fontSize="4.5" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: 'none' }}>NTC</text>
    {/* Temp icon */}
    <text x="17" y="25" fill="#8b5e3c" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>10K</text>
  </svg>
);

export default Thermistor;
