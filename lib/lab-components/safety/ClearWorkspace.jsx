'use client';
import React from 'react';

const ClearWorkspace = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Desk */}
    <rect x="8" y="40" width="48" height="6" fill="#8B4513" rx="3" />
    <path d="M14 46 L14 60 M50 46 L50 60" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
    {/* Sparkles with animation */}
    <g>
      <animateTransform attributeName="transform" type="scale" values="0.9;1.1;0.9" dur="2s" repeatCount="indefinite" />
      <path d="M32 10 L35 22 L47 25 L35 28 L32 40 L29 28 L17 25 L29 22 Z" fill="#F0B429">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
    <path d="M50 15 L52 21 L58 23 L52 25 L50 31 L48 25 L42 23 L48 21 Z" fill="#F0B429" opacity="0.7">
      <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
    </path>
    <path d="M16 12 L17 16 L21 17 L17 18 L16 22 L15 18 L11 17 L15 16 Z" fill="#F0B429" opacity="0.6">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="1.8s" repeatCount="indefinite" begin="1s" />
    </path>
  </svg>
);

export default ClearWorkspace;
