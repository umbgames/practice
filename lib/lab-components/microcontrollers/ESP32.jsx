'use client';
import React from 'react';

const ESP32 = ({ width = 60, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 40" fill="none">
    <defs>
      <linearGradient id="esp32-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="esp32-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.4" /></filter>
    </defs>
    <rect x="2" y="2" width="56" height="36" rx="2" fill="url(#esp32-pcb)" filter="url(#esp32-shadow)" />
    
    {/* USB */}
    <rect x="0" y="14" width="6" height="12" rx="1" fill="#c0c0c0" stroke="#888" strokeWidth="0.5" />
    
    {/* Headers */}
    {Array.from({ length: 19 }).map((_, i) => (
      <g key={i}>
        <circle cx={10 + i * 2.5} cy="4" r="0.8" fill="#e9c46a" />
        <circle cx={10 + i * 2.5} cy="36" r="0.8" fill="#e9c46a" />
      </g>
    ))}
    
    {/* ESP-WROOM-32 Module */}
    <rect x="24" y="8" width="22" height="24" rx="1" fill="#e0e0e0" stroke="#bbb" strokeWidth="0.5" />
    {/* Antenna area */}
    <rect x="40" y="8" width="6" height="24" fill="#d0d0d0" />
    <path d="M41 10 L45 10 L45 12 L42 12 L42 14 L45 14" fill="none" stroke="#e63946" strokeWidth="0.8" />
    
    {/* Buttons */}
    <rect x="12" y="14" width="3" height="4" fill="#333" />
    <rect x="12" y="22" width="3" height="4" fill="#333" />
    <text x="13.5" y="13" fill="#aaa" fontSize="2" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>EN</text>
    <text x="13.5" y="28" fill="#aaa" fontSize="2" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>BOOT</text>

    {/* CP2102 IC */}
    <rect x="18" y="18" width="4" height="4" rx="0.5" fill="#111" />
    
    <text x="31" y="20" fill="#555" fontSize="2.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" style={{userSelect:'none'}}>ESP32</text>
  </svg>
);

export default ESP32;
