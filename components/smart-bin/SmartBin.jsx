"use client";
import React, { useState } from 'react';
import SmartBinHero from './SmartBinHero';
import SmartBinPath from './SmartBinPath';
import SmartBinSidebar from './SmartBinSidebar';
import SmartBinMissions from './SmartBinMissions';
import Link from 'next/link';
import './smartBin.css'; // specific styles for smart bin page

export default function SmartBin() {
  const [viewState, setViewState] = useState('hero'); // 'hero', 'path', or mission ID (e.g., 1)
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('forward');
  const [xp, setXp] = useState(0);

  const totalMissions = 8;
  const currentMission = typeof viewState === 'number' ? viewState : 0;
  const progressPercent = currentMission > 0 ? ((currentMission - 1) / totalMissions) * 100 : 0;

  const changeView = (newView) => {
    if (newView === viewState) return;
    setDirection(newView === 'hero' ? 'backward' : 'forward');
    setAnimating(true);
    setTimeout(() => {
      setViewState(newView);
      setAnimating(false);
      window.scrollTo(0, 0);
    }, 400); // match CSS transition time
  };

  const addXp = (amount) => setXp((prev) => prev + amount);

  return (
    <div className="smart-bin-page font-sans text-[var(--ink)] bg-[#FAFCFF] min-h-screen relative flex flex-col">
      {/* Ultra-minimal Topbar (only shown when in a mission) */}
      {typeof viewState === 'number' && (
        <header className="sticky top-0 z-[100] bg-white h-16 flex items-center justify-between px-6 border-b-2 border-gray-100">
          <button onClick={() => changeView('path')} className="text-gray-400 hover:text-gray-600 font-bold text-2xl w-10 flex items-center justify-start">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="flex-1 max-w-lg mx-8 flex items-center justify-center gap-3">
            {/* The active module long bar */}
            <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-green-500 transition-all duration-500 ease-out absolute left-0 top-0"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {/* The upcoming modules as dots */}
            <div className="w-2.5 h-2.5 rounded-full bg-gray-100 flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-100 flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-100 flex-shrink-0" />
          </div>

          <div className="flex items-center gap-1.5 font-bold text-gray-400 w-16 justify-end text-lg">
            <span>{xp}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
        </header>
      )}

      {/* When in path, add a simple exit button */}
      {viewState === 'path' && (
        <button onClick={() => changeView('hero')} className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 font-black text-xl z-50">✕</button>
      )}

      <main className="flex-1 relative overflow-hidden flex items-center justify-center">
        <div className={`transition-container absolute w-full h-full flex flex-col transition-transform duration-400 ease-in-out ${animating ? (direction === 'forward' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}`}>
          
          {viewState === 'hero' && (
            <div className="flex-1 flex flex-col items-center justify-center min-h-screen">
              <SmartBinHero onStart={() => changeView('path')} />
            </div>
          )}

          {viewState === 'path' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <SmartBinPath onSelectMission={(id) => changeView(id)} />
            </div>
          )}

          {typeof viewState === 'number' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full p-4 overflow-y-auto">
              <SmartBinMissions 
                activeMission={viewState} 
                onNext={() => changeView(viewState === 8 ? 'path' : viewState + 1)}
                onBack={() => changeView('path')}
                onXP={addXp}
              />
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}
