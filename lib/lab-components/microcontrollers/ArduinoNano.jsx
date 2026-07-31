'use client';
import React from 'react';

const ArduinoNano = ({ width = 60, height = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 28" fill="none">
    <defs>
      <linearGradient id="nano-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#006468" />
        <stop offset="100%" stopColor="#004a4d" />
      </linearGradient>
      <filter id="nano-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    <rect x="2" y="2" width="56" height="24" rx="2" fill="url(#nano-pcb)" filter="url(#nano-shadow)" />
    
    {/* USB */}
    <rect x="0" y="8" width="6" height="12" rx="1" fill="#e0e0e0" stroke="#999" strokeWidth="0.5" />
    
    {/* ATmega328P TQFP */}
    <rect x="26" y="10" width="8" height="8" rx="0.5" fill="#111" transform="rotate(45 30 14)" />
    <circle cx="28" cy="12" r="0.5" fill="#333" transform="rotate(45 30 14)" />
    
    {/* Headers */}
    {Array.from({ length: 15 }).map((_, i) => (
      <g key={i}>
        <circle cx={10 + i * 3} cy="4" r="0.8" fill="#e9c46a" />
        <circle cx={10 + i * 3} cy="24" r="0.8" fill="#e9c46a" />
      </g>
    ))}
    
    {/* Reset button */}
    <rect x="36" y="12" width="3" height="4" fill="#ddd" />
    <circle cx="37.5" cy="14" r="1" fill="#666" />
    
    {/* ICSP Header */}
    <rect x="52" y="11" width="4" height="6" fill="#222" />
    
    <text x="18" y="16" fill="#fff" fontSize="3.5" fontFamily="sans-serif" fontWeight="bold" opacity="0.8" style={{userSelect:'none'}}>NANO</text>
  </svg>
);

export default ArduinoNano;
