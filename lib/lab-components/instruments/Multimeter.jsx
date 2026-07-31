'use client';
import React from 'react';

const Multimeter = ({ width = 80, height = 120 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 120" fill="none">
    <defs>
      <linearGradient id="dmm-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f4a261" />
        <stop offset="100%" stopColor="#e76f51" />
      </linearGradient>
      <linearGradient id="dmm-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a8d8a8" />
        <stop offset="100%" stopColor="#7bc47b" />
      </linearGradient>
      <filter id="dmm-shadow"><feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.3" /></filter>
    </defs>
    {/* Body rubber holster */}
    <rect x="4" y="4" width="72" height="112" rx="6" fill="#264653" filter="url(#dmm-shadow)" />
    {/* Plastic body */}
    <rect x="8" y="8" width="64" height="104" rx="4" fill="url(#dmm-body)" />
    
    {/* Screen */}
    <rect x="14" y="14" width="52" height="24" rx="2" fill="#111" />
    <rect x="16" y="16" width="48" height="20" rx="1" fill="url(#dmm-screen)" />
    <text x="40" y="32" fill="#1a4a1a" fontSize="12" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>0.000</text>
    
    {/* Selector Dial */}
    <circle cx="40" cy="62" r="18" fill="#333" />
    <circle cx="40" cy="62" r="16" fill="#444" />
    {/* Pointer */}
    <path d="M40 46 L38 52 L42 52 Z" fill="#fff" />
    {/* Knob */}
    <circle cx="40" cy="62" r="8" fill="#111" />
    
    {/* Probes Ports */}
    {/* COM (Black) */}
    <circle cx="25" cy="100" r="4" fill="#111" />
    <circle cx="25" cy="100" r="2.5" fill="#444" />
    {/* V/Ohm (Red) */}
    <circle cx="40" cy="100" r="4" fill="#e63946" />
    <circle cx="40" cy="100" r="2.5" fill="#444" />
    {/* 10A (Red) */}
    <circle cx="55" cy="100" r="4" fill="#e63946" />
    <circle cx="55" cy="100" r="2.5" fill="#444" />
  </svg>
);

export default Multimeter;
