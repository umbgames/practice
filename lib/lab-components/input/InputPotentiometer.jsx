'use client';
import React from 'react';

const InputPotentiometer = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill="none">
    <defs>
      <radialGradient id="ipot-body" cx="0.5" cy="0.45" r="0.5">
        <stop offset="0%" stopColor="#3a5a40" />
        <stop offset="100%" stopColor="#1a2e1a" />
      </radialGradient>
      <linearGradient id="ipot-shaft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <filter id="ipot-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* 3 leads */}
    <line x1="14" y1="42" x2="14" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="42" x2="24" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="34" y1="42" x2="34" y2="48" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Body */}
    <circle cx="24" cy="24" r="18" fill="url(#ipot-body)" filter="url(#ipot-shadow)" />
    <circle cx="24" cy="24" r="16" fill="none" stroke="#2a4a30" strokeWidth="1" />
    {/* Wiper arc */}
    <path d="M10 30 A16 16 0 0 1 38 30" fill="none" stroke="#5a8a60" strokeWidth="0.8" />
    {/* Shaft */}
    <circle cx="24" cy="24" r="6" fill="url(#ipot-shaft)" />
    <line x1="24" y1="19" x2="24" y2="29" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    {/* Indicator */}
    <circle cx="24" cy="10" r="1.5" fill="#e9c46a" />
  </svg>
);

export default InputPotentiometer;
