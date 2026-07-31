'use client';
import React from 'react';

const SolidStateRelay = ({ width = 60, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 48" fill="none">
    <defs>
      <linearGradient id="ssr-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
      <filter id="ssr-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4" /></filter>
    </defs>
    {/* Body */}
    <rect x="4" y="2" width="52" height="40" rx="2" fill="url(#ssr-body)" filter="url(#ssr-shadow)" />
    
    {/* Terminals Input (DC) */}
    <rect x="6" y="4" width="8" height="8" rx="1" fill="#c0c0c0" />
    <circle cx="10" cy="8" r="2" fill="#555" />
    <rect x="6" y="32" width="8" height="8" rx="1" fill="#c0c0c0" />
    <circle cx="10" cy="36" r="2" fill="#555" />
    
    {/* Terminals Output (AC) */}
    <rect x="46" y="4" width="8" height="8" rx="1" fill="#c0c0c0" />
    <circle cx="50" cy="8" r="2" fill="#555" />
    <rect x="46" y="32" width="8" height="8" rx="1" fill="#c0c0c0" />
    <circle cx="50" cy="36" r="2" fill="#555" />
    
    {/* Labels Input */}
    <text x="18" y="9" fill="#e63946" fontSize="3" fontFamily="sans-serif" style={{userSelect:'none'}}>3-32V DC +</text>
    <text x="18" y="37" fill="#444" fontSize="3" fontFamily="sans-serif" style={{userSelect:'none'}}>3-32V DC -</text>
    
    {/* Labels Output */}
    <text x="42" y="9" fill="#0077b6" fontSize="3" fontFamily="sans-serif" textAnchor="end" style={{userSelect:'none'}}>24-380V AC ~</text>
    <text x="42" y="37" fill="#0077b6" fontSize="3" fontFamily="sans-serif" textAnchor="end" style={{userSelect:'none'}}>24-380V AC ~</text>
    
    {/* Status LED */}
    <circle cx="30" cy="8" r="1.5" fill="#e63946" opacity="0.8" />
    
    <text x="30" y="24" fill="#ccc" fontSize="4" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" style={{userSelect:'none'}}>SSR-40 DA</text>
  </svg>
);

export default SolidStateRelay;
