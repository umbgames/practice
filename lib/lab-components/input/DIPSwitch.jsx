'use client';
import React from 'react';

const DIPSwitch = ({ width = 48, height = 28, positions = 4 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 28" fill="none">
    <defs>
      <linearGradient id="dip-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c62828" />
        <stop offset="100%" stopColor="#7f0000" />
      </linearGradient>
    </defs>
    {/* Bottom pins */}
    {Array.from({ length: positions }).map((_, i) => (
      <line key={`b${i}`} x1={8 + i * 10} y1="24" x2={8 + i * 10} y2="28" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    ))}
    {/* Top pins */}
    {Array.from({ length: positions }).map((_, i) => (
      <line key={`t${i}`} x1={8 + i * 10} y1="0" x2={8 + i * 10} y2="4" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    ))}
    {/* Body */}
    <rect x="2" y="4" width={positions * 10 + 4} height="20" rx="2" fill="url(#dip-body)" />
    {/* Individual switches */}
    {Array.from({ length: positions }).map((_, i) => (
      <g key={i}>
        <rect x={5 + i * 10} y="7" width="6" height="14" rx="1" fill="#4a0000" />
        <rect x={5.5 + i * 10} y={i % 2 === 0 ? 8 : 14} width="5" height="6" rx="1" fill="#ddd" />
      </g>
    ))}
    {/* ON label */}
    <text x={positions * 5 + 4} y="6.5" fill="#ffcdd2" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>ON</text>
  </svg>
);

export default DIPSwitch;
