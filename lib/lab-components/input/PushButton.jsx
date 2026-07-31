'use client';
import React from 'react';

const PushButton = ({ width = 32, height = 32, color = '#e63946' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
    <defs>
      <linearGradient id="btn-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#444" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <radialGradient id="btn-cap" cx="0.4" cy="0.35" r="0.6">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor="#8e0000" />
      </radialGradient>
      <filter id="btn-shadow">
        <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* Pins (4 corners) */}
    <line x1="6" y1="28" x2="6" y2="32" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="26" y1="28" x2="26" y2="32" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="6" y1="0" x2="6" y2="4" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="26" y1="0" x2="26" y2="4" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* Base housing */}
    <rect x="2" y="4" width="28" height="24" rx="3" fill="url(#btn-base)" filter="url(#btn-shadow)" />
    {/* Button cap */}
    <circle cx="16" cy="16" r="8" fill="url(#btn-cap)" />
    {/* Specular */}
    <ellipse cx="13" cy="13" rx="3" ry="2" fill="rgba(255,255,255,0.35)" transform="rotate(-20 13 13)" />
  </svg>
);

export default PushButton;
