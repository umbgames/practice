"use client";
import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { packages, categories, projects } from '@/lib/data';
import { PackageCard, CategoryCard, ProjectCard } from '@/components/ui/Cards';
import Link from 'next/link';

export default function InnovationLab() {
  const [activeView, setActiveView] = useState('home');
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');

  const renderHome = () => (
    <>
      <div className="bg-white border border-[#e2e8f0] rounded-[28px] p-6 md:p-9 md:px-12 grid md:grid-cols-[1.3fr_0.7fr] gap-5 shadow-[0_12px_24px_rgba(226,232,240,0.4)] relative overflow-hidden min-h-[380px]">
        {/* Soft background blob */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(241,245,249,0.8),transparent_70%)] right-[-100px] top-[-100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col justify-center">
          <span className="text-[10px] w-fit rounded-full px-3 py-1.5 bg-[#eff6ff] text-[#3b82f6] font-bold tracking-[0.1em] uppercase border border-[#dbeafe] shadow-sm">THE CRADLE OF INNOVATION</span>
          <h1 className="text-[clamp(42px,5vw,72px)] leading-[1.05] m-[20px_0_16px] font-extrabold tracking-tight">
            <span className="text-[#0f172a]">Maskido</span> <span className="text-[#10b981]">Virtual</span><br />
            <span className="text-[#2563eb]">Innovation Lab</span>
          </h1>
          <p className="text-[17px] text-[#475569] max-w-[560px] font-medium leading-[1.6]">
            Where young minds build the future through creative computing, coding, robotics, drones and hands-on innovation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/lab" className="border-0 rounded-xl p-[14px_22px] font-bold cursor-pointer bg-[#10b981] text-white shadow-[0_8px_16px_rgba(16,185,129,0.25)] flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              Enter Live Lab
            </Link>
            <button onClick={() => setActiveView('packages')} className="border border-[#e2e8f0] rounded-xl p-[14px_22px] font-bold cursor-pointer bg-white text-[#1d4ed8] shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Explore Packages <span className="text-[#94a3b8]">›</span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center relative">
          {/* Decorative floating elements */}
          <div className="absolute -top-2 right-8 w-[14px] h-[14px] rounded-full bg-[#ef4444] shadow-[0_4px_12px_rgba(239,68,68,0.4)] animate-[float_3s_ease-in-out_infinite]" />
          <div className="absolute top-6 -right-2 text-[28px] rotate-[25deg] animate-[float_4s_ease-in-out_infinite_0.5s] drop-shadow-[0_4px_8px_rgba(59,130,246,0.3)]">✈️</div>
          <div className="absolute top-[40%] -right-3 w-[10px] h-[10px] rounded-full bg-[#3b82f6] animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="absolute bottom-[30%] -right-1 w-[8px] h-[8px] rounded-full bg-[#22c55e] animate-[pulse_2.5s_ease-in-out_infinite_0.3s]" />
          <div className="absolute top-[20%] left-4 w-[6px] h-[6px] rounded-full bg-[#f59e0b] animate-[pulse_3s_ease-in-out_infinite_0.8s]" />
          <div className="absolute bottom-[15%] left-8 w-[8px] h-[8px] rounded-full bg-[#3b82f6] animate-[pulse_2.8s_ease-in-out_infinite_0.2s]" />
          {/* Mascot with circular green border */}
          <div className="relative w-[min(290px,100%)] aspect-square rounded-full border-[6px] border-[#10b981] bg-gradient-to-br from-[#e8f9ee] to-[#d4f0dd] flex items-center justify-center shadow-[0_18px_40px_rgba(16,185,129,0.2)]">
            <img src="/assets/maskido-icon.png" alt="Maskido mascot" className="w-[85%] drop-shadow-[0_12px_16px_rgba(15,23,42,.15)] animate-[float_3.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
      
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">✨ Choose your innovation path</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Five progressive packages, one continuous learning journey.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {packages.map((pkg, i) => <PackageCard key={pkg.id} pkg={pkg} index={i} />)}
      </div>

      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Explore by category</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Discover the area that excites you most.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {categories.map((cat) => <CategoryCard key={cat[0]} category={cat} />)}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Featured projects</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Interactive missions designed to make learning visible.</p>
        </div>
        <button onClick={() => setActiveView('projects')} className="border border-[var(--border)] rounded-[14px] p-[9px_14px] font-bold cursor-pointer bg-white text-[var(--text)] text-sm">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {projects.slice(0, 8).map(p => (
          <div key={p.name} onClick={() => { 
            if(p.name === 'Smart Trash Bin') window.location.href = '/smart-trash-bin'; 
            if(p.name === 'Smart Gate') window.location.href = '/smart-gate'; 
          }}>
            <ProjectCard project={p} pkgObj={packages.find(x => x.id === p.pkg)} />
          </div>
        ))}
      </div>
    </>
  );

  const renderPackages = () => (
    <>
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Creative Mind Pathways</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Packages from first discovery to entrepreneurship.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {packages.map((pkg, i) => <PackageCard key={pkg.id} pkg={pkg} index={i} />)}
      </div>
      
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Package × category map</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">A structured view of how projects are organised.</p>
        </div>
      </div>
      <div className="grid grid-cols-[140px_repeat(6,180px)] lg:grid-cols-[160px_repeat(6,1fr)] gap-[1px] bg-[var(--border)] border border-[var(--border)] rounded-[18px] overflow-auto mb-8">
        <div className="font-extrabold bg-[#f7f9fc] p-3 min-h-[68px]">Pathway</div>
        {categories.map(c => <div key={c[0]} className="font-extrabold bg-[#f7f9fc] p-3 min-h-[68px]">{c[1]} {c[0]}</div>)}
        {packages.map(p => (
          <React.Fragment key={p.id}>
            <div className={`font-extrabold bg-white p-3 min-h-[68px] flex items-center gap-2 ${p.id}`}>{p.icon} {p.short}</div>
            {categories.map(c => {
              const pr = projects.find(x => x.pkg === p.id && x.cat === c[0]);
              return (
                <div key={`${p.id}-${c[0]}`} className="bg-white p-3 min-h-[68px]">
                  {pr ? (
                    <>
                      <strong>{pr.icon} {pr.name}</strong>
                      <small className="block text-[#6c7b91]">{pr.level}</small>
                    </>
                  ) : (
                    <div className="opacity-45 text-center flex flex-col items-center justify-center h-full">
                      🔒<br/><small>Coming soon</small>
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </>
  );

  const renderProjects = () => {
    return (
      <>
        {/* Welcome Back Banner */}
        <div className="bg-gradient-to-r from-[#fff7ed] to-[#ffedd5] border border-[#fed7aa] rounded-[24px] p-8 relative overflow-hidden mb-8 shadow-sm">
          {/* Decorative swooshes */}
          <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] bg-white opacity-40 rounded-full blur-2xl"></div>
          <div className="absolute -top-12 right-40 w-[200px] h-[200px] bg-[#fef08a] opacity-40 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-[60%]">
            <h2 className="text-[28px] font-extrabold text-[#0f172a] mb-2 flex items-center gap-2">
              Welcome back, Young Innovator! <span className="text-[24px]">👋</span>
            </h2>
            <p className="text-[#64748b] text-[15px] font-medium">Pick a mission and start building the future.</p>
          </div>
          
          {/* Mascot */}
          <div className="absolute right-8 bottom-0 w-[180px] h-[140px] flex items-end justify-center z-10">
            {/* The SVG and styling mimic the floating mascot/paper plane in the screenshot */}
            <div className="absolute -left-12 top-4 text-[24px] rotate-[-15deg] animate-[float_4s_ease-in-out_infinite]">✨</div>
            <div className="absolute -right-8 top-0 text-[32px] rotate-[15deg] animate-[float_3s_ease-in-out_infinite_0.5s] drop-shadow-md">🚀</div>
            <img src="/assets/maskido-icon.png" alt="Maskido mascot" className="w-[120px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] z-20 object-contain translate-y-4" />
          </div>
          
          {/* Wavy bottom shape (mimicking the abstract plant/wave shapes) */}
          <svg className="absolute bottom-0 right-0 w-[60%] h-full opacity-60 pointer-events-none text-[#fed7aa]" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,200 C150,150 250,50 400,0 L400,200 Z" />
          </svg>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {projects.map(p => (
            <div key={p.name} onClick={() => { 
              if(p.name === 'Smart Trash Bin') window.location.href = '/smart-trash-bin'; 
              if(p.name === 'Smart Gate') window.location.href = '/smart-gate'; 
            }}>
              <ProjectCard project={p} pkgObj={packages.find(x => x.id === p.pkg)} />
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderAchievements = () => (
    <>
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Achievements</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Celebrate progress and unlock new challenges.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px] shadow-sm">
          <strong className="text-[30px] block">420</strong>
          <small className="text-[var(--muted)]">Total XP</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px] shadow-sm">
          <strong className="text-[30px] block">3</strong>
          <small className="text-[var(--muted)]">Badges earned</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px] shadow-sm">
          <strong className="text-[30px] block">4</strong>
          <small className="text-[var(--muted)]">Day streak</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px] shadow-sm">
          <strong className="text-[30px] block">1</strong>
          <small className="text-[var(--muted)]">Projects completed</small>
        </div>
      </div>
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Badge cabinet</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {[
          ['First Prototype','🧪'],['Circuit Genius','⚡'],['Problem Solver','🧠'],
          ['Robot Builder','🤖'],['Drone Pilot','🚁'],['Young Entrepreneur','📈']
        ].map((b, i) => (
          <div key={b[0]} className="bg-white border border-[var(--border)] rounded-[18px] p-[18px] shadow-sm text-center" style={{ opacity: i < 3 ? 1 : 0.45 }}>
            <div className="text-[60px]">{b[1]}</div>
            <h3 className="font-bold my-1">{b[0]}</h3>
            <small className="text-[var(--muted)]">{i < 3 ? 'Unlocked' : 'Locked'}</small>
          </div>
        ))}
      </div>
    </>
  );

  const renderSchools = () => (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Schools & Instructors Dashboard</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Demo administration view for subscriptions, classes and project performance.</p>
        </div>
        <button className="hidden sm:block border-0 rounded-[14px] p-[13px_18px] font-bold cursor-pointer bg-gradient-to-br from-[#27c96b] to-[#15994b] text-white shadow-[0_10px_24px_rgba(34,180,94,.3)]">
          + Publish project
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {packages.map((p, i) => (
          <div key={p.id} className="bg-white border border-[var(--border)] rounded-[18px] p-4 text-white" style={{ background: i===0?'linear-gradient(145deg,#ff5c55,#dc2925)':i===1?'linear-gradient(145deg,#ffb12f,#f08b0c)':i===2?'linear-gradient(145deg,#3bce77,#15934c)':i===3?'linear-gradient(145deg,#36b5ff,#0877d1)':'linear-gradient(145deg,#a76bf2,#7233c5)' }}>
            <h3 className="m-0 text-lg">{p.short}</h3>
            <strong className="text-[28px]">{[23, 31, 28, 19, 12][i]} schools</strong>
            <p className="m-0 text-white/80">{[72, 68, 75, 78, 81][i]}% average completion</p>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between m-[26px_2px_14px]">
        <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Platform overview</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px]">
          <strong className="text-[30px] block">113</strong>
          <small className="text-[var(--muted)]">Enrolled schools</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px]">
          <strong className="text-[30px] block">11,159</strong>
          <small className="text-[var(--muted)]">Total learners</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px]">
          <strong className="text-[30px] block">247</strong>
          <small className="text-[var(--muted)]">Active projects</small>
        </div>
        <div className="bg-white border border-[var(--border)] rounded-[18px] p-[18px]">
          <strong className="text-[30px] block">5,862</strong>
          <small className="text-[var(--muted)]">Badges earned</small>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen grid md:grid-cols-[248px_1fr] grid-rows-[72px_1fr]">
      <Topbar activeView={activeView} setActiveView={setActiveView} setMobileOpen={setMobileOpen} />
      <Sidebar activeView={activeView} setActiveView={setActiveView} isMobileOpen={isMobileOpen} setMobileOpen={setMobileOpen} />
      <main className="p-3 md:p-5 min-w-0 md:col-start-2">
        <div className="animate-[fadeIn_0.35s_ease]">
          {activeView === 'home' && renderHome()}
          {activeView === 'packages' && renderPackages()}
          {activeView === 'projects' && renderProjects()}
          {activeView === 'achievements' && renderAchievements()}
          {activeView === 'schools' && renderSchools()}
        </div>
      </main>
    </div>
  );
}
