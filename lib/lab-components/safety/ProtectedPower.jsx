'use client';
import React from 'react';

const ProtectedPower = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Wall plug prongs */}
    <rect x="22" y="10" width="4" height="12" fill="#9E9E9E" rx="1" />
    <rect x="38" y="10" width="4" height="12" fill="#9E9E9E" rx="1" />
    {/* Adapter body */}
    <rect x="16" y="20" width="32" height="28" rx="4" fill="#333" />
    <path d="M26 34 L30 26 L34 34 L38 28 L32 40 L28 32 Z" fill="#F0B429" />
    {/* Wire */}
    <path d="M32 48 V58 C32 60, 42 60, 42 58" stroke="#333" strokeWidth="4" strokeLinecap="round" />
    {/* Shield icon floating */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2.5s" repeatCount="indefinite" />
      <path d="M40 28 L48 24 V32 C48 38, 40 44, 40 44 C40 44, 32 38, 32 32 V24 Z" fill="#4CAF50" stroke="#FFF" strokeWidth="2" />
      <path d="M38 32 L40 34 L44 28" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ProtectedPower;
