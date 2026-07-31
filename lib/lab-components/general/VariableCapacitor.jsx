'use client';
import React from 'react';

const VariableCapacitor = ({ width = 44, height = 44 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 44" fill="none">
    <defs>
      <linearGradient id="vcap-plates" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <filter id="vcap-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* Leads */}
    <line x1="10" y1="38" x2="10" y2="44" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="38" x2="34" y2="44" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Base housing */}
    <rect x="4" y="18" width="36" height="22" rx="3" fill="#e8e8e8" stroke="#bbb" strokeWidth="0.8" filter="url(#vcap-shadow)" />
    {/* Plates */}
    {[0,1,2,3].map(i => (
      <rect key={i} x={10 + i*6} y="22" width="4" height="14" rx="1" fill="url(#vcap-plates)" />
    ))}
    {/* Shaft */}
    <circle cx="22" cy="12" r="7" fill="#ddd" stroke="#bbb" strokeWidth="1" />
    <circle cx="22" cy="12" r="3" fill="#999" />
    {/* Shaft line */}
    <line x1="22" y1="8" x2="22" y2="16" stroke="#666" strokeWidth="1" strokeLinecap="round" />
    {/* Adjustment arrow */}
    <path d="M16 6 Q22 2 28 6" fill="none" stroke="#e63946" strokeWidth="0.8" />
    <polygon points="28,6 27,3 30,5" fill="#e63946" />
  </svg>
);

export default VariableCapacitor;
