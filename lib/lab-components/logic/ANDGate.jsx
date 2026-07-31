'use client';
import React from 'react';

const ANDGate = ({ width = 48, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 36" fill="none">
    <defs>
      <linearGradient id="and-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    {/* Inputs */}
    <line x1="4" y1="12" x2="16" y2="12" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="4" y1="24" x2="16" y2="24" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Output */}
    <line x1="36" y1="18" x2="44" y2="18" stroke="#e0e0e0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Gate Shape (AND) */}
    <path d="M16 6 L26 6 A 12 12 0 0 1 26 30 L16 30 Z" fill="url(#and-body)" stroke="#444" strokeWidth="1" />
    <text x="24" y="20" fill="#888" fontSize="6" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>&amp;</text>
  </svg>
);

export default ANDGate;
