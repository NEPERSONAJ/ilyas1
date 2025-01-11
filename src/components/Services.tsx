import React from 'react';
import { services } from '../data';
import * as Icons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          НАШИ УСЛУГИ
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Полный комплекс услуг по проектированию и строительству
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons];
            return (
              <div key={service.id} className="p-8 glass-bg rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
                <Icon size={48} className="text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}