'use client';
import React from 'react';

const Buzzer = ({ width = 32, height = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 30" fill="none">
    <defs>
      <radialGradient id="buz-top" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#333" /><stop offset="100%" stopColor="#111" />
      </radialGradient>
      <linearGradient id="buz-side" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#444" /><stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
    </defs>
    <line x1="12" y1="26" x2="12" y2="30" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="26" x2="20" y2="30" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="14" width="24" height="14" rx="2" fill="url(#buz-side)" />
    <ellipse cx="16" cy="14" rx="12" ry="4.5" fill="url(#buz-top)" />
    <circle cx="16" cy="12" r="2.5" fill="#0a0a0a" />
    <ellipse cx="16" cy="14" rx="8" ry="3" fill="none" stroke="#333" strokeWidth="0.4" />
    <text x="21" y="28" fill="#e63946" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>+</text>
  </svg>
);

export default Buzzer;
