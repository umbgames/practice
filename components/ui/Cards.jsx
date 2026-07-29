import React from 'react';

const pkgColors = {
  starter: 'bg-gradient-to-br from-[#ff5c55] to-[#dc2925]',
  tinker: 'bg-gradient-to-br from-[#ffb12f] to-[#f08b0c]',
  explorer: 'bg-gradient-to-br from-[#3bce77] to-[#15934c]',
  inventor: 'bg-gradient-to-br from-[#36b5ff] to-[#0877d1]',
  entrepreneur: 'bg-gradient-to-br from-[#a76bf2] to-[#7233c5]'
};

const pkgIcons = {
  starter: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[54px] h-[54px] drop-shadow-[0_8px_10px_rgba(0,0,0,.16)]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#facc15" stroke="#f59e0b"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#f8fafc" stroke="#cbd5e1"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#ef4444" stroke="#dc2626"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#ef4444" stroke="#dc2626"></path><circle cx="15" cy="9" r="2" fill="#38bdf8" stroke="#0ea5e9"></circle></svg>,
  tinker: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[54px] h-[54px] drop-shadow-[0_8px_10px_rgba(0,0,0,.16)]"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#f8fafc" stroke="#334155"></path><path d="M12 19.5l-2.5 .5l-.5 -2.5l-3 0l-1.5 2.5l-2 -1.5l1.5 -2.5l0 -3l-2.5 -.5l.5 -2.5l2.5 -.5l0 -3l-1.5 -2.5l2 -1.5l1.5 2.5l3 0l.5 -2.5l2.5 .5l.5 2.5l3 0l1.5 -2.5l2 1.5l-1.5 2.5l0 3l2.5 .5l-.5 2.5l-2.5 .5l0 3l1.5 2.5l-2 1.5l-1.5 -2.5l-3 0z" fill="#cbd5e1" stroke="#475569"></path><circle cx="12" cy="12" r="1.5" fill="#f59e0b" stroke="none"></circle></svg>,
  explorer: <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[54px] h-[54px] drop-shadow-[0_8px_10px_rgba(0,0,0,.16)]"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" fill="#bae6fd" stroke="#0284c7"></path><path d="M21 21l-6 -6" stroke="#334155" strokeWidth="4"></path><path d="M21 21l-6 -6" stroke="#94a3b8" strokeWidth="2"></path></svg>,
  inventor: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[54px] h-[54px] drop-shadow-[0_8px_10px_rgba(0,0,0,.16)]"><path d="M9 18h6" stroke="#fbbf24" strokeWidth="3"></path><path d="M10 22h4" stroke="#d97706" strokeWidth="2"></path><path d="M12 2v1" stroke="#fcd34d"></path><path d="M12 7v1" stroke="#fcd34d"></path><path d="M4 12h1" stroke="#fcd34d"></path><path d="M19 12h1" stroke="#fcd34d"></path><path d="M12 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" fill="#fef08a" stroke="#f59e0b"></path></svg>,
  entrepreneur: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[54px] h-[54px] drop-shadow-[0_8px_10px_rgba(0,0,0,.16)]"><path d="M3 3v18h18" stroke="#cbd5e1" strokeWidth="2"></path><path d="M18 9l-5 5l-3 -3l-5 5" stroke="#ef4444" strokeWidth="3"></path><rect x="6" y="16" width="2" height="5" fill="#3b82f6" stroke="none"></rect><rect x="10" y="13" width="2" height="8" fill="#f59e0b" stroke="none"></rect><rect x="14" y="9" width="2" height="12" fill="#10b981" stroke="none"></rect></svg>
};

export function PackageCard({ pkg, index }) {
  return (
    <article className={`text-white rounded-[22px] p-[18px] pb-10 min-h-[180px] relative overflow-hidden cursor-pointer shadow-[var(--shadow)] transition-transform hover:-translate-y-1 ${pkgColors[pkg.id] || pkgColors.starter}`}>
      <div className="relative z-10">
        <span className="bg-white/25 w-[32px] h-[32px] rounded-[10px] font-extrabold text-[14px] inline-flex items-center justify-center">
          {index + 1}
        </span>
        <h3 className="text-[20px] m-[12px_0_8px] font-extrabold">{pkg.short}</h3>
        <p className="text-[12.5px] opacity-90 leading-[1.5] max-w-[80%]">{pkg.desc}</p>
      </div>
      
      <div className="absolute right-3 bottom-5 z-20">
        {pkgIcons[pkg.id] || pkgIcons.starter}
      </div>
      
      {/* Wave bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-[65px] text-white opacity-100 translate-y-px z-10 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      
      {/* Dotted pattern overlay at the top */}
      <div className="absolute top-0 right-0 w-full h-[60px] opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}></div>
    </article>
  );
}

export function CategoryCard({ category }) {
  const [name, icon] = category;
  return (
    <button className="bg-white border border-[var(--border)] rounded-[18px] shadow-[0_8px_22px_rgba(7,26,52,.07)] p-4 text-center cursor-pointer transition-all hover:-translate-y-[3px] hover:border-[#a8dbbd]">
      <div className="text-[30px]">{icon}</div>
      <strong className="block mt-1">{name}</strong>
    </button>
  );
}

const getCircleColor = (name) => {
  if (name.includes('Trash')) return 'bg-[#e0f2fe]';
  if (name.includes('Gate') || name.includes('Lamp')) return 'bg-[#fef3c7]';
  if (name.includes('Irrigation')) return 'bg-[#dcfce7]';
  if (name.includes('RFID') || name.includes('Elevator')) return 'bg-[#f3e8ff]';
  if (name.includes('Obstacle')) return 'bg-[#f1f5f9]';
  if (name.includes('Delivery')) return 'bg-[#ffedd5]';
  return 'bg-[#e0f2fe]';
};

const getTagColor = (text) => {
  if (text === 'Beginner' || text === 'Explorer') return 'text-[#3b82f6] bg-[#eff6ff]';
  if (text === 'Tinker' || text === 'Starter') return 'text-[#f59e0b] bg-[#fffbeb]';
  if (text === 'Intermediate') return 'text-[#10b981] bg-[#ecfdf5]';
  if (text === 'Advanced' || text === 'Inventor' || text === 'Entrepreneur') return 'text-[#8b5cf6] bg-[#f5f3ff]';
  return 'text-[#64748b] bg-[#f1f5f9]';
};

export function ProjectCard({ project, pkgObj }) {
  const [realProgress, setRealProgress] = React.useState(project.progress || 0);

  React.useEffect(() => {
    try {
      if (project.name === 'Smart Trash Bin') {
        const p = JSON.parse(window.localStorage.getItem('maskido-smart-bin-progress-v1') || '[]');
        if (Array.isArray(p)) setRealProgress(Math.min(100, Math.max(project.progress, (p.length / 8) * 100)));
      } else if (project.name === 'Smart Gate') {
        const p = JSON.parse(window.localStorage.getItem('maskido-smart-gate-progress-v1') || '[]');
        if (Array.isArray(p)) setRealProgress(Math.min(100, Math.max(project.progress, (p.length / 8) * 100)));
      }
    } catch {}
  }, [project.name, project.progress]);

  return (
    <article className="flex flex-col overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-md bg-white border border-[#f1f5f9] rounded-[18px] shadow-[0_4px_12px_rgba(241,245,249,0.5)]">
      <div className="relative h-[160px] flex items-center justify-center pt-4">
        {project.live && (
          <span className="absolute top-4 right-4 bg-[#10b981] text-white rounded-full px-2.5 py-1 text-[9px] font-extrabold tracking-wide uppercase">
            LIVE LAB
          </span>
        )}
        <div className={`w-[96px] h-[96px] rounded-full flex items-center justify-center text-[56px] shadow-sm ${getCircleColor(project.name)}`}>
          {project.icon}
        </div>
      </div>
      <div className="p-5 pt-2 flex flex-col flex-1">
        <h3 className="m-[0_0_6px] font-bold text-[#0f172a] text-[15.5px]">{project.name}</h3>
        <p className="text-[12.5px] text-[#64748b] mb-4 line-clamp-2 leading-relaxed">{project.desc}</p>
        
        <div className="flex gap-2 flex-wrap mb-4">
          <span className={`text-[10px] rounded-full px-2.5 py-1 font-bold ${getTagColor(project.level)}`}>
            {project.level}
          </span>
          {pkgObj?.short && (
            <span className={`text-[10px] rounded-full px-2.5 py-1 font-bold ${getTagColor(pkgObj.short)}`}>
              {pkgObj.short}
            </span>
          )}
        </div>
        
        <div className="mt-auto pt-1 flex items-center gap-3">
          <div className="flex-1 h-[4px] bg-[#f1f5f9] rounded-full overflow-hidden">
            <span className="block h-full bg-[#22c55e] rounded-full transition-all duration-500 ease-out" style={{ width: `${realProgress}%` }}></span>
          </div>
          <span className="text-[11px] text-[#64748b] font-semibold w-[28px] text-right">
            {Math.round(realProgress)}%
          </span>
        </div>
      </div>
    </article>
  );
}
