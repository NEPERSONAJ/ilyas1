import React, { useState } from 'react';

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
    <section id="calculator" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          РАССЧИТАТЬ СТОИМОСТЬ
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Получите предварительный расчет стоимости вашего проекта
        </p>
        
        <div className="max-w-2xl mx-auto glass-bg rounded-2xl border border-slate-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 mb-2">Тип здания</label>
                <select
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white focus:border-blue-500 transition-colors"
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
                <label className="block text-slate-300 mb-2">Площадь (м²)</label>
                <input
                  type="number"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white focus:border-blue-500 transition-colors"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="Введите площадь"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Высота (м)</label>
                <input
                  type="number"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white focus:border-blue-500 transition-colors"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  placeholder="Введите высоту"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Регион строительства</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-600 text-white focus:border-blue-500 transition-colors"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  placeholder="Введите регион"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-4 rounded-xl text-lg font-semibold transition-all hover:scale-[1.02]"
            >
              Рассчитать стоимость
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};