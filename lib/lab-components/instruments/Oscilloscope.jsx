'use client';
import React from 'react';

const Oscilloscope = ({ width = 120, height = 80 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 120 80" fill="none">
    <defs>
      <linearGradient id="osc-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#b0b0b0" />
      </linearGradient>
      <filter id="osc-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" /></filter>
    </defs>
    {/* Body */}
    <rect x="2" y="2" width="116" height="76" rx="4" fill="url(#osc-body)" filter="url(#osc-shadow)" />
    <rect x="4" y="4" width="112" height="72" rx="2" fill="#d0d0d0" stroke="#fff" strokeWidth="0.5" />
    
    {/* Screen */}
    <rect x="8" y="10" width="70" height="50" rx="2" fill="#111" />
    {/* Grid */}
    {Array.from({ length: 7 }).map((_, i) => (
      <line key={`v${i}`} x1={18 + i * 10} y1="10" x2={18 + i * 10} y2="60" stroke="#333" strokeWidth="0.5" />
    ))}
    {Array.from({ length: 5 }).map((_, i) => (
      <line key={`h${i}`} x1="8" y1={10 + i * 10} x2="78" y2={10 + i * 10} stroke="#333" strokeWidth="0.5" />
    ))}
    {/* Waveform */}
    <path d="M 8 35 Q 18 10 28 35 T 48 35 T 68 35" fill="none" stroke="#e9c46a" strokeWidth="1.5" />
    
    {/* Knobs & Buttons */}
    {/* Vertical */}
    <circle cx="92" cy="20" r="4" fill="#333" />
    <circle cx="106" cy="20" r="4" fill="#333" />
    {/* Horizontal */}
    <circle cx="99" cy="40" r="6" fill="#333" />
    
    {/* BNC Connectors */}
    <circle cx="92" cy="65" r="5" fill="#e0e0e0" stroke="#888" strokeWidth="1" />
    <circle cx="92" cy="65" r="2.5" fill="#111" />
    <text x="92" y="56" fill="#555" fontSize="3" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>CH1</text>
    
    <circle cx="106" cy="65" r="5" fill="#e0e0e0" stroke="#888" strokeWidth="1" />
    <circle cx="106" cy="65" r="2.5" fill="#111" />
    <text x="106" y="56" fill="#555" fontSize="3" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>CH2</text>
  </svg>
);

export default Oscilloscope;
