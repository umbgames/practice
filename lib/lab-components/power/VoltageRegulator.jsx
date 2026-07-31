'use client';
import React from 'react';

const VoltageRegulator = ({ width = 30, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 40" fill="none">
    <defs>
      <linearGradient id="vreg-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <linearGradient id="vreg-metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
    </defs>
    {/* 3 pins */}
    <line x1="7" y1="30" x2="7" y2="40" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15" y1="30" x2="15" y2="40" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="23" y1="30" x2="23" y2="40" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Metal tab */}
    <path d="M5 10 L5 2 L25 2 L25 10 Z" fill="url(#vreg-metal)" />
    <circle cx="15" cy="6" r="2.5" fill="#1a1a1a" />
    {/* Plastic body TO-220 */}
    <rect x="3" y="10" width="24" height="20" rx="1" fill="url(#vreg-body)" />
    {/* Markings */}
    <text x="15" y="18" fill="#888" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>L7805CV</text>
  </svg>
);

export default VoltageRegulator;
