'use client';
import React from 'react';

const Potentiometer = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill="none">
    <defs>
      <radialGradient id="pot-body" cx="0.5" cy="0.45" r="0.5">
        <stop offset="0%" stopColor="#4a4a6a" />
        <stop offset="100%" stopColor="#1a1a2e" />
      </radialGradient>
      <linearGradient id="pot-shaft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <filter id="pot-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* 3 leads */}
    <line x1="14" y1="42" x2="14" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="42" x2="24" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="42" x2="34" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Body */}
    <circle cx="24" cy="24" r="18" fill="url(#pot-body)" filter="url(#pot-shadow)" />
    {/* Ring groove */}
    <circle cx="24" cy="24" r="16" fill="none" stroke="#333" strokeWidth="1" />
    <circle cx="24" cy="24" r="12" fill="none" stroke="#444" strokeWidth="0.5" />
    {/* Center shaft */}
    <circle cx="24" cy="24" r="6" fill="url(#pot-shaft)" />
    {/* Shaft slot */}
    <line x1="24" y1="19" x2="24" y2="29" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    {/* Indicator notch */}
    <circle cx="24" cy="10" r="1.5" fill="#e63946" />
    {/* Specular */}
    <ellipse cx="20" cy="18" rx="5" ry="3" fill="rgba(255,255,255,0.1)" transform="rotate(-20 20 18)" />
    {/* Value text */}
    <text x="24" y="38" fill="#666" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>10KΩ</text>
  </svg>
);

export default Potentiometer;
