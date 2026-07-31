"use client";
import React from 'react';

export default function Sidebar({ activeView, setActiveView, isMobileOpen, setMobileOpen }) {
  const navItems = [
    { id: 'home', icon: '▦', label: 'Overview' },
    { id: 'projects', icon: '◆', label: 'My Missions' },
    { id: 'packages', icon: '⬡', label: 'My Packages' },
    { id: 'library', icon: '📦', label: 'Components' },
    { id: 'achievements', icon: '🏆', label: 'Achievements' },
    { id: 'schools', icon: '🏫', label: 'Schools' },
  ];

  return (
    <aside 
      className={`p-[16px_14px] text-[var(--text)] flex flex-col transition-all
        ${isMobileOpen ? 'left-0 bg-white shadow-xl' : '-left-[250px] bg-transparent'} md:left-0 z-40 fixed w-[220px] m-[14px] mt-[86px] h-[calc(100vh-114px)] top-0`}
    >
      <div className="grid gap-2">
        <button onClick={() => { setActiveView('home'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'home' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          Overview
        </button>
        <button onClick={() => { setActiveView('projects'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'projects' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          My Missions
        </button>
        <button onClick={() => { setActiveView('packages'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'packages' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          My Packages
        </button>
        <button onClick={() => { setActiveView('library'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'library' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          Components
        </button>
        <button onClick={() => { setActiveView('achievements'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'achievements' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
          Achievements
        </button>
        <button onClick={() => { setActiveView('schools'); setMobileOpen(false); }} className={`p-3 rounded-xl text-left flex gap-3 items-center cursor-pointer transition-all ${activeView === 'schools' ? 'bg-[#143265] text-white font-bold' : 'text-[#334155] hover:bg-black/5 font-semibold'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 20v-7.59l-1.36.68A2 2 0 0 1 18 11.3V20h4Z"></path><path d="M2 20v-7.59l1.36.68A2 2 0 0 0 6 11.3V20H2Z"></path><path d="M6 20v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path><path d="M2 20h20"></path><path d="M12 2l7.5 4.5v5L12 7l-7.5 4.5v-5L12 2Z"></path></svg>
          Schools
        </button>
      </div>
      
      <div className="mt-auto flex flex-col gap-3">
        <div className="border border-[var(--border)] bg-white rounded-[18px] p-[12px] flex gap-2.5 shadow-sm">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e8f1fa] flex items-center justify-center">
            <img src="/assets/maskido-icon.png" alt="Maskido mascot" className="w-[85%] object-contain -mt-1" />
          </div>
          <div className="flex flex-col justify-center">
            <strong className="text-[13px] text-[#1e293b]">Maskido OS</strong>
            <small className="block text-[#64748b] text-[11px] leading-tight">v1.0 • Stable</small>
            <span className="block text-[#10b981] text-[10px] mt-0.5 font-bold">● System Online</span>
          </div>
        </div>
        
        <div className="border border-[var(--border)] bg-white rounded-[18px] p-[16px] text-center shadow-sm">
          <div className="flex justify-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full border-[3px] border-[#2563eb]"></div>
            <div className="w-3 h-1 bg-[#2563eb] rounded-full mt-2 self-end"></div>
            <div className="w-4 h-4 rounded-full border-[3px] border-[#2563eb]"></div>
          </div>
          <strong className="text-[14px] text-[#1e293b]">Lab Assistant</strong>
          <small className="block text-[#64748b] mt-0.5 text-[12px]">Ready to guide you.</small>
          <button className="mt-3 w-full p-[9px] border-0 rounded-[10px] bg-[#1d4ed8] text-white cursor-pointer hover:bg-[#1e40af] text-[13px] font-bold shadow-md transition-all">
            Ask for help
          </button>
        </div>
      </div>
    </aside>
  );
}
