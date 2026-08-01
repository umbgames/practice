'use client';
import React from 'react';

const PowerOff = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Wall socket */}
    <rect x="8" y="12" width="24" height="40" rx="4" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="2" />
    <circle cx="20" cy="24" r="3" fill="#333" />
    <circle cx="20" cy="40" r="3" fill="#333" />
    {/* Plug pulled out with slide animation */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="-4,0; 2,0; -4,0" dur="2s" repeatCount="indefinite" />
      <path d="M42 28 h12 a4 4 0 0 1 4 4 v0 a4 4 0 0 1 -4 4 h-12 z" fill="#333" />
      <rect x="36" y="30" width="6" height="4" fill="#9E9E9E" />
      <rect x="42" y="24" width="4" height="4" fill="#9E9E9E" />
      <rect x="42" y="36" width="4" height="4" fill="#9E9E9E" />
      <path d="M58 32 C 62 32, 62 48, 50 56" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>
    {/* Red X pulsing */}
    <path d="M28 32 L36 32 M32 28 L28 32 L32 36" stroke="#E5484D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default PowerOff;
