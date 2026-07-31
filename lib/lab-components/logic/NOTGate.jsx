'use client';
import React from 'react';

const NOTGate = ({ width = 48, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 36" fill="none">
    <defs>
      <linearGradient id="not-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    {/* Input */}
    <line x1="4" y1="18" x2="16" y2="18" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Output */}
    <line x1="38" y1="18" x2="44" y2="18" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Gate Shape (Triangle) */}
    <polygon points="16,8 16,28 32,18" fill="url(#not-body)" stroke="#444" strokeWidth="1" />
    {/* Inversion Bubble */}
    <circle cx="35" cy="18" r="3" fill="#111" stroke="#e0e0e0" strokeWidth="1" />
    <text x="21" y="20" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>1</text>
  </svg>
);

export default NOTGate;
