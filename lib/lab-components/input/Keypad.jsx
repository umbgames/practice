'use client';
import React from 'react';

const Keypad = ({ width = 70, height = 80 }) => {
  const keys = ['1','2','3','A','4','5','6','B','7','8','9','C','*','0','#','D'];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 70 80" fill="none">
      <defs>
        <linearGradient id="kp-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <linearGradient id="kp-key" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        <filter id="kp-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Ribbon cable pins at bottom */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1={11 + i * 7} y1="76" x2={11 + i * 7} y2="80" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
      ))}
      {/* Body */}
      <rect x="2" y="2" width="66" height="74" rx="4" fill="url(#kp-body)" filter="url(#kp-shadow)" />
      {/* Keys grid 4x4 */}
      {keys.map((k, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        return (
          <g key={i}>
            <rect x={6 + col * 15} y={6 + row * 17} width="13" height="14" rx="2" fill="url(#kp-key)" />
            <text x={12.5 + col * 15} y={14 + row * 17} fill="#ccc" fontSize="5" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: 'none' }}>{k}</text>
          </g>
        );
      })}
    </svg>
  );
};

export default Keypad;
