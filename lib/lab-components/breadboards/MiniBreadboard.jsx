'use client';
import React from 'react';

const MiniBreadboard = ({ width = 50, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 40" fill="none">
    <defs>
      <linearGradient id="mbb-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5f5f5" />
        <stop offset="100%" stopColor="#e0e0e0" />
      </linearGradient>
      <filter id="mbb-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* Base */}
    <rect x="2" y="2" width="46" height="36" rx="2" fill="url(#mbb-base)" filter="url(#mbb-shadow)" />
    {/* Tie points */}
    {Array.from({ length: 17 }).map((_, col) => (
      <g key={`c${col}`}>
        {/* Top block */}
        {[0,1,2,3,4].map(row => (
          <circle key={`t${row}`} cx={6 + col * 2.4} cy={8 + row * 2.4} r="0.6" fill="#444" />
        ))}
        {/* Bottom block */}
        {[0,1,2,3,4].map(row => (
          <circle key={`b${row}`} cx={6 + col * 2.4} cy={22 + row * 2.4} r="0.6" fill="#444" />
        ))}
      </g>
    ))}
    {/* Center divider groove */}
    <rect x="4" y="19" width="42" height="1.5" fill="#ccc" />
  </svg>
);

export default MiniBreadboard;
