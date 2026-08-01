'use client';
import React, { useState, useEffect } from 'react';

export default function SmartBinPath({ onSelectMission }) {
  const [completed, setCompleted] = useState(new Set());

  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
      if (Array.isArray(stored)) {
        setCompleted(new Set(stored));
      }
    } catch {}
  }, []);

  const modules = [
    { id: 1, title: 'Smart Trash Bin', subtitle: 'Module 1', icon: '🗑️', completed: completed.has(8) },
    { id: 'locked-2', title: 'Smart Gate', subtitle: 'Module 2', icon: '🚪', completed: false, locked: true },
    { id: 'locked-3', title: 'Weather Station', subtitle: 'Module 3', icon: '⛅', completed: false, locked: true },
  ];

  return (
    <div className="learning-path-container w-full">
      <div className="path-header text-center mb-12">
        <h2 className="text-3xl font-black mb-2 text-[#071A33]">Your Learning Path</h2>
        <p className="text-[var(--muted)]">Master smart systems step by step.</p>
      </div>
      
      <div className="path-scroll-wrapper pb-8 overflow-x-auto flex gap-6 px-6 max-w-5xl mx-auto items-center justify-center">
        {modules.map((mod, index) => (
          <React.Fragment key={mod.id}>
            <button
              onClick={() => {
                if (!mod.locked) onSelectMission(1); // start at mission 1 for module 1
              }}
              disabled={mod.locked}
              className={`path-node flex-shrink-0 flex flex-col items-center gap-3 transition-transform ${mod.locked ? 'opacity-50 locked' : 'hover:-translate-y-1'}`}
            >
              <div className={`node-icon w-24 h-24 rounded-3xl flex items-center justify-center text-4xl shadow-lg border-2 ${
                mod.completed 
                  ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-600 text-white' 
                  : !mod.locked
                    ? 'bg-gradient-to-br from-[#00a8c5] to-[#087d94] border-[#065b6c] text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
              }`}>
                {mod.icon}
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-[var(--orange)] mb-1 uppercase tracking-wider">{mod.subtitle}</div>
                <div className="text-sm font-bold text-[#071A33] leading-tight max-w-[120px]">{mod.title}</div>
              </div>
            </button>
            {index < modules.length - 1 && (
              <div className={`path-connector h-1 w-16 flex-shrink-0 rounded-full ${
                mod.completed ? 'bg-green-400' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
