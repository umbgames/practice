'use client';
import React from 'react';

const RelayModule = ({ width = 60, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 48" fill="none">
    <defs>
      <linearGradient id="rm-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e7d32" /><stop offset="100%" stopColor="#1b5e20" />
      </linearGradient>
      <linearGradient id="rm-relay" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2c5aa0" /><stop offset="100%" stopColor="#1a3d7c" />
      </linearGradient>
      <filter id="rm-shadow"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* Input pins */}
    {[10,20,30].map((x,i)=>(<line key={`i${i}`} x1={x} y1="44" x2={x} y2="48" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />))}
    {/* Output terminals */}
    {[38,46,54].map((x,i)=>(<line key={`o${i}`} x1={x} y1="44" x2={x} y2="48" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />))}
    {/* PCB */}
    <rect x="2" y="2" width="56" height="42" rx="3" fill="url(#rm-pcb)" filter="url(#rm-shadow)" />
    {/* Relay component */}
    <rect x="6" y="6" width="28" height="24" rx="2" fill="url(#rm-relay)" />
    <text x="20" y="16" fill="#8cb8ff" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>SRD-05V</text>
    <text x="20" y="22" fill="#5588bb" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>DC-SL-C</text>
    {/* Status LED */}
    <circle cx="42" cy="10" r="2.5" fill="#e63946" opacity="0.7" />
    {/* Transistor */}
    <rect x="40" y="18" width="8" height="8" rx="1" fill="#1a1a1a" />
    {/* Screw terminals */}
    {[38,46,54].map((x,i)=>(
      <rect key={i} x={x-3} y="32" width="6" height="8" rx="1" fill="#0077b6" />
    ))}
    {/* Terminal labels */}
    <text x="38" y="36" fill="#fff" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>NO</text>
    <text x="46" y="36" fill="#fff" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>CM</text>
    <text x="54" y="36" fill="#fff" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>NC</text>
  </svg>
);

export default RelayModule;
