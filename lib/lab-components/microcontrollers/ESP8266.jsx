'use client';
import React from 'react';

const ESP8266 = ({ width = 50, height = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 34" fill="none">
    <defs>
      <linearGradient id="esp8266-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="esp8266-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.4" /></filter>
    </defs>
    <rect x="2" y="2" width="46" height="30" rx="2" fill="url(#esp8266-pcb)" filter="url(#esp8266-shadow)" />
    
    {/* USB */}
    <rect x="0" y="11" width="6" height="12" rx="1" fill="#c0c0c0" stroke="#888" strokeWidth="0.5" />
    
    {/* Headers */}
    {Array.from({ length: 15 }).map((_, i) => (
      <g key={i}>
        <circle cx={10 + i * 2.5} cy="4" r="0.8" fill="#e9c46a" />
        <circle cx={10 + i * 2.5} cy="30" r="0.8" fill="#e9c46a" />
      </g>
    ))}
    
    {/* ESP-12E/F Module */}
    <rect x="24" y="6" width="16" height="22" rx="1" fill="#e0e0e0" stroke="#bbb" strokeWidth="0.5" />
    {/* Antenna area */}
    <rect x="36" y="6" width="4" height="22" fill="#d0d0d0" />
    <path d="M37 8 L39 8 L39 10 L37 10 L37 12 L39 12" fill="none" stroke="#e63946" strokeWidth="0.8" />
    
    {/* CH340G / CP2102 IC */}
    <rect x="14" y="15" width="4" height="4" rx="0.5" fill="#111" />
    
    <text x="29" y="18" fill="#555" fontSize="2.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" style={{userSelect:'none'}}>NodeMCU</text>
  </svg>
);

export default ESP8266;
