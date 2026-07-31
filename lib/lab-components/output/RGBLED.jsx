'use client';
import React from 'react';

const RGBLED = ({ width = 40, height = 46, r = true, g = true, b = true }) => {
  const blendColor = `rgb(${r?255:0},${g?255:0},${b?255:0})`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 46" fill="none">
      <defs>
        <radialGradient id="rgb-dome" cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="40%" stopColor={blendColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgba(200,200,200,0.3)" />
        </radialGradient>
        <filter id="rgb-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor={blendColor} floodOpacity="0.5" result="c" />
          <feComposite operator="in" in="c" in2="blur" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="rgb-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ddd" /><stop offset="100%" stopColor="#999" />
        </linearGradient>
      </defs>
      {/* 4 leads */}
      <line x1="12" y1="34" x2="12" y2="46" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="17" y1="34" x2="17" y2="46" stroke="#e63946" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="23" y1="34" x2="23" y2="46" stroke="#2a9d8f" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="34" x2="28" y2="46" stroke="#0077b6" strokeWidth="1.2" strokeLinecap="round" />
      {/* Base rim */}
      <ellipse cx="20" cy="32" rx="12" ry="3.5" fill="url(#rgb-base)" />
      {/* Diffused dome */}
      <path d="M8 32 Q8 8 20 4 Q32 8 32 32 Z" fill="url(#rgb-dome)" filter="url(#rgb-glow)" />
      {/* Specular */}
      <ellipse cx="16" cy="14" rx="4" ry="6" fill="rgba(255,255,255,0.3)" transform="rotate(-15 16 14)" />
      {/* Leg labels */}
      <text x="12" y="44" fill="#888" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>-</text>
      <text x="17" y="44" fill="#e63946" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>R</text>
      <text x="23" y="44" fill="#2a9d8f" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>G</text>
      <text x="28" y="44" fill="#0077b6" fontSize="2.5" fontFamily="monospace" textAnchor="middle" style={{userSelect:'none'}}>B</text>
    </svg>
  );
};

export default RGBLED;
