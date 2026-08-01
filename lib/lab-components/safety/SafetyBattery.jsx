'use client';
import React from 'react';

const SafetyBattery = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Battery Body */}
    <rect x="16" y="20" width="32" height="36" rx="6" fill="#81C784" stroke="#2E7D32" strokeWidth="4" />
    <rect x="26" y="12" width="12" height="8" rx="2" fill="#CFD8DC" stroke="#455A64" strokeWidth="4" />
    {/* Happy Face */}
    <path d="M26 32 A2 2 0 1 1 26 32.1" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" />
    <path d="M38 32 A2 2 0 1 1 38 32.1" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" />
    <path d="M28 40 Q32 46 36 40" stroke="#1B5E20" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Pulsing Plus and Minus */}
    <g>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      <path d="M10 26 H4 M7 23 V29" stroke="#E65100" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 26 H54" stroke="#0D47A1" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export default SafetyBattery;
