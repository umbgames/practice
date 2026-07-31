'use client';
import React from 'react';

const ORGate = ({ width = 48, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 36" fill="none">
    <defs>
      <linearGradient id="or-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    {/* Inputs */}
    <line x1="4" y1="12" x2="16" y2="12" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="24" x2="16" y2="24" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Output */}
    <line x1="36" y1="18" x2="44" y2="18" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Gate Shape (OR) */}
    <path d="M14 6 Q20 18 14 30 Q26 30 36 18 Q26 6 14 6 Z" fill="url(#or-body)" stroke="#444" strokeWidth="1" />
    <text x="24" y="20" fill="#888" fontSize="5" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>≥1</text>
  </svg>
);

export default ORGate;
