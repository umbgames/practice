'use client';
import React from 'react';

const JumperWires = ({ width = 60, height = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 20" fill="none">
    {/* Wires */}
    <path d="M10 10 Q30 0 50 10" fill="none" stroke="#e63946" strokeWidth="1.5" />
    <path d="M10 14 Q30 24 50 14" fill="none" stroke="#111" strokeWidth="1.5" />
    
    {/* Headers / Connectors */}
    <rect x="4" y="6" width="6" height="6" rx="1" fill="#1a1a1a" />
    <rect x="50" y="6" width="6" height="6" rx="1" fill="#1a1a1a" />
    <line x1="2" y1="9" x2="4" y2="9" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
    <line x1="56" y1="9" x2="58" y2="9" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
    
    <rect x="4" y="12" width="6" height="6" rx="1" fill="#1a1a1a" />
    <rect x="50" y="12" width="6" height="6" rx="1" fill="#1a1a1a" />
    <line x1="2" y1="15" x2="4" y2="15" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
    <line x1="56" y1="15" x2="58" y2="15" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export default JumperWires;
