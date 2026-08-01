'use client';
import React from 'react';

const DangerPlug = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    <g>
      {/* Shake animation */}
      <animateTransform attributeName="transform" type="translate" values="-2,0; 2,0; -2,0" dur="0.2s" repeatCount="indefinite" />
      {/* Evil Plug Body */}
      <rect x="20" y="24" width="24" height="28" rx="4" fill="#E53935" stroke="#B71C1C" strokeWidth="4" />
      {/* Prongs */}
      <rect x="24" y="10" width="4" height="14" fill="#CFD8DC" stroke="#455A64" strokeWidth="3" />
      <rect x="36" y="10" width="4" height="14" fill="#CFD8DC" stroke="#455A64" strokeWidth="3" />
      {/* Evil Face */}
      <path d="M25 32 Q27 30 29 34" stroke="#455A64" strokeWidth="3" strokeLinecap="round" />
      <path d="M39 32 Q37 30 35 34" stroke="#455A64" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 44 Q32 38 38 44" stroke="#455A64" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Electricity Sparks */}
      <path d="M12 16 L6 20 M14 8 L10 4 M52 16 L58 20 M50 8 L54 4" stroke="#FFCA28" strokeWidth="4" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="0.3s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default DangerPlug;
