'use client';
import React from 'react';

const LCDDisplay = ({ width = 100, height = 50, text = 'Hello World!' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 50" fill="none">
    <defs>
      <linearGradient id="lcd-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e7d32" /><stop offset="100%" stopColor="#1b5e20" />
      </linearGradient>
      <linearGradient id="lcd-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a8d8a8" /><stop offset="100%" stopColor="#7bc47b" />
      </linearGradient>
      <filter id="lcd-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
      </filter>
    </defs>
    {/* Pin header */}
    {Array.from({length:16}).map((_,i)=>(
      <line key={i} x1={6+i*5.5} y1="46" x2={6+i*5.5} y2="50" stroke="#C0C0C0" strokeWidth="0.8" strokeLinecap="round" />
    ))}
    {/* PCB */}
    <rect x="2" y="2" width="96" height="44" rx="3" fill="url(#lcd-pcb)" filter="url(#lcd-shadow)" />
    {/* Screen bezel */}
    <rect x="8" y="6" width="84" height="32" rx="2" fill="#1a1a1a" />
    {/* LCD glass */}
    <rect x="10" y="8" width="80" height="28" rx="1" fill="url(#lcd-screen)" />
    {/* Text line 1 */}
    <text x="14" y="20" fill="#1a4a1a" fontSize="6" fontFamily="monospace" style={{userSelect:'none'}}>{text.substring(0,16)}</text>
    {/* Text line 2 */}
    <text x="14" y="30" fill="#1a4a1a" fontSize="6" fontFamily="monospace" style={{userSelect:'none'}}>{text.substring(16,32) || ''}</text>
    {/* Trim pot */}
    <circle cx="8" cy="42" r="2" fill="#1565c0" />
  </svg>
);

export default LCDDisplay;
