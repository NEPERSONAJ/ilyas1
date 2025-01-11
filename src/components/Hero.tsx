import React from 'react';
import { Hammer, Wrench, HardHat, Ruler, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-surface-dark/80 to-surface-dark" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-4 construction-border" />
      
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-12">
            <div className="flex-1 min-w-[320px]">
              <div className="flex gap-4 mb-8">
                {[Hammer, Wrench, HardHat, Ruler].map((Icon, index) => (
                  <div key={index} className="construction-icon animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon size={32} className="text-yellow-400" />
                  </div>
                ))}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Строительство</span>{' '}
                <span className="text-white">зданий из металлоконструкций</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                С 2014 года мы реализовали более{' '}
                <span className="text-yellow-400 font-bold">500 проектов</span>{' '}
                различной сложности. Специализируемся на зданиях площадью от{' '}
                <span className="text-yellow-400 font-bold">1000 м²</span>.
              </p>
              
              <div className="animated-border p-[3px] inline-block rounded-lg">
                <button className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    Рассчитать стоимость
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block flex-1 min-w-[320px]">
              <div className="construction-border rounded-lg p-[3px]">
                <div className="glass-bg rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                      <div className="text-gray-400">Проектов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">9</div>
                      <div className="text-gray-400">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                      <div className="text-gray-400">Гарантия</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                      <div className="text-gray-400">Поддержка</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};