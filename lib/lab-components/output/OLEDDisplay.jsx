'use client';
import React from 'react';

const OLEDDisplay = ({ width = 50, height = 42 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 42" fill="none">
    <defs>
      <linearGradient id="oled-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1565c0" /><stop offset="100%" stopColor="#0d47a1" />
      </linearGradient>
      <filter id="oled-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* 4 pins */}
    {[12,18,24,30].map((x,i)=>(
      <line key={i} x1={x} y1="38" x2={x} y2="42" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
    ))}
    {/* PCB */}
    <rect x="2" y="2" width="46" height="36" rx="2" fill="url(#oled-pcb)" filter="url(#oled-shadow)" />
    {/* Screen */}
    <rect x="5" y="4" width="40" height="24" rx="1" fill="#000" />
    {/* Pixel content (simulated) */}
    <text x="25" y="14" fill="#00b4d8" fontSize="5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>0.96&quot;</text>
    <text x="25" y="22" fill="#0077b6" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>128x64</text>
    {/* Pin labels */}
    <text x="12" y="36" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>G</text>
    <text x="18" y="36" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>V</text>
    <text x="24" y="36" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>CL</text>
    <text x="30" y="36" fill="#90caf9" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>DA</text>
  </svg>
);

export default OLEDDisplay;
