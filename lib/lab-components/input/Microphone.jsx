'use client';
import React from 'react';

const Microphone = ({ width = 28, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 40" fill="none">
    <defs>
      <radialGradient id="mic-face" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#222" />
      </radialGradient>
      <linearGradient id="mic-can" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <filter id="mic-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* 2 leads */}
    <line x1="11" y1="34" x2="11" y2="40" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="17" y1="34" x2="17" y2="40" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* Can body */}
    <circle cx="14" cy="18" r="12" fill="url(#mic-can)" filter="url(#mic-shadow)" />
    {/* Sound port face */}
    <circle cx="14" cy="18" r="8" fill="url(#mic-face)" />
    {/* Mesh pattern */}
    {[-4,-2,0,2,4].map(y => (
      <line key={y} x1="8" y1={18+y} x2="20" y2={18+y} stroke="#444" strokeWidth="0.4" />
    ))}
    {[-4,-2,0,2,4].map(x => (
      <line key={x} x1={14+x} y1="12" x2={14+x} y2="24" stroke="#444" strokeWidth="0.4" />
    ))}
    {/* Sound hole */}
    <circle cx="14" cy="18" r="1.5" fill="#111" />
    {/* Highlight */}
    <ellipse cx="11" cy="13" rx="3" ry="2" fill="rgba(255,255,255,0.15)" />
  </svg>
);

export default Microphone;
