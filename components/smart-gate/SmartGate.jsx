"use client";
import React from 'react';
import SmartGateHero from './SmartGateHero';
import SmartGateSidebar from './SmartGateSidebar';
import SmartGateMissions from './SmartGateMissions';
import Link from 'next/link';
import './smartGate.css';

export default function SmartGate() {
  return (
    <div className="smart-gate-page font-sans text-[var(--ink)]">
      <header className="topbar sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-[rgba(221,230,239,0.85)]">
        <div className="wrapper h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="brand flex items-center gap-3 no-underline font-black tracking-wide">
            <img src="/assets/maskido-wordmark.png" className="h-[32px] object-contain" alt="Maskido" />
            <span className="hidden md:flex border-l border-[var(--border)] pl-3 ml-1 flex-col justify-center">
              <strong className="text-[0.85rem] tracking-[0.04em] leading-none">INNOVATION ACADEMY</strong>
            </span>
          </Link>
          <div className="top-actions flex gap-2.5 items-center">
            <span className="pill hidden md:inline-block border border-[var(--line)] bg-white rounded-full px-3.5 py-2 font-extrabold text-[0.84rem]">Project 02 · Beginner</span>
            <Link href="/smart-gate-lab" className="pill bg-[#eef9fc] !text-[#087d94] !border-[#bfeaf2] no-underline border border-[var(--line)] rounded-full px-3.5 py-2 font-extrabold text-[0.84rem]">⚡ Open Live Lab</Link>
            <a href="/downloads/MASKIDO_Smart_Gate_Workbook.pdf" download className="pill primary bg-[var(--ink)] text-white border-[var(--ink)] border rounded-full px-3.5 py-2 font-extrabold text-[0.84rem] no-underline">Download workbook</a>
          </div>
        </div>
      </header>

      <main id="top" className="hero-gradient-bg min-h-screen">
        <SmartGateHero />
        
        <div className="wrapper course-shell">
          <SmartGateSidebar />
          <SmartGateMissions />
        </div>
      </main>

      <footer className="py-7 md:pb-12 text-[var(--muted)] text-[0.85rem]">
        <div className="wrapper footer-card bg-[#071A33] text-[#DDEAF4] rounded-[24px] p-[26px] flex flex-col md:flex-row justify-between gap-5 md:items-center">
          <div><strong className="text-white">MASKIDO Innovation Academy</strong><br/>From consumers of technology to confident young innovators.</div>
          <div className="flex flex-wrap gap-2 text-white">
            <a href="#" className="no-underline">Help</a> · <a href="#" className="no-underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
