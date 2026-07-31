'use client';
import React from 'react';

const Joystick = ({ width = 50, height = 50 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 50" fill="none">
    <defs>
      <linearGradient id="joy-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a2a2a" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      <radialGradient id="joy-cap" cx="0.4" cy="0.35" r="0.6">
        <stop offset="0%" stopColor="#666" />
        <stop offset="100%" stopColor="#222" />
      </radialGradient>
      <filter id="joy-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4" />
      </filter>
    </defs>
    {/* 5 pins */}
    {[10, 18, 25, 32, 40].map((x, i) => (
      <line key={i} x1={x} y1="46" x2={x} y2="50" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    ))}
    {/* PCB base */}
    <rect x="4" y="28" width="42" height="18" rx="3" fill="url(#joy-base)" filter="url(#joy-shadow)" />
    {/* Gimbal ring */}
    <ellipse cx="25" cy="28" rx="14" ry="5" fill="#333" stroke="#444" strokeWidth="0.5" />
    {/* Stick */}
    <rect x="22" y="10" width="6" height="20" rx="3" fill="linear-gradient(180deg, #888 0%, #444 100%)" />
    <rect x="22" y="10" width="6" height="20" rx="3" fill="#555" />
    {/* Cap */}
    <circle cx="25" cy="10" r="8" fill="url(#joy-cap)" />
    <ellipse cx="23" cy="7" rx="3" ry="2" fill="rgba(255,255,255,0.2)" />
    {/* Cross marks on base */}
    <line x1="25" y1="24" x2="25" y2="34" stroke="#444" strokeWidth="0.5" />
    <line x1="15" y1="28" x2="35" y2="28" stroke="#444" strokeWidth="0.5" />
    {/* Labels */}
    <text x="25" y="44" fill="#666" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>VRx VRy SW</text>
  </svg>
);

export default Joystick;
