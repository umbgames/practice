'use client';
import React from 'react';

const SafetyDesk = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Desk Top */}
    <rect x="8" y="32" width="48" height="10" rx="4" fill="#FFB74D" stroke="#E65100" strokeWidth="3" />
    {/* Desk Legs */}
    <path d="M14 42 L14 60 M50 42 L50 60" stroke="#E65100" strokeWidth="6" strokeLinecap="round" />
    {/* Happy Face on desk */}
    <path d="M26 36 A2 2 0 1 1 26 36.1" stroke="#E65100" strokeWidth="4" strokeLinecap="round" />
    <path d="M38 36 A2 2 0 1 1 38 36.1" stroke="#E65100" strokeWidth="4" strokeLinecap="round" />
    <path d="M28 39 Q32 42 36 39" stroke="#E65100" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Sparkles */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-10 32 16; 10 32 16; -10 32 16" dur="2s" repeatCount="indefinite" />
      <path d="M32 4 L35 12 L43 15 L35 18 L32 26 L29 18 L21 15 L29 12 Z" fill="#FFD54F" stroke="#F57F17" strokeWidth="2" />
    </g>
  </svg>
);

export default SafetyDesk;
