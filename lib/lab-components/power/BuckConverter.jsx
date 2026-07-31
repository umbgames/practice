'use client';
import React from 'react';

const BuckConverter = ({ width = 50, height = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 36" fill="none">
    <defs>
      <linearGradient id="buck-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1565c0" />
        <stop offset="100%" stopColor="#0d47a1" />
      </linearGradient>
      <filter id="buck-shadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    <rect x="2" y="2" width="46" height="32" rx="2" fill="url(#buck-pcb)" filter="url(#buck-shadow)" />
    {/* Inductor */}
    <rect x="6" y="8" width="12" height="12" rx="1" fill="#222" />
    <circle cx="12" cy="14" r="4" fill="#333" stroke="#b87333" strokeWidth="1" />
    <text x="12" y="14" fill="#aaa" fontSize="3" fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{userSelect:'none'}}>470</text>
    {/* IC */}
    <rect x="22" y="10" width="10" height="8" rx="1" fill="#1a1a1a" />
    <text x="27" y="15" fill="#777" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>LM2596</text>
    {/* Capacitors */}
    <circle cx="40" cy="10" r="4" fill="#e0e0e0" />
    <path d="M38 6 A4 4 0 0 0 38 14" fill="#111" />
    <circle cx="40" cy="24" r="4" fill="#e0e0e0" />
    <path d="M38 20 A4 4 0 0 0 38 28" fill="#111" />
    {/* Trimpot */}
    <rect x="22" y="22" width="8" height="4" fill="#0d47a1" />
    <circle cx="26" cy="24" r="1.5" fill="#e9c46a" />
    {/* Pads */}
    <circle cx="6" cy="6" r="1.5" fill="#C0C0C0" />
    <circle cx="6" cy="30" r="1.5" fill="#C0C0C0" />
    <circle cx="44" cy="6" r="1.5" fill="#C0C0C0" />
    <circle cx="44" cy="30" r="1.5" fill="#C0C0C0" />
    <text x="10" y="7" fill="#fff" fontSize="3" fontFamily="monospace" style={{userSelect:'none'}}>IN+</text>
    <text x="10" y="31" fill="#fff" fontSize="3" fontFamily="monospace" style={{userSelect:'none'}}>IN-</text>
    <text x="40" y="7" fill="#fff" fontSize="3" fontFamily="monospace" textAnchor="end" style={{userSelect:'none'}}>OUT+</text>
    <text x="40" y="31" fill="#fff" fontSize="3" fontFamily="monospace" textAnchor="end" style={{userSelect:'none'}}>OUT-</text>
  </svg>
);

export default BuckConverter;
