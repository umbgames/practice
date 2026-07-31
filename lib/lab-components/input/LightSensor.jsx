'use client';
import React from 'react';

const LightSensor = ({ width = 32, height = 44 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 44" fill="none">
    <defs>
      <linearGradient id="ls-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e7d32" />
        <stop offset="100%" stopColor="#1b5e20" />
      </linearGradient>
      <filter id="ls-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* 3 pins */}
    <line x1="9" y1="38" x2="9" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="16" y1="38" x2="16" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="23" y1="38" x2="23" y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* PCB */}
    <rect x="2" y="2" width="28" height="36" rx="2" fill="url(#ls-pcb)" filter="url(#ls-shadow)" />
    {/* LDR sensor */}
    <circle cx="16" cy="14" r="7" fill="#3d2b1f" />
    <path d="M10 11 L22 11 L22 13 L10 13 L10 15 L22 15 L22 17 L10 17" fill="none" stroke="#b87333" strokeWidth="0.8" />
    {/* Potentiometer trimmer */}
    <circle cx="16" cy="28" r="4" fill="#1565c0" />
    <line x1="16" y1="25" x2="16" y2="31" stroke="#ddd" strokeWidth="0.8" strokeLinecap="round" />
    {/* Labels */}
    <text x="16" y="37" fill="#81c784" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>AO DO VCC GND</text>
  </svg>
);

export default LightSensor;
