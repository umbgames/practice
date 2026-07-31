'use client';
import React from 'react';

const ArduinoUno = ({ width = 80, height = 55 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 55" fill="none">
    <defs>
      <linearGradient id="uno-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#006468" />
        <stop offset="100%" stopColor="#004a4d" />
      </linearGradient>
      <filter id="uno-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" /></filter>
    </defs>
    {/* PCB shape (simplified) */}
    <path d="M2 2 L78 2 L78 20 L76 22 L76 53 L2 53 Z" fill="url(#uno-pcb)" filter="url(#uno-shadow)" />
    
    {/* USB Connector */}
    <rect x="0" y="4" width="10" height="12" rx="1" fill="#e0e0e0" stroke="#999" strokeWidth="0.5" />
    
    {/* Power Jack */}
    <rect x="0" y="38" width="12" height="10" rx="1" fill="#222" />
    <circle cx="8" cy="43" r="2.5" fill="#000" />
    
    {/* ATmega328P DIP */}
    <rect x="36" y="26" width="30" height="10" rx="1" fill="#111" />
    <circle cx="38" cy="31" r="1.5" fill="#222" />
    
    {/* Headers Top (Digital) */}
    <rect x="22" y="4" width="24" height="4" fill="#222" />
    <rect x="48" y="4" width="26" height="4" fill="#222" />
    
    {/* Headers Bottom (Power + Analog) */}
    <rect x="26" y="47" width="16" height="4" fill="#222" />
    <rect x="44" y="47" width="12" height="4" fill="#222" />
    
    {/* Reset button */}
    <rect x="18" y="4" width="3" height="3" fill="#e0e0e0" />
    <circle cx="19.5" cy="5.5" r="1" fill="#666" />

    {/* Small components */}
    <rect x="24" y="20" width="6" height="3" fill="#silver" /> {/* Crystal */}
    
    {/* Branding */}
    <text x="36" y="20" fill="#fff" fontSize="5" fontFamily="sans-serif" fontWeight="bold" opacity="0.8" style={{userSelect:'none'}}>UNO</text>
    <text x="56" y="20" fill="#fff" fontSize="3" fontFamily="sans-serif" opacity="0.8" style={{userSelect:'none'}}>ARDUINO</text>
  </svg>
);

export default ArduinoUno;
