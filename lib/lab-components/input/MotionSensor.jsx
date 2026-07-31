'use client';
import React from 'react';

const MotionSensor = ({ width = 48, height = 52 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 52" fill="none">
    <defs>
      <radialGradient id="pir-dome" cx="0.45" cy="0.4" r="0.55">
        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
        <stop offset="50%" stopColor="rgba(200,200,200,0.15)" />
        <stop offset="100%" stopColor="rgba(150,150,150,0.05)" />
      </radialGradient>
      <linearGradient id="pir-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e7d32" />
        <stop offset="100%" stopColor="#1b5e20" />
      </linearGradient>
      <filter id="pir-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* 3 pins */}
    <line x1="16" y1="46" x2="16" y2="52" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="24" y1="46" x2="24" y2="52" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="32" y1="46" x2="32" y2="52" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* PCB */}
    <rect x="6" y="24" width="36" height="22" rx="3" fill="url(#pir-pcb)" filter="url(#pir-shadow)" />
    {/* PIR sensor element */}
    <rect x="16" y="28" width="16" height="10" rx="1" fill="#1a1a1a" />
    <rect x="18" y="30" width="5" height="6" rx="0.5" fill="#444" />
    <rect x="25" y="30" width="5" height="6" rx="0.5" fill="#444" />
    {/* Trimpots */}
    <circle cx="12" cy="36" r="3" fill="#1565c0" />
    <circle cx="36" cy="36" r="3" fill="#1565c0" />
    {/* Fresnel lens dome */}
    <path d="M8 24 Q8 2 24 2 Q40 2 40 24 Z" fill="url(#pir-dome)" stroke="rgba(200,200,200,0.2)" strokeWidth="0.5" />
    {/* Fresnel rings */}
    {[6,10,14,18].map(r => (
      <path key={r} d={`M${24-r} 24 Q${24-r} ${24-r} 24 ${24-r} Q${24+r} ${24-r} ${24+r} 24`}
        fill="none" stroke="rgba(200,200,200,0.12)" strokeWidth="0.4" />
    ))}
    {/* Pin labels */}
    <text x="16" y="44" fill="#81c784" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>V</text>
    <text x="24" y="44" fill="#81c784" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>O</text>
    <text x="32" y="44" fill="#81c784" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{ userSelect: 'none' }}>G</text>
  </svg>
);

export default MotionSensor;
