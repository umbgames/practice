'use client';
import React from 'react';

const ServoMotor = ({ width = 56, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 56 40" fill="none">
    <defs>
      <linearGradient id="srv-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e88e5" /><stop offset="100%" stopColor="#0d47a1" />
      </linearGradient>
      <filter id="srv-shadow"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.3" /></filter>
    </defs>
    {/* Wire harness */}
    <line x1="48" y1="30" x2="56" y2="30" stroke="#8B4513" strokeWidth="1" />
    <line x1="48" y1="32" x2="56" y2="32" stroke="#e63946" strokeWidth="1" />
    <line x1="48" y1="34" x2="56" y2="34" stroke="#FF8C00" strokeWidth="1" />
    {/* Body */}
    <rect x="4" y="8" width="44" height="28" rx="3" fill="url(#srv-body)" filter="url(#srv-shadow)" />
    {/* Mounting ears */}
    <rect x="0" y="28" width="8" height="6" rx="1" fill="#1565c0" />
    <circle cx="4" cy="31" r="1.5" fill="#0d47a1" />
    <rect x="44" y="28" width="8" height="6" rx="1" fill="#1565c0" />
    <circle cx="48" cy="31" r="1.5" fill="#0d47a1" />
    {/* Output gear/shaft */}
    <circle cx="14" cy="8" r="6" fill="#1565c0" stroke="#0d47a1" strokeWidth="0.8" />
    <circle cx="14" cy="8" r="3" fill="#ddd" />
    {/* Spline pattern */}
    {Array.from({length:8}).map((_,i)=>{
      const a = i*45*Math.PI/180;
      return <line key={i} x1={14+2*Math.cos(a)} y1={8+2*Math.sin(a)} x2={14+3*Math.cos(a)} y2={8+3*Math.sin(a)} stroke="#999" strokeWidth="0.5" />;
    })}
    {/* Horn */}
    <rect x="12" y="0" width="4" height="8" rx="1" fill="#ddd" />
    {/* Label */}
    <text x="30" y="20" fill="#90caf9" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>SG90</text>
    <text x="30" y="26" fill="#64b5f6" fontSize="3" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>180°</text>
  </svg>
);

export default ServoMotor;
