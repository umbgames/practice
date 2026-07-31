'use client';
import React from 'react';

const PinHeader = ({ width = 48, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 24" fill="none">
    <defs>
      <filter id="ph-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.3" /></filter>
    </defs>
    {Array.from({ length: 5 }).map((_, i) => (
      <g key={i}>
        <rect x={4 + i * 8} y="10" width="8" height="4" fill="#222" filter="url(#ph-shadow)" />
        <line x1={8 + i * 8} y1="2" x2={8 + i * 8} y2="22" stroke="#e9c46a" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}
  </svg>
);

export default PinHeader;
