'use client';
import React, { useState } from 'react';
import { labComponentLibrary, LAB_CATEGORIES } from '@/lib/labComponentLibrary';

export default function ComponentLibraryView() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredComponents = activeCategory === 'All' 
    ? labComponentLibrary 
    : labComponentLibrary.filter(c => c.category === activeCategory);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 m-[26px_2px_14px]">
        <div>
          <h2 className="m-0 text-[24px] font-extrabold text-[#10233f]">Component Library</h2>
          <p className="m-[4px_0_0] text-[var(--muted)]">Explore all available parts for your inventions.</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === 'All' ? 'bg-[#10b981] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          All
        </button>
        {LAB_CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-[#10b981] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {filteredComponents.map((comp) => {
          const SvgComponent = comp.component;
          return (
            <div 
              key={comp.id} 
              onClick={() => setSelectedComponent(comp)}
              className="bg-white border border-[#e2e8f0] rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#10b981] hover:shadow-md transition-all group"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
                {SvgComponent ? <SvgComponent /> : <div className="text-xs text-gray-400">N/A</div>}
              </div>
              <span className="text-xs font-semibold text-center text-gray-700">{comp.name}</span>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease]">
          <div className="bg-white rounded-[24px] shadow-2xl max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedComponent.name}</h3>
                <span className="text-sm font-medium text-[#10b981]">{selectedComponent.category}</span>
              </div>
              <button 
                onClick={() => setSelectedComponent(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-12 flex items-center justify-center bg-[#f8fafc] min-h-[300px]">
              <div className="scale-[2.5] transform origin-center">
                {selectedComponent.component ? <selectedComponent.component /> : null}
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
              Component ID: {selectedComponent.id}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
