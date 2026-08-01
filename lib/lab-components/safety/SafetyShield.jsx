'use client';
import React from 'react';

const SafetyShield = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="2s" repeatCount="indefinite" />
      {/* Super Shield */}
      <path d="M32 8 L54 16 V32 C54 44 32 56 32 56 C32 56 10 44 10 32 V16 Z" fill="#66BB6A" stroke="#2E7D32" strokeWidth="4" />
      <path d="M32 14 L48 20 V32 C48 40 32 48 32 48 C32 48 16 40 16 32 V20 Z" fill="#A5D6A7" />
      {/* Shield Face */}
      <path d="M24 28 A2 2 0 1 1 24 28.1" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 28 A2 2 0 1 1 40 28.1" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" />
      <path d="M26 36 Q32 42 38 36" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

export default SafetyShield;
