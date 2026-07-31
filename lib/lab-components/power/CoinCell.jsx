'use client';
import React from 'react';

const CoinCell = ({ width = 36, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 36" fill="none">
    <defs>
      <radialGradient id="cr-body" cx="0.4" cy="0.4" r="0.6">
        <stop offset="0%" stopColor="#f0f0f0" />
        <stop offset="80%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
      <filter id="cr-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.25" /></filter>
    </defs>
    <circle cx="18" cy="18" r="16" fill="url(#cr-body)" filter="url(#cr-shadow)" />
    <circle cx="18" cy="18" r="14" fill="none" stroke="#ddd" strokeWidth="0.5" />
    <circle cx="18" cy="18" r="12" fill="none" stroke="#e0e0e0" strokeWidth="0.5" />
    <text x="18" y="16" fill="#666" fontSize="5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>+</text>
    <text x="18" y="22" fill="#777" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>CR2032</text>
    <text x="18" y="27" fill="#888" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>3V LITHIUM</text>
  </svg>
);

export default CoinCell;
