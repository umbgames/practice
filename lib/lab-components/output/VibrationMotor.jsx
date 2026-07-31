'use client';
import React from 'react';

const VibrationMotor = ({ width = 24, height = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 30" fill="none">
    <defs>
      <linearGradient id="vib-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" /><stop offset="100%" stopColor="#888" />
      </linearGradient>
    </defs>
    <line x1="8" y1="24" x2="8" y2="30" stroke="#e63946" strokeWidth="1" strokeLinecap="round" />
    <line x1="16" y1="24" x2="16" y2="30" stroke="#111" strokeWidth="1" strokeLinecap="round" />
    <ellipse cx="12" cy="14" rx="10" ry="10" fill="url(#vib-body)" />
    <ellipse cx="12" cy="14" rx="6" ry="6" fill="#aaa" stroke="#999" strokeWidth="0.5" />
    <rect x="14" y="6" width="6" height="4" rx="1" fill="#e9c46a" transform="rotate(15 17 8)" />
    <ellipse cx="10" cy="10" rx="3" ry="2" fill="rgba(255,255,255,0.2)" />
    {/* Vibration lines */}
    <path d="M2 6 L0 4" stroke="#aaa" strokeWidth="0.5" opacity="0.4" />
    <path d="M22 6 L24 4" stroke="#aaa" strokeWidth="0.5" opacity="0.4" />
    <path d="M2 22 L0 24" stroke="#aaa" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

export default VibrationMotor;
