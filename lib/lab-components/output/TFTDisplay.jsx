'use client';
import React from 'react';

const TFTDisplay = ({ width = 60, height = 80 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 80" fill="none">
    <defs>
      <linearGradient id="tft-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c62828" /><stop offset="100%" stopColor="#8e0000" />
      </linearGradient>
      <linearGradient id="tft-screen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a237e" /><stop offset="100%" stopColor="#000" />
      </linearGradient>
      <filter id="tft-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" /></filter>
    </defs>
    {[10,16,22,28,34,38,44,50].map((x,i)=>(
      <line key={i} x1={x} y1="76" x2={x} y2="80" stroke="#C0C0C0" strokeWidth="0.8" strokeLinecap="round" />
    ))}
    <rect x="2" y="2" width="56" height="74" rx="3" fill="url(#tft-pcb)" filter="url(#tft-shadow)" />
    <rect x="5" y="4" width="50" height="60" rx="2" fill="#111" />
    <rect x="7" y="6" width="46" height="56" rx="1" fill="url(#tft-screen)" />
    <text x="30" y="30" fill="#42a5f5" fontSize="5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>2.4&quot; TFT</text>
    <text x="30" y="40" fill="#1565c0" fontSize="4" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>320x240</text>
    <text x="30" y="72" fill="#ef9a9a" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>ILI9341</text>
  </svg>
);

export default TFTDisplay;
