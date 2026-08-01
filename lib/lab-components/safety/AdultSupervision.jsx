'use client';
import React from 'react';

const AdultSupervision = ({ width = 48, height = 48 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" fill="none">
    {/* Adult figure */}
    <circle cx="24" cy="20" r="8" fill="#1E88E5" />
    <path d="M12 48 C12 36, 36 36, 36 48 Z" fill="#1E88E5" />
    {/* Child figure */}
    <circle cx="44" cy="28" r="6" fill="#00B8D9" />
    <path d="M34 48 C34 40, 54 40, 54 48 Z" fill="#00B8D9" />
    {/* Tool / Wrench in adult's hand animated */}
    <g>
      <animateTransform attributeName="transform" type="rotate" values="-15 36 30; 5 36 30; -15 36 30" dur="1.5s" repeatCount="indefinite" />
      <path d="M28 36 L40 24 L42 26 L30 38 Z" fill="#9E9E9E" />
      <path d="M42 22 C40 20, 38 22, 38 24 L44 30 C46 28, 44 26, 42 22 Z" fill="#757575" />
    </g>
  </svg>
);

export default AdultSupervision;
