'use client';
import React from 'react';

const DCPowerJack = ({ width = 36, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 48" fill="none">
    <defs>
      <linearGradient id="dcj-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" /><stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
    </defs>
    {/* Pins */}
    <line x1="12" y1="40" x2="12" y2="48" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="48" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="44" x2="18" y2="48" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
    {/* Body */}
    <rect x="6" y="8" width="24" height="32" rx="2" fill="url(#dcj-body)" />
    {/* Barrel opening */}
    <ellipse cx="18" cy="8" rx="10" ry="4" fill="#000" />
    <ellipse cx="18" cy="8" rx="8" ry="3" fill="#111" />
    <circle cx="18" cy="8" r="1.5" fill="#C0C0C0" />
    {/* Highlight */}
    <rect x="8" y="10" width="2" height="28" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export default DCPowerJack;
