import React from 'react';
import { services } from '../data';
import * as Icons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <div className="construction-border w-24 h-2 mx-auto mb-8" />
        
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          НАШИ УСЛУГИ
        </h2>
        <p className="text-gray-400 text-center mb-16 text-xl">
          Полный комплекс услуг по проектированию и строительству
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = Icons[service.icon as keyof typeof Icons];
            return (
              <div 
                key={service.id} 
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="construction-border rounded-xl">
                  <div className="p-8 glass-bg rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 
                                  group-hover:via-yellow-400/5 group-hover:to-yellow-400/10 transition-colors duration-500" />
                    
                    <div className="construction-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={48} className="text-yellow-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
                                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}