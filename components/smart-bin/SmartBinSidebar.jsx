"use client";
import React, { useState, useEffect } from 'react';

export default function SmartBinSidebar() {
  const [completed, setCompleted] = useState(new Set());
  
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
      if (Array.isArray(stored)) {
        setCompleted(new Set(stored));
      }
    } catch {}
    
    // Listen for storage changes from other components (poor man's state sync)
    const interval = setInterval(() => {
      try {
        const stored = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
        setCompleted(new Set(stored));
      } catch {}
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pct = Math.round((completed.size / 8) * 100);

  return (
    <aside className="sidebar sticky top-[96px] self-start bg-white border border-[var(--line)] rounded-[22px] p-[18px] shadow-[0_12px_30px_rgba(7,26,51,.06)] hidden md:block">
      <div className="progress-wrap mb-[18px]">
        <div className="progress-label flex justify-between text-[0.8rem] font-black mb-2">
          <span>Your mission progress</span>
          <span>{pct}%</span>
        </div>
        <div className="progress h-2.5 bg-[#EDF2F7] rounded-full overflow-hidden">
          <span className="block h-full bg-gradient-to-r from-[var(--orange)] to-[var(--cyan)] rounded-full transition-all duration-300" style={{ width: `${pct}%` }}></span>
        </div>
      </div>
      <nav className="module-nav flex flex-col gap-1.5">
        {[
          'The Challenge', 'Meet the Team', 'Safety Gate', 'Sensor Lab', 
          'Servo Lab', 'Connect + Code', 'Build the Body', 'Test + Level Up'
        ].map((title, i) => (
          <a key={i} href={`#mission-${i+1}`} className={`no-underline grid grid-cols-[34px_1fr_22px] gap-2.5 items-center p-[9px] rounded-[13px] text-[var(--ink-2)] text-[0.86rem] font-extrabold hover:bg-[#F3F7FA] ${completed.has(i+1) ? 'done' : ''}`}>
            <span className="nav-num w-[34px] h-[34px] rounded-[10px] grid place-items-center bg-[#EEF4F8] text-[0.76rem]">
              {String(i+1).padStart(2, '0')}
            </span>
            <span>{title}</span>
            <span className={`nav-check w-5 h-5 rounded-full border-2 grid place-items-center text-[0.7rem] text-white ${completed.has(i+1) ? 'bg-[var(--green)] border-[var(--green)]' : 'border-[#CAD5E0]'}`}>
              ✓
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
