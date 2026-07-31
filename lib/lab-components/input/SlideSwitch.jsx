'use client';
import React from 'react';

const SlideSwitch = ({ width = 36, height = 20, on = false }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 20" fill="none">
    <defs>
      <linearGradient id="ss-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#444" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <linearGradient id="ss-slider" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
    </defs>
    {/* Pins */}
    <line x1="8" y1="17" x2="8" y2="20" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="17" x2="18" y2="20" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="28" y1="17" x2="28" y2="20" stroke="#C0C0C0" strokeWidth="1.2" strokeLinecap="round" />
    {/* Body */}
    <rect x="2" y="3" width="32" height="14" rx="3" fill="url(#ss-body)" />
    {/* Track groove */}
    <rect x="6" y="8" width="24" height="4" rx="2" fill="#111" />
    {/* Slider knob */}
    <rect x={on ? 20 : 6} y="6" width="10" height="8" rx="2" fill="url(#ss-slider)" />
    <line x1={on ? 25 : 11} y1="8" x2={on ? 25 : 11} y2="12" stroke="#666" strokeWidth="0.8" />
  </svg>
);

export default SlideSwitch;
