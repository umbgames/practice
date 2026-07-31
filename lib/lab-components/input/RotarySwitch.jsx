'use client';
import React from 'react';

const RotarySwitch = ({ width = 44, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 48" fill="none">
    <defs>
      <radialGradient id="rs-body" cx="0.5" cy="0.45" r="0.5">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#222" />
      </radialGradient>
      <linearGradient id="rs-shaft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
    </defs>
    {/* Pins in circle */}
    {[0,1,2,3,4,5].map(i => {
      const a = (i * 60 - 90) * Math.PI / 180;
      const cx = 22 + 18 * Math.cos(a);
      const cy = 24 + 18 * Math.sin(a);
      return <line key={i} x1={cx} y1={cy} x2={cx} y2={cy + 6} stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />;
    })}
    {/* Body */}
    <circle cx="22" cy="22" r="16" fill="url(#rs-body)" />
    <circle cx="22" cy="22" r="14" fill="none" stroke="#444" strokeWidth="0.5" />
    {/* Position markings */}
    {[0,1,2,3,4,5].map(i => {
      const a = (i * 60 - 90) * Math.PI / 180;
      const x = 22 + 12 * Math.cos(a);
      const y = 22 + 12 * Math.sin(a);
      return <circle key={i} cx={x} cy={y} r="1" fill="#666" />;
    })}
    {/* Shaft */}
    <circle cx="22" cy="22" r="6" fill="url(#rs-shaft)" />
    {/* Pointer */}
    <line x1="22" y1="22" x2="22" y2="12" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default RotarySwitch;
