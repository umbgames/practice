'use client';
import React from 'react';

const Relay = ({ width = 56, height = 60 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 56 60" fill="none">
    <defs>
      <linearGradient id="relay-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2c5aa0" />
        <stop offset="50%" stopColor="#1a3d7c" />
        <stop offset="100%" stopColor="#0d2b5e" />
      </linearGradient>
      <filter id="relay-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* Pins bottom row */}
    {[10, 18, 26, 34, 42].map((x, i) => (
      <line key={i} x1={x} y1="50" x2={x} y2="60" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    ))}
    {/* Main body */}
    <rect x="4" y="4" width="48" height="46" rx="3" fill="url(#relay-body)" filter="url(#relay-shadow)" />
    {/* Top cover highlight */}
    <rect x="4" y="4" width="48" height="10" rx="3" fill="rgba(255,255,255,0.1)" />
    {/* Label area */}
    <rect x="8" y="14" width="40" height="26" rx="2" fill="rgba(0,0,0,0.2)" />
    {/* Part label */}
    <text x="28" y="22" fill="#8cb8ff" fontSize="4.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>SRD-05V</text>
    <text x="28" y="28" fill="#6a9dd8" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>DC-SL-C</text>
    <text x="28" y="35" fill="#5588bb" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>5V 10A</text>
    {/* LED indicator dot */}
    <circle cx="46" cy="9" r="2" fill="#e63946" opacity="0.7" />
  </svg>
);

export default Relay;
