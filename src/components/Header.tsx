import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 glass-bg border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              HAS ILYAS
            </div>
            <div className="text-slate-400 font-medium">СТРОЙ</div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Услуги</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Проекты</a>
            <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Калькулятор</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Контакты</a>
          </nav>
          
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};