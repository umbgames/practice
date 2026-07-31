'use client';
import React from 'react';

const ShiftRegister = ({ width = 72, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 72 40" fill="none">
    <defs>
      <linearGradient id="sr-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <filter id="sr-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1" floodOpacity="0.3" /></filter>
    </defs>
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={i}>
        <line x1={8 + i * 8} y1="4" x2={8 + i * 8} y2="10" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
        <line x1={8 + i * 8} y1="30" x2={8 + i * 8} y2="36" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}
    
    <rect x="4" y="10" width="64" height="20" rx="1" fill="url(#sr-body)" filter="url(#sr-shadow)" />
    <path d="M4 17 A3 3 0 0 0 4 23" fill="#111" stroke="#000" strokeWidth="0.5" />
    <circle cx="8" cy="27" r="1.5" fill="#444" />
    
    <text x="36" y="21" fill="#777" fontSize="4.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>74HC595</text>
  </svg>
);

export default ShiftRegister;
