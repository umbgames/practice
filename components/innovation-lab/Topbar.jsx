"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Topbar({ activeView, setActiveView, setMobileOpen }) {
  const [totalXP, setTotalXP] = useState(0);

  useEffect(() => {
    let xp = 0;
    try {
      // Smart Bin XP
      const binProgress = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
      if (Array.isArray(binProgress)) {
        xp += binProgress.length * 20;
        if (binProgress.includes(8)) xp += 50; // extra for final mission
      }
      
      // Smart Gate XP
      const gateProgress = JSON.parse(window.localStorage.getItem('maskido-smart-gate-progress-v1') || '[]');
      if (Array.isArray(gateProgress)) {
        xp += gateProgress.length * 20;
        if (gateProgress.includes(8)) xp += 50; // extra for final mission
      }
      
      setTotalXP(xp);
    } catch {}
  }, []);

  return (
    <header className="col-span-1 md:col-span-2 sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[rgba(221,230,239,0.85)]">
      <div className="h-[72px] flex items-center justify-between gap-4 px-5 md:px-7">
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileOpen(prev => !prev)} className="md:hidden border border-[var(--border)] bg-white rounded-xl p-[10px] cursor-pointer" aria-label="Open menu">
            ☰
          </button>
          <Link href="/" className="brand flex items-center gap-3 no-underline font-black tracking-wide">
            <img src="/assets/maskido-wordmark.png" className="h-[28px] object-contain" alt="Maskido" />
            <span className="hidden md:flex border-l-[1.5px] border-[#cbd5e1] pl-3 ml-1 flex-col justify-center">
              <strong className="text-[13px] tracking-wide text-[#0f172a]">INNOVATION ACADEMY</strong>
            </span>
          </Link>
        </div>

        <div className="flex-1"></div>
        
        <div className="flex items-center gap-2.5">
          <button className="hidden md:flex items-center justify-center w-[40px] h-[40px] border border-[#e2e8f0] bg-white rounded-xl cursor-pointer shadow-sm hover:bg-gray-50 transition-colors" title="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          
          <div className="bg-[#fff7ea] border border-[#ffedd5] rounded-xl px-[14px] py-[8.5px] flex gap-2 items-center text-[13.5px] text-[#0f172a]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            <strong>{totalXP}</strong> XP
          </div>
          
          <button className="border border-[#e2e8f0] bg-white shadow-sm rounded-xl p-[5px_10px_5px_5px] flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-[30px] h-[30px] rounded-full bg-[#dcfce7] flex items-center justify-center overflow-hidden border border-[#bbf7d0]">
              <img src="/assets/maskido-icon.png" alt="Profile" className="w-[85%] object-contain mt-1" />
            </div>
            <span className="hidden md:inline text-[13.5px] font-semibold text-[#0f172a]">Young Innovator</span>
            <svg className="hidden md:inline ml-0.5 text-[#64748b]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
