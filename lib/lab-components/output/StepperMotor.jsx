'use client';
import React from 'react';

const StepperMotor = ({ width = 50, height = 54 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 54" fill="none">
    <defs>
      <linearGradient id="stp-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d0d0d0" /><stop offset="50%" stopColor="#aaa" /><stop offset="100%" stopColor="#777" />
      </linearGradient>
      <filter id="stp-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" /></filter>
    </defs>
    {/* 5 wires out the side */}
    {[0,1,2,3,4].map(i=>(
      <line key={i} x1="46" y1={22+i*4} x2="50" y2={22+i*4} stroke={['#e63946','#0077b6','#111','#FF8C00','#e9c46a'][i]} strokeWidth="1" strokeLinecap="round" />
    ))}
    {/* Body */}
    <rect x="4" y="10" width="42" height="36" rx="2" fill="url(#stp-body)" filter="url(#stp-shadow)" />
    {/* Stacking lines */}
    <line x1="4" y1="22" x2="46" y2="22" stroke="#999" strokeWidth="0.5" />
    <line x1="4" y1="34" x2="46" y2="34" stroke="#999" strokeWidth="0.5" />
    {/* Front face */}
    <ellipse cx="25" cy="10" rx="18" ry="6" fill="#bbb" stroke="#999" strokeWidth="0.5" />
    {/* Mounting holes */}
    <circle cx="10" cy="10" r="2" fill="#888" stroke="#999" strokeWidth="0.3" />
    <circle cx="40" cy="10" r="2" fill="#888" stroke="#999" strokeWidth="0.3" />
    {/* Shaft */}
    <rect x="23" y="0" width="4" height="12" rx="2" fill="#ddd" />
    {/* Label */}
    <text x="25" y="30" fill="#555" fontSize="3.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>28BYJ-48</text>
  </svg>
);

export default StepperMotor;
