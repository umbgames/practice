'use client';
import React from 'react';

const CorrectPolarity = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    <rect x="12" y="20" width="40" height="24" rx="4" fill="#333" />
    <rect x="52" y="26" width="4" height="12" rx="1" fill="#9E9E9E" />
    {/* + and - labels pulsing sequentially */}
    <path d="M42 28 V36 M38 32 H46" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
    </path>
    <path d="M18 32 H26" stroke="#E5484D" strokeWidth="3" strokeLinecap="round">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" begin="0.5s" />
    </path>
    {/* Battery details */}
    <path d="M32 20 V44" stroke="#555" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

export default CorrectPolarity;
