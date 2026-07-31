'use client';
import React from 'react';

const RaspberryPiPico = ({ width = 64, height = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 28" fill="none">
    <defs>
      <linearGradient id="pico-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#224422" />
        <stop offset="100%" stopColor="#1a331a" />
      </linearGradient>
      <filter id="pico-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.35" /></filter>
    </defs>
    {/* PCB */}
    <rect x="2" y="2" width="60" height="24" rx="1.5" fill="url(#pico-pcb)" filter="url(#pico-shadow)" />
    
    {/* USB Connector */}
    <rect x="0" y="10" width="6" height="8" rx="0.5" fill="#d0d0d0" stroke="#999" strokeWidth="0.5" />
    
    {/* Castellation / Headers */}
    {Array.from({ length: 20 }).map((_, i) => (
      <g key={i}>
        <path d={`M ${4 + i * 2.8} 2 A 1 1 0 0 0 ${6 + i * 2.8} 2 Z`} fill="#e9c46a" />
        <path d={`M ${4 + i * 2.8} 26 A 1 1 0 0 1 ${6 + i * 2.8} 26 Z`} fill="#e9c46a" />
      </g>
    ))}
    
    {/* RP2040 Chip */}
    <rect x="30" y="10" width="8" height="8" rx="0.5" fill="#111" />
    <circle cx="31.5" cy="11.5" r="0.5" fill="#333" />
    
    {/* BOOTSEL Button */}
    <rect x="12" y="12" width="3" height="4" fill="#ddd" />
    <circle cx="13.5" cy="14" r="1" fill="#fff" />
    
    {/* Logo / Text */}
    <text x="46" y="15" fill="#a0d0a0" fontSize="3" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" style={{userSelect:'none'}}>Raspberry Pi</text>
    <text x="46" y="19" fill="#80b080" fontSize="2.5" fontFamily="sans-serif" textAnchor="middle" style={{userSelect:'none'}}>Pico</text>
  </svg>
);

export default RaspberryPiPico;
