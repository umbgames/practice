'use client';
import React from 'react';

const USBConnector = ({ width = 32, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 40" fill="none">
    <defs>
      <linearGradient id="usb-metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="50%" stopColor="#c0c0c0" />
        <stop offset="100%" stopColor="#a0a0a0" />
      </linearGradient>
    </defs>
    {/* Pins */}
    {[10, 14, 18, 22].map((x, i) => (
      <line key={i} x1={x} y1="36" x2={x} y2="40" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
    ))}
    {/* Metal shield */}
    <rect x="4" y="16" width="24" height="20" rx="1" fill="url(#usb-metal)" stroke="#999" strokeWidth="0.5" />
    {/* Top opening */}
    <rect x="6" y="2" width="20" height="14" rx="1" fill="url(#usb-metal)" />
    <rect x="8" y="4" width="16" height="4" fill="#fff" />
    {/* Shield tabs */}
    <rect x="8" y="22" width="4" height="4" fill="#999" />
    <rect x="20" y="22" width="4" height="4" fill="#999" />
  </svg>
);

export default USBConnector;
