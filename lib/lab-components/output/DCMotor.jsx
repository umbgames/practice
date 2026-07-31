'use client';
import React from 'react';

const DCMotor = ({ width = 40, height = 50 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 50" fill="none">
    <defs>
      <linearGradient id="dc-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" /><stop offset="50%" stopColor="#aaa" /><stop offset="100%" stopColor="#888" />
      </linearGradient>
      <linearGradient id="dc-shaft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" /><stop offset="100%" stopColor="#999" />
      </linearGradient>
      <filter id="dc-shadow"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* Terminals */}
    <line x1="14" y1="44" x2="14" y2="50" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="26" y1="44" x2="26" y2="50" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    {/* Motor body - cylinder */}
    <rect x="6" y="16" width="28" height="28" rx="4" fill="url(#dc-body)" filter="url(#dc-shadow)" />
    {/* Front face */}
    <ellipse cx="20" cy="16" rx="14" ry="5" fill="#bbb" stroke="#999" strokeWidth="0.5" />
    {/* Shaft */}
    <rect x="18" y="2" width="4" height="16" rx="2" fill="url(#dc-shaft)" />
    {/* D-flat on shaft */}
    <rect x="18" y="4" width="1.5" height="8" fill="#999" />
    {/* Body markings */}
    <text x="20" y="32" fill="#666" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>FA-130</text>
    <text x="20" y="38" fill="#888" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>3-6V DC</text>
    {/* Mounting tabs */}
    <rect x="2" y="28" width="4" height="8" rx="1" fill="#999" />
    <rect x="34" y="28" width="4" height="8" rx="1" fill="#999" />
  </svg>
);

export default DCMotor;
