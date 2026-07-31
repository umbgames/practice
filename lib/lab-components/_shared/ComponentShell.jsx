'use client';
import React from 'react';

/**
 * ComponentShell — shared wrapper for all lab SVG components.
 * Provides: tooltip, hover scale animation, optional glow ring, consistent sizing.
 */
const ComponentShell = ({
  children,
  name = '',
  width,
  height,
  className = '',
  active = false,
  glowColor = '#00f5d4',
  onClick,
  style: extraStyle = {},
}) => {
  const shellStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
    position: 'relative',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.2s ease',
    borderRadius: '6px',
    ...extraStyle,
  };

  const glowStyle = active ? {
    boxShadow: `0 0 12px ${glowColor}80, 0 0 24px ${glowColor}40`,
  } : {};

  return (
    <div
      className={`lab-component-shell ${className}`}
      style={{ ...shellStyle, ...glowStyle }}
      title={name}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.zIndex = '10';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.zIndex = '1';
      }}
    >
      {children}
    </div>
  );
};

export default ComponentShell;
