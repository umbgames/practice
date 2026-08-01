'use client';
import React from 'react';

const UltrasonicSensor = ({ width = 60, height = 40, interactivePins = {}, onPinClick }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 40" fill="none">
    <defs>
      <linearGradient id="board" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e88e5" />
        <stop offset="100%" stopColor="#1565c0" />
      </linearGradient>
      <radialGradient id="mesh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#e0e0e0" />
        <stop offset="70%" stopColor="#bdbdbd" />
        <stop offset="100%" stopColor="#9e9e9e" />
      </radialGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
      </filter>
    </defs>
    
    {/* Pins */}
    <rect x="23" y="34" width="2" height="6" fill="#silver" />
    <rect x="27" y="34" width="2" height="6" fill="#silver" />
    <rect x="31" y="34" width="2" height="6" fill="#silver" />
    <rect x="35" y="34" width="2" height="6" fill="#silver" />
    
    {/* Board */}
    <rect x="2" y="5" width="56" height="30" rx="3" fill="url(#board)" filter="url(#shadow)" />
    
    {/* Crystal Oscillator */}
    <rect x="25" y="15" width="10" height="5" rx="1" fill="#bdbdbd" />
    
    {/* Eyes (Transducers) */}
    <circle cx="16" cy="20" r="12" fill="url(#mesh)" stroke="#757575" strokeWidth="2" />
    <circle cx="16" cy="20" r="8" fill="#424242" />
    
    <circle cx="44" cy="20" r="12" fill="url(#mesh)" stroke="#757575" strokeWidth="2" />
    <circle cx="44" cy="20" r="8" fill="#424242" />

    {/* Interactive Pins Overlay */}
    {Object.entries({
      'VCC': { cx: 24, cy: 39 },
      'TRIG': { cx: 28, cy: 39 },
      'ECHO': { cx: 32, cy: 39 },
      'GND_SEN': { cx: 36, cy: 39 }
    }).map(([pinId, coords]) => {
      const pinData = interactivePins[pinId];
      if (!pinData) return null;
      
      const { color, state } = pinData;
      let strokeColor = '#fff';
      let strokeWidth = '0.5';
      let radius = 1.8;
      let opacity = 1;
      let className = 'cursor-pointer hover:stroke-white transition-all duration-200';
      
      if (state === 'connected') {
        opacity = 0.3;
        className = 'pointer-events-none';
      } else if (state === 'error') {
        strokeColor = '#ef4444';
        strokeWidth = '1';
        className += ' animate-shake';
      } else if (state === 'selected') {
        strokeColor = '#fff';
        strokeWidth = '1.5';
        radius = 2.5;
      }
      
      return (
        <circle 
          key={pinId}
          cx={coords.cx}
          cy={coords.cy}
          r={radius}
          fill={state === 'error' ? '#ef4444' : color}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          opacity={opacity}
          className={className}
          onClick={(e) => {
            e.stopPropagation();
            if (onPinClick && state !== 'connected') onPinClick(pinId);
          }}
        >
          <title>{pinId.replace('_SEN', '')}</title>
        </circle>
      );
    })}
  </svg>
);

export default UltrasonicSensor;
