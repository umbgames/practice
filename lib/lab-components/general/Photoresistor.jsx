'use client';
import React from 'react';

const Photoresistor = ({ width = 36, height = 42 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 42" fill="none">
    <defs>
      <radialGradient id="ldr-body" cx="0.5" cy="0.45" r="0.5">
        <stop offset="0%" stopColor="#e9c46a" />
        <stop offset="60%" stopColor="#c49122" />
        <stop offset="100%" stopColor="#8b6914" />
      </radialGradient>
      <filter id="ldr-shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Leads */}
    <line x1="14" y1="32" x2="14" y2="42" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="22" y1="32" x2="22" y2="42" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Disc body */}
    <circle cx="18" cy="18" r="14" fill="url(#ldr-body)" filter="url(#ldr-shadow)" />
    {/* Window (light-sensitive area) */}
    <circle cx="18" cy="18" r="9" fill="#3d2b1f" opacity="0.6" />
    {/* Serpentine trace */}
    <path d="M12 13 L24 13 L24 16 L12 16 L12 19 L24 19 L24 22 L12 22" fill="none" stroke="#b87333" strokeWidth="1.2" strokeLinecap="round" />
    {/* Specular */}
    <ellipse cx="14" cy="12" rx="4" ry="3" fill="rgba(255,255,255,0.2)" transform="rotate(-15 14 12)" />
    {/* Epoxy dome top surface */}
    <circle cx="18" cy="18" r="14" fill="rgba(255,200,50,0.06)" />
  </svg>
);

export default Photoresistor;
