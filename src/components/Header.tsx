import React from 'react';
import { BookOpen, GraduationCap, Layout, Search, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-indigo-200 shadow-lg">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">Tin học 8</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Kết nối tri thức</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 h-16 flex items-center">Bài học</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors h-16 flex items-center">Thực hành</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors h-16 flex items-center">Ôn tập</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Search size={20} />
            </button>
            <div className="h-8 w-px bg-slate-100 hidden sm:block" />
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-colors">
              <Sparkles size={16} />
              <span>Học cùng AI</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
