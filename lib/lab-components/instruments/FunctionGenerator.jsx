'use client';
import React from 'react';

const FunctionGenerator = ({ width = 100, height = 70 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 70" fill="none">
    <defs>
      <linearGradient id="fg-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d5d5d5" />
        <stop offset="100%" stopColor="#a0a0a0" />
      </linearGradient>
      <filter id="fg-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" /></filter>
    </defs>
    {/* Body */}
    <rect x="2" y="2" width="96" height="66" rx="3" fill="url(#fg-body)" filter="url(#fg-shadow)" />
    
    {/* Screen */}
    <rect x="8" y="10" width="40" height="20" rx="2" fill="#111" />
    <text x="28" y="22" fill="#00e676" fontSize="6" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>1.000 kHz</text>
    
    {/* Waveform Buttons */}
    <rect x="8" y="36" width="10" height="6" rx="1" fill="#fff" stroke="#999" strokeWidth="0.5" />
    <path d="M10 39 Q13 36 16 39" fill="none" stroke="#333" strokeWidth="1" />
    <rect x="20" y="36" width="10" height="6" rx="1" fill="#ddd" stroke="#999" strokeWidth="0.5" />
    <path d="M22 40 L25 36 L28 40" fill="none" stroke="#333" strokeWidth="1" />
    <rect x="32" y="36" width="10" height="6" rx="1" fill="#ddd" stroke="#999" strokeWidth="0.5" />
    <path d="M34 40 L34 36 L37 36 L37 40 Z" fill="none" stroke="#333" strokeWidth="1" />
    
    {/* Large Dial */}
    <circle cx="76" cy="30" r="14" fill="#333" />
    <circle cx="76" cy="30" r="12" fill="#444" />
    <circle cx="76" cy="30" r="10" fill="#222" />
    
    {/* Outputs */}
    <circle cx="20" cy="55" r="5" fill="#e0e0e0" stroke="#888" strokeWidth="1" />
    <circle cx="20" cy="55" r="2.5" fill="#111" />
    <text x="20" y="47" fill="#555" fontSize="3" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>OUTPUT</text>
    
    <circle cx="40" cy="55" r="5" fill="#e0e0e0" stroke="#888" strokeWidth="1" />
    <circle cx="40" cy="55" r="2.5" fill="#111" />
    <text x="40" y="47" fill="#555" fontSize="3" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>SYNC</text>
  </svg>
);

export default FunctionGenerator;
