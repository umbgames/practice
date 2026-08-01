'use client';
import React from 'react';

const DangerGear = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Spinning Gear */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="0 32 32; 360 32 32" dur="3s" repeatCount="indefinite" />
      <path d="M42 22 L46 16 L50 20 L46 26 C48 29 48 31 48 32 C48 33 48 35 46 38 L50 44 L46 48 L42 42 C39 44 37 44 36 45 L34 52 L28 52 L26 45 C25 44 23 44 20 42 L16 48 L12 44 L16 38 C14 35 14 33 14 32 C14 31 14 29 16 26 L12 20 L16 16 L20 22 C23 20 25 20 26 19 L28 12 L34 12 L36 19 C37 20 39 20 42 22 Z" fill="#90A4AE" stroke="#455A64" strokeWidth="4" />
      <circle cx="32" cy="32" r="8" fill="#ECEFF1" stroke="#455A64" strokeWidth="4" />
    </g>
    {/* Red Ouch marks */}
    <path d="M12 12 L6 6 M52 12 L58 6" stroke="#E53935" strokeWidth="5" strokeLinecap="round">
      <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
    </path>
    {/* Bandaged Finger getting too close */}
    <path d="M26 60 V40 C26 36 32 36 32 40 V60" fill="#FFCCBC" stroke="#D84315" strokeWidth="4" />
    <path d="M26 48 H32 M26 52 H32" stroke="#FFFFFF" strokeWidth="3" />
  </svg>
);

export default DangerGear;
