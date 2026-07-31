'use client';
import React from 'react';

const LogicAnalyzer = ({ width = 60, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 40" fill="none">
    <defs>
      <linearGradient id="la-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="la-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.4" /></filter>
    </defs>
    {/* Body */}
    <rect x="4" y="2" width="52" height="36" rx="2" fill="url(#la-body)" filter="url(#la-shadow)" />
    
    {/* USB */}
    <rect x="0" y="14" width="6" height="12" rx="1" fill="#c0c0c0" stroke="#888" strokeWidth="0.5" />
    
    {/* Header pins (Input channels) */}
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={`ch${i}`}>
        <rect x="54" y={6 + i * 3.5} width="6" height="2" fill="#222" />
        <circle cx="58" cy={7 + i * 3.5} r="0.8" fill="#e9c46a" />
      </g>
    ))}
    
    {/* Label */}
    <text x="30" y="20" fill="#bbb" fontSize="4" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" style={{userSelect:'none'}}>LOGIC</text>
    <text x="30" y="26" fill="#888" fontSize="3" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>8-CH 24MHz</text>
    
    {/* Status LEDs */}
    <circle cx="12" cy="8" r="1.5" fill="#e63946" />
    <circle cx="12" cy="12" r="1.5" fill="#2a9d8f" />
  </svg>
);

export default LogicAnalyzer;
