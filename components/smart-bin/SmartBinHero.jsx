"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function SmartBinHero({ onStart }) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="hero">
      <div className="wrapper hero-grid">
        <div>
          <span className="inline-flex items-center gap-[9px] bg-white border border-[var(--line)] rounded-full p-[8px_13px] text-[0.78rem] font-black tracking-widest uppercase shadow-[0_7px_20px_rgba(7,26,51,.05)]">
            <i className="w-[9px] h-[9px] rounded-full bg-[var(--orange)] shadow-[0_0_0_6px_rgba(255,122,0,.12)]" />
            Hands-on STEM mission
          </span>
          <h1 className="text-[clamp(2.6rem,6vw,5.1rem)] leading-[0.95] tracking-tight m-[24px_0_22px] max-w-[12ch] font-extrabold text-[#071A33]">
            Build a bin that <span className="text-[var(--orange)]">thinks.</span>
          </h1>
          <p className="text-[1.12rem] text-[#16324F] max-w-[62ch]">
            Turn an everyday problem into a working invention. You will give a trash bin “eyes” to detect a hand, a “brain” to make decisions, and a “muscle” to lift the lid automatically.
          </p>
          <div className="flex flex-wrap gap-2.5 m-[26px_0_30px]">
            <span className="bg-white border border-[var(--line)] rounded-[14px] p-[10px_13px] text-[0.84rem] font-extrabold text-[#071A33]">Age 9–14</span>
            <span className="bg-white border border-[var(--line)] rounded-[14px] p-[10px_13px] text-[0.84rem] font-extrabold text-[#071A33]">Beginner</span>
            <span className="bg-white border border-[var(--line)] rounded-[14px] p-[10px_13px] text-[0.84rem] font-extrabold text-[#071A33]">4–6 hours</span>
            <span className="bg-white border border-[var(--line)] rounded-[14px] p-[10px_13px] text-[0.84rem] font-extrabold text-[#071A33]">8 mini-missions</span>
            <span className="bg-white border border-[var(--line)] rounded-[14px] p-[10px_13px] text-[0.84rem] font-extrabold text-[#071A33]">Arduino + prototyping</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={onStart} className="border-0 rounded-[14px] p-[14px_18px] font-black inline-flex items-center gap-[9px] no-underline transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-[var(--orange)] to-[#FF9C2A] text-white shadow-[0_14px_30px_rgba(255,122,0,.25)] cursor-pointer">
              Start the mission →
            </button>
            <Link href="/lab" className="border-0 rounded-[14px] p-[14px_18px] font-black inline-flex items-center gap-[9px] no-underline transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-[#00a8c5] to-[#087d94] text-white shadow-[0_14px_30px_rgba(0,184,217,.2)]">
              ⚡ Enter Live Circuit Lab
            </Link>
            <a href="/downloads/smart_trash_bin.ino" download className="border border-[var(--line)] rounded-[14px] p-[14px_18px] font-black inline-flex items-center gap-[9px] no-underline transition-transform hover:-translate-y-0.5 bg-white text-[var(--ink)]">
              Download Arduino code
            </a>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#0A2547] to-[#071A33] rounded-[34px] p-[28px] text-white shadow-[0_30px_80px_rgba(7,26,51,.28)] overflow-hidden min-h-[500px]">
          <div className="absolute inset-[auto_-120px_-140px_auto] w-[340px] h-[340px] rounded-full bg-[rgba(0,184,217,.18)] blur-[4px]"></div>
          <div className="absolute inset-[-100px_auto_auto_-120px] w-[260px] h-[260px] rounded-full bg-[rgba(255,122,0,.22)]"></div>
          
          <div className="relative z-10 flex items-center justify-between text-[0.8rem] font-black uppercase tracking-widest">
            <span className="inline-flex gap-2 items-center before:content-[''] before:w-[9px] before:h-[9px] before:rounded-full before:bg-[#56E39F] before:shadow-[0_0_0_7px_rgba(86,227,159,.12)]">Live prototype</span>
            <span>Tap to test</span>
          </div>
          
          <div className="relative z-10 h-[360px] grid place-items-center mt-3">
            <div className={`bin-illustration ${demoOpen ? 'open' : ''}`} onClick={() => setDemoOpen(!demoOpen)}>
              <div className="signal"><span></span><span></span><span></span></div>
              <div className="hand"></div>
              <div className="bin-lid"></div>
              <div className="bin-body"><div className="bin-sensor"><span></span><span></span></div></div>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center -mt-2.5">
            <button type="button" onClick={() => setDemoOpen(!demoOpen)} className="border border-white/20 bg-white/10 text-white rounded-full p-[11px_16px] font-black cursor-pointer hover:bg-white/20">
              {demoOpen ? 'Move hand away' : 'Bring hand closer'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
