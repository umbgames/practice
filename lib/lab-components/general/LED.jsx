'use client';
import React from 'react';

const LED = ({ width = 36, height = 44, color = '#e63946', on = false }) => {
  const glowOpacity = on ? 0.7 : 0.15;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 44" fill="none">
      <defs>
        <radialGradient id={`led-dome-${color.replace('#','')}`} cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </radialGradient>
        <filter id={`led-glow-${color.replace('#','')}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor={color} floodOpacity={glowOpacity} result="c" />
          <feComposite operator="in" in="c" in2="blur" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="led-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ddd" />
          <stop offset="100%" stopColor="#999" />
        </linearGradient>
      </defs>
      {/* Leads */}
      <line x1="14" y1="32" x2="14" y2="44" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="32" x2="22" y2="44" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      {/* Anode lead longer */}
      <line x1="14" y1="38" x2="14" y2="44" stroke="#C0C0C0" strokeWidth="1.5" />
      {/* Base rim */}
      <ellipse cx="18" cy="30" rx="10" ry="3" fill="url(#led-base)" />
      {/* Dome */}
      <path d="M8 30 Q8 8 18 4 Q28 8 28 30 Z"
        fill={`url(#led-dome-${color.replace('#','')})`}
        filter={`url(#led-glow-${color.replace('#','')})`}
      />
      {/* Specular highlight */}
      <ellipse cx="14" cy="14" rx="4" ry="6" fill="rgba(255,255,255,0.35)" transform="rotate(-15 14 14)" />
    </svg>
  );
};

export default LED;
