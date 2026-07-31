'use client';
import React from 'react';

const Antenna = ({ width = 24, height = 60 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 60" fill="none">
    <defs>
      <linearGradient id="ant-rod" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#bbb" />
        <stop offset="40%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <linearGradient id="ant-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#444" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <filter id="ant-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Lead */}
    <line x1="12" y1="54" x2="12" y2="60" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Base */}
    <rect x="6" y="44" width="12" height="10" rx="2" fill="url(#ant-base)" filter="url(#ant-shadow)" />
    {/* Rod (tapered) */}
    <polygon points="10,44 14,44 12.5,4 11.5,4" fill="url(#ant-rod)" />
    {/* Tip ball */}
    <circle cx="12" cy="4" r="2.5" fill="#ddd" />
    <circle cx="11" cy="3" r="1" fill="rgba(255,255,255,0.4)" />
    {/* Signal waves */}
    <path d="M18 10 Q22 14 18 18" fill="none" stroke="#00b4d8" strokeWidth="0.7" opacity="0.5" />
    <path d="M20 8 Q26 14 20 20" fill="none" stroke="#00b4d8" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

export default Antenna;
