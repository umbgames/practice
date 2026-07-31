'use client';
import React from 'react';

const IRReceiver = ({ width = 24, height = 32 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 32" fill="none">
    <defs>
      <linearGradient id="ir-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    {/* 3 leads */}
    <line x1="8" y1="26" x2="8" y2="32" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="26" x2="12" y2="32" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="16" y1="26" x2="16" y2="32" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* Dome body */}
    <path d="M4 26 L4 12 Q4 2 12 2 Q20 2 20 12 L20 26 Z" fill="url(#ir-body)" />
    {/* Dome lens (transparent bulge) */}
    <ellipse cx="12" cy="10" rx="6" ry="6" fill="#2a2a2a" />
    <ellipse cx="12" cy="10" rx="4" ry="4" fill="#3d0000" opacity="0.6" />
    {/* IR sensitive area */}
    <circle cx="12" cy="10" r="2" fill="#660000" opacity="0.8" />
    {/* Highlight */}
    <ellipse cx="10" cy="7" rx="2" ry="1.5" fill="rgba(255,255,255,0.1)" />
  </svg>
);

export default IRReceiver;
