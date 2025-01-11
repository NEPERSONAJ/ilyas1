import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590644365607-1c5a0e37a3b7?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Строительство зданий из металлоконструкций
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            С 2014 года мы реализовали более 500 проектов различной сложности. 
            Специализируемся на зданиях площадью от 1000 м².
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 text-lg">
            Рассчитать стоимость
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};