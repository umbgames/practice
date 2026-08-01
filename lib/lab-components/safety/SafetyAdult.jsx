'use client';
import React from 'react';

const SafetyAdult = ({ width = 64, height = 64 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Happy Adult */}
    <circle cx="20" cy="20" r="12" fill="#4FC3F7" stroke="#0277BD" strokeWidth="4" />
    <path d="M4 60 C4 40 36 40 36 60" fill="#4FC3F7" stroke="#0277BD" strokeWidth="4" />
    <path d="M15 18 A2 2 0 1 1 15 18.1" stroke="#0277BD" strokeWidth="4" strokeLinecap="round" />
    <path d="M25 18 A2 2 0 1 1 25 18.1" stroke="#0277BD" strokeWidth="4" strokeLinecap="round" />
    <path d="M17 24 Q20 28 23 24" stroke="#0277BD" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Happy Kid */}
    <circle cx="48" cy="36" r="8" fill="#FFCA28" stroke="#F57F17" strokeWidth="4" />
    <path d="M36 60 C36 48 60 48 60 60" fill="#FFCA28" stroke="#F57F17" strokeWidth="4" />
    <path d="M45 34 A1.5 1.5 0 1 1 45 34.1" stroke="#F57F17" strokeWidth="3" strokeLinecap="round" />
    <path d="M51 34 A1.5 1.5 0 1 1 51 34.1" stroke="#F57F17" strokeWidth="3" strokeLinecap="round" />
    <path d="M46 38 Q48 41 50 38" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Holding Hands Heart */}
    <path d="M30 40 L34 36 A3 3 0 0 1 38 40 L34 44 Z" fill="#E53935">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default SafetyAdult;
