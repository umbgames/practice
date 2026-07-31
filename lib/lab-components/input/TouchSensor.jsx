'use client';
import React from 'react';

const TouchSensor = ({ width = 36, height = 50 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 50" fill="none">
    <defs>
      <linearGradient id="ts-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1565c0" />
        <stop offset="100%" stopColor="#0d47a1" />
      </linearGradient>
      <filter id="ts-shadow">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* 3 pins */}
    <line x1="10" y1="44" x2="10" y2="50" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="44" x2="18" y2="50" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="26" y1="44" x2="26" y2="50" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* PCB */}
    <rect x="2" y="2" width="32" height="42" rx="3" fill="url(#ts-pcb)" filter="url(#ts-shadow)" />
    {/* Touch pad */}
    <circle cx="18" cy="16" r="10" fill="#0d3b66" stroke="#1e88e5" strokeWidth="0.8" />
    <circle cx="18" cy="16" r="7" fill="none" stroke="#42a5f5" strokeWidth="0.5" strokeDasharray="2 1" />
    {/* Touch icon */}
    <circle cx="18" cy="16" r="3" fill="#90caf9" opacity="0.5" />
    {/* IC chip on board */}
    <rect x="10" y="30" width="16" height="8" rx="1" fill="#1a1a1a" />
    <text x="18" y="35" fill="#666" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>TTP223</text>
    {/* Pin labels */}
    <text x="10" y="43" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>S</text>
    <text x="18" y="43" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>V</text>
    <text x="26" y="43" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>G</text>
  </svg>
);

export default TouchSensor;
