'use client';
import React from 'react';

const RotaryEncoder = ({ width = 40, height = 44 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 44" fill="none">
    <defs>
      <linearGradient id="re-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a5a" />
        <stop offset="100%" stopColor="#1a1a2e" />
      </linearGradient>
      <linearGradient id="re-shaft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
    </defs>
    {/* 5 pins: CLK, DT, SW, +, GND */}
    {[8, 14, 20, 26, 32].map((x, i) => (
      <line key={i} x1={x} y1="38" x2={x} y2="44" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    ))}
    {/* Body */}
    <rect x="4" y="16" width="32" height="22" rx="3" fill="url(#re-body)" />
    {/* Knurled knob */}
    <circle cx="20" cy="16" r="10" fill="#444" stroke="#555" strokeWidth="0.5" />
    {Array.from({ length: 16 }).map((_, i) => {
      const a = (i * 22.5) * Math.PI / 180;
      const x1 = 20 + 9 * Math.cos(a);
      const y1 = 16 + 9 * Math.sin(a);
      const x2 = 20 + 10 * Math.cos(a);
      const y2 = 16 + 10 * Math.sin(a);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#666" strokeWidth="0.5" />;
    })}
    {/* Center shaft */}
    <circle cx="20" cy="16" r="4" fill="url(#re-shaft)" />
    {/* D-shape flat */}
    <rect x="17" y="13" width="1.5" height="6" rx="0.5" fill="#aaa" />
    {/* Pin labels */}
    <text x="20" y="32" fill="#666" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>CLK DT SW</text>
  </svg>
);

export default RotaryEncoder;
