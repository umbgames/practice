'use client';
import React from 'react';

const Resistor = ({ width = 80, height = 28, bands = [1, 0, 2, 'gold'] }) => {
  const bandColors = {
    0: '#000', 1: '#8B4513', 2: '#e63946', 3: '#FF8C00',
    4: '#FFD700', 5: '#2a9d8f', 6: '#0077b6', 7: '#7B2D8B',
    8: '#666', 9: '#fff', gold: '#DAA520', silver: '#C0C0C0',
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 28" fill="none">
      <defs>
        <linearGradient id="res-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5deb3" />
          <stop offset="40%" stopColor="#d4a373" />
          <stop offset="100%" stopColor="#a67c52" />
        </linearGradient>
        <filter id="res-shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Lead wires */}
      <line x1="0" y1="14" x2="18" y2="14" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
      <line x1="62" y1="14" x2="80" y2="14" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" />
      {/* Body */}
      <rect x="18" y="4" width="44" height="20" rx="4" fill="url(#res-body)" filter="url(#res-shadow)" />
      {/* Highlight */}
      <rect x="18" y="4" width="44" height="6" rx="4" fill="rgba(255,255,255,0.18)" />
      {/* Color bands */}
      {bands[0] !== undefined && <rect x="24" y="4" width="4" height="20" fill={bandColors[bands[0]]} rx="1" opacity="0.9" />}
      {bands[1] !== undefined && <rect x="32" y="4" width="4" height="20" fill={bandColors[bands[1]]} rx="1" opacity="0.9" />}
      {bands[2] !== undefined && <rect x="40" y="4" width="4" height="20" fill={bandColors[bands[2]]} rx="1" opacity="0.9" />}
      {bands[3] !== undefined && <rect x="52" y="4" width="4" height="20" fill={bandColors[bands[3]]} rx="1" opacity="0.8" />}
    </svg>
  );
};

export default Resistor;
