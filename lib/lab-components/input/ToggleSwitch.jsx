'use client';
import React from 'react';

const ToggleSwitch = ({ width = 28, height = 44, on = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 44" fill="none">
    <defs>
      <linearGradient id="tgl-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#222" />
      </linearGradient>
      <linearGradient id="tgl-lever" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
      <filter id="tgl-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Pins */}
    <line x1="10" y1="38" x2="10" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="38" x2="18" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="14" y1="38" x2="14" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* Body */}
    <rect x="4" y="14" width="20" height="24" rx="3" fill="url(#tgl-body)" filter="url(#tgl-shadow)" />
    {/* Toggle lever */}
    <rect x="10" y={on ? 4 : 16} width="8" height="16" rx="2" fill="url(#tgl-lever)" />
    {/* Lever tip */}
    <circle cx="14" cy={on ? 8 : 28} r="3" fill="#ddd" />
    <circle cx="13" cy={on ? 7 : 27} r="1" fill="rgba(255,255,255,0.4)" />
  </svg>
);

export default ToggleSwitch;
