'use client';
import React from 'react';

const HalfBreadboard = ({ width = 100, height = 60 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 60" fill="none">
    <defs>
      <linearGradient id="bb-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5f5f5" />
        <stop offset="100%" stopColor="#e0e0e0" />
      </linearGradient>
      <filter id="bb-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" /></filter>
    </defs>
    {/* Base */}
    <rect x="2" y="2" width="96" height="56" rx="2" fill="url(#bb-base)" filter="url(#bb-shadow)" />
    {/* Power rails */}
    <line x1="6" y1="8" x2="94" y2="8" stroke="#e63946" strokeWidth="0.5" />
    <line x1="6" y1="14" x2="94" y2="14" stroke="#0077b6" strokeWidth="0.5" />
    <line x1="6" y1="46" x2="94" y2="46" stroke="#e63946" strokeWidth="0.5" />
    <line x1="6" y1="52" x2="94" y2="52" stroke="#0077b6" strokeWidth="0.5" />
    {/* Tie points (simplified) */}
    {Array.from({ length: 30 }).map((_, col) => (
      <g key={`c${col}`}>
        {/* Top power row + */}
        <circle cx={10 + col * 2.8} cy="6" r="0.6" fill="#444" />
        {/* Top power row - */}
        <circle cx={10 + col * 2.8} cy="12" r="0.6" fill="#444" />
        
        {/* Top signal block A-E */}
        {[0,1,2,3,4].map(row => (
          <circle key={`t${row}`} cx={10 + col * 2.8} cy={20 + row * 2.5} r="0.6" fill="#444" />
        ))}
        
        {/* Bottom signal block F-J */}
        {[0,1,2,3,4].map(row => (
          <circle key={`b${row}`} cx={10 + col * 2.8} cy={34 + row * 2.5} r="0.6" fill="#444" />
        ))}

        {/* Bottom power row + */}
        <circle cx={10 + col * 2.8} cy="48" r="0.6" fill="#444" />
        {/* Bottom power row - */}
        <circle cx={10 + col * 2.8} cy="54" r="0.6" fill="#444" />
      </g>
    ))}
    {/* Center divider groove */}
    <rect x="6" y="31.5" width="88" height="1" fill="#ccc" />
  </svg>
);

export default HalfBreadboard;
