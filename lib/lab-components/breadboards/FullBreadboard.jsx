'use client';
import React from 'react';

const FullBreadboard = ({ width = 160, height = 60 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 160 60" fill="none">
    <defs>
      <linearGradient id="fbb-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5f5f5" />
        <stop offset="100%" stopColor="#e0e0e0" />
      </linearGradient>
      <filter id="fbb-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" /></filter>
    </defs>
    {/* Base */}
    <rect x="2" y="2" width="156" height="56" rx="2" fill="url(#fbb-base)" filter="url(#fbb-shadow)" />
    {/* Power rails */}
    <line x1="6" y1="8" x2="154" y2="8" stroke="#e63946" strokeWidth="0.5" />
    <line x1="6" y1="14" x2="154" y2="14" stroke="#0077b6" strokeWidth="0.5" />
    <line x1="6" y1="46" x2="154" y2="46" stroke="#e63946" strokeWidth="0.5" />
    <line x1="6" y1="52" x2="154" y2="52" stroke="#0077b6" strokeWidth="0.5" />
    {/* Tie points */}
    {Array.from({ length: 60 }).map((_, col) => (
      <g key={`c${col}`}>
        {/* Avoid drawing points where the power rails split (if we were being 100% realistic, but for now we draw them all or put a small gap) */}
        <circle cx={6 + col * 2.5} cy="6" r="0.6" fill="#444" />
        <circle cx={6 + col * 2.5} cy="12" r="0.6" fill="#444" />
        
        {[0,1,2,3,4].map(row => (
          <circle key={`t${row}`} cx={6 + col * 2.5} cy={20 + row * 2.5} r="0.6" fill="#444" />
        ))}
        
        {[0,1,2,3,4].map(row => (
          <circle key={`b${row}`} cx={6 + col * 2.5} cy={34 + row * 2.5} r="0.6" fill="#444" />
        ))}

        <circle cx={6 + col * 2.5} cy="48" r="0.6" fill="#444" />
        <circle cx={6 + col * 2.5} cy="54" r="0.6" fill="#444" />
      </g>
    ))}
    {/* Center divider groove */}
    <rect x="6" y="31.5" width="148" height="1" fill="#ccc" />
  </svg>
);

export default FullBreadboard;
