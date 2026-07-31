'use client';
import React from 'react';

const BatteryHolder = ({ width = 64, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 40" fill="none">
    <defs>
      <linearGradient id="bh-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#0a0a0a" />
      </linearGradient>
      <linearGradient id="bh-cell" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e88e5" />
        <stop offset="50%" stopColor="#1565c0" />
        <stop offset="100%" stopColor="#0d47a1" />
      </linearGradient>
      <filter id="bh-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4" /></filter>
    </defs>
    {/* Wires */}
    <path d="M60 12 Q64 12 64 8" fill="none" stroke="#e63946" strokeWidth="1.5" />
    <path d="M60 28 Q64 28 64 32" fill="none" stroke="#111" strokeWidth="1.5" />
    {/* Holder Base */}
    <rect x="4" y="2" width="56" height="36" rx="4" fill="url(#bh-body)" filter="url(#bh-shadow)" />
    {/* Battery 1 */}
    <rect x="8" y="6" width="48" height="12" rx="2" fill="url(#bh-cell)" />
    <rect x="56" y="8" width="2" height="8" rx="1" fill="#ddd" />
    {/* Battery 2 */}
    <rect x="8" y="22" width="48" height="12" rx="2" fill="url(#bh-cell)" />
    <rect x="6" y="24" width="2" height="8" rx="1" fill="#ddd" />
    {/* Springs */}
    <path d="M6 8 L8 10 L6 12 L8 14 L6 16" fill="none" stroke="#C0C0C0" strokeWidth="0.8" />
    <path d="M58 24 L56 26 L58 28 L56 30 L58 32" fill="none" stroke="#C0C0C0" strokeWidth="0.8" />
  </svg>
);

export default BatteryHolder;
