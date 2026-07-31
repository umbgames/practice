'use client';
import React from 'react';

const SevenSegmentDisplay = ({ width = 40, height = 56, digit = 8 }) => {
  // Segments: a(top), b(top-right), c(bot-right), d(bot), e(bot-left), f(top-left), g(mid)
  const segMap = {
    0:[1,1,1,1,1,1,0], 1:[0,1,1,0,0,0,0], 2:[1,1,0,1,1,0,1], 3:[1,1,1,1,0,0,1],
    4:[0,1,1,0,0,1,1], 5:[1,0,1,1,0,1,1], 6:[1,0,1,1,1,1,1], 7:[1,1,1,0,0,0,0],
    8:[1,1,1,1,1,1,1], 9:[1,1,1,1,0,1,1],
  };
  const segs = segMap[digit] || segMap[8];
  const onColor = '#e63946';
  const offColor = '#1a0000';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 56" fill="none">
      <defs>
        <filter id="seg-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="b" />
          <feFlood floodColor="#e63946" floodOpacity="0.4" result="c" />
          <feComposite operator="in" in="c" in2="b" result="g" />
          <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* 10 pins at bottom */}
      {Array.from({length:5}).map((_,i)=>(
        <React.Fragment key={i}>
          <line x1={6+i*7} y1="50" x2={6+i*7} y2="56" stroke="#C0C0C0" strokeWidth="1" strokeLinecap="round" />
        </React.Fragment>
      ))}
      {/* Housing */}
      <rect x="2" y="2" width="36" height="48" rx="2" fill="#111" />
      {/* a - top */}
      <rect x="12" y="8" width="16" height="3" rx="1" fill={segs[0]?onColor:offColor} filter={segs[0]?"url(#seg-glow)":""} />
      {/* b - top right */}
      <rect x="28" y="10" width="3" height="14" rx="1" fill={segs[1]?onColor:offColor} filter={segs[1]?"url(#seg-glow)":""} />
      {/* c - bottom right */}
      <rect x="28" y="26" width="3" height="14" rx="1" fill={segs[2]?onColor:offColor} filter={segs[2]?"url(#seg-glow)":""} />
      {/* d - bottom */}
      <rect x="12" y="40" width="16" height="3" rx="1" fill={segs[3]?onColor:offColor} filter={segs[3]?"url(#seg-glow)":""} />
      {/* e - bottom left */}
      <rect x="9" y="26" width="3" height="14" rx="1" fill={segs[4]?onColor:offColor} filter={segs[4]?"url(#seg-glow)":""} />
      {/* f - top left */}
      <rect x="9" y="10" width="3" height="14" rx="1" fill={segs[5]?onColor:offColor} filter={segs[5]?"url(#seg-glow)":""} />
      {/* g - middle */}
      <rect x="12" y="24" width="16" height="3" rx="1" fill={segs[6]?onColor:offColor} filter={segs[6]?"url(#seg-glow)":""} />
      {/* Decimal point */}
      <circle cx="34" cy="42" r="1.5" fill={offColor} />
    </svg>
  );
};

export default SevenSegmentDisplay;
