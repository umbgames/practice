'use client';
import React from 'react';

const KeepFingersClear = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Warning Sign bouncing slightly */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0; 0,-2; 0,0" dur="2s" repeatCount="indefinite" />
      <path d="M32 8 L56 50 H8 Z" fill="#F0B429" stroke="#E5A000" strokeWidth="4" strokeLinejoin="round" />
      {/* Hand */}
      <path d="M28 26 V36 M32 24 V36 M36 28 V36 M40 32 V36" stroke="#333" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 38 C24 34, 28 34, 28 38 V42 H40 V38 C40 44, 32 46, 24 46 Z" fill="#333" />
      {/* Cross / Slashed flashing */}
      <path d="M26 26 L42 42 M42 26 L26 42" stroke="#E5484D" strokeWidth="4" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default KeepFingersClear;
