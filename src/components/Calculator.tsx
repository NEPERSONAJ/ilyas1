import React, { useState } from 'react';
import { Calculator as CalcIcon, Building2, Ruler, MapPin, ArrowRight } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [formData, setFormData] = useState({
    buildingType: '',
    area: '',
    height: '',
    region: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="min-h-screen bg-surface pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="construction-border w-24 h-2 mx-auto mb-8" />
        
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          РАССЧИТАТЬ СТОИМОСТЬ
        </h1>
        <p className="text-gray-400 text-center mb-16 text-xl">
          Получите предварительный расчет стоимости вашего проекта
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="construction-border rounded-2xl">
            <div className="glass-bg rounded-2xl p-8">
              <div className="flex gap-4 mb-8">
                {[CalcIcon, Building2, Ruler, MapPin].map((Icon, index) => (
                  <div key={index} className="construction-icon animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon size={24} className="text-yellow-400" />
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Тип здания</label>
                    <select
                      className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                               focus:border-yellow-400 focus:shadow-neon transition-all"
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                    >
                      <option value="">Выберите тип</option>
                      <option value="production">Производственное здание</option>
                      <option value="warehouse">Склад</option>
                      <option value="agricultural">Сельскохозяйственное здание</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Площадь (м²)</label>
                    <input
                      type="number"
                      className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                               focus:border-yellow-400 focus:shadow-neon transition-all"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Введите площадь"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Высота (м)</label>
                    <input
                      type="number"
                      className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                               focus:border-yellow-400 focus:shadow-neon transition-all"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      placeholder="Введите высоту"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Регион строительства</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-xl bg-surface/50 border border-yellow-400/20 text-white 
                               focus:border-yellow-400 focus:shadow-neon transition-all"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      placeholder="Введите регион"
                    />
                  </div>
                </div>
                
                <div className="animated-border p-[3px] rounded-lg">
                  <button type="submit" className="btn-primary group w-full">
                    <span className="relative z-10 flex items-center justify-center">
                      Рассчитать стоимость
                      <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};