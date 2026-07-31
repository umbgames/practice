'use client';
import React from 'react';

const HallEffectSensor = ({ width = 22, height = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 30" fill="none">
    <defs>
      <linearGradient id="hall-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    {/* 3 leads */}
    <line x1="7" y1="24" x2="7" y2="30" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="24" x2="11" y2="30" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="15" y1="24" x2="15" y2="30" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* TO-92 body */}
    <path d="M3 24 L3 8 Q3 2 11 2 Q19 2 19 8 L19 24 Z" fill="url(#hall-body)" />
    {/* Flat face */}
    <rect x="5" y="6" width="12" height="16" rx="1" fill="#1a1a1a" />
    {/* Marking */}
    <text x="11" y="13" fill="#777" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>A3144</text>
    {/* Magnetic field arrows */}
    <path d="M2 8 L0 10 L2 12" fill="none" stroke="#42a5f5" strokeWidth="0.6" opacity="0.5" />
    <path d="M20 8 L22 10 L20 12" fill="none" stroke="#42a5f5" strokeWidth="0.6" opacity="0.5" />
  </svg>
);

export default HallEffectSensor;
