'use client';
import React from 'react';

const Solenoid = ({ width = 36, height = 56 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 56" fill="none">
    <defs>
      <linearGradient id="sol-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#555" /><stop offset="100%" stopColor="#222" />
      </linearGradient>
      <linearGradient id="sol-plunger" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" /><stop offset="100%" stopColor="#999" />
      </linearGradient>
    </defs>
    <line x1="12" y1="50" x2="12" y2="56" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="50" x2="24" y2="56" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="18" width="28" height="32" rx="3" fill="url(#sol-body)" />
    {/* Coil windings visible */}
    {[0,1,2,3,4,5].map(i=>(
      <rect key={i} x="6" y={20+i*5} width="24" height="3" rx="1" fill="#b87333" opacity="0.4" />
    ))}
    {/* Plunger */}
    <rect x="14" y="2" width="8" height="20" rx="2" fill="url(#sol-plunger)" />
    <line x1="18" y1="4" x2="18" y2="18" stroke="#ccc" strokeWidth="0.5" />
    <text x="18" y="44" fill="#888" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>12V</text>
  </svg>
);

export default Solenoid;
