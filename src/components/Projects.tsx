import React, { useState, useRef } from 'react';
import { projects } from '../data';
import { ChevronLeft, ChevronRight, Construction, Building2, Ruler, HardHat } from 'lucide-react';

export const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState<'project' | 'solution' | 'features' | 'video'>('project');
  const [selectedImage, setSelectedImage] = useState(currentProject.images[0]);
  const tabsRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === currentProject.id);
    setCurrentProject(projects[(currentIndex + 1) % projects.length]);
    setSelectedImage(projects[(currentIndex + 1) % projects.length].images[0]);
  };

  const prevProject = () => {
    const currentIndex = projects.findIndex(p => p.id === currentProject.id);
    setCurrentProject(projects[(currentIndex - 1 + projects.length) % projects.length]);
    setSelectedImage(projects[(currentIndex - 1 + projects.length) % projects.length].images[0]);
  };

  return (
    <section id="projects" className="py-20 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <div className="construction-border w-24 h-2 mx-auto mb-8" />
        
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
          НАШИ ПРОЕКТЫ
        </h2>
        <p className="text-gray-400 text-center mb-16 text-xl">
          Реализованные объекты различного назначения
        </p>
        
        <div className="construction-border rounded-2xl">
          <div className="glass-bg rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Images */}
              <div>
                <div className="relative group">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6 border-t border-yellow-400/20">
                  <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                    {currentProject.images.map((image) => (
                      <button
                        key={image.id}
                        onClick={() => setSelectedImage(image)}
                        className={`relative flex-shrink-0 transition-all hover:scale-105 ${
                          selectedImage.id === image.id ? 'ring-2 ring-yellow-400 shadow-neon' : ''
                        }`}
                      >
                        <img
                          src={image.thumbnail}
                          alt={image.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right side - Details */}
              <div className="p-8">
                <div className="flex gap-4 mb-6">
                  {[Construction, Building2, Ruler, HardHat].map((Icon, index) => (
                    <div key={index} className="construction-icon animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      <Icon size={24} className="text-yellow-400" />
                    </div>
                  ))}
                </div>

                <h3 className="text-3xl font-bold mb-6 gradient-text">{currentProject.title}</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-bg p-4 rounded-xl border border-yellow-400/20">
                      <p className="text-gray-400 mb-1">Вес металла</p>
                      <p className="text-2xl font-semibold text-yellow-400">{currentProject.weight} т</p>
                    </div>
                    <div className="glass-bg p-4 rounded-xl border border-yellow-400/20">
                      <p className="text-gray-400 mb-1">Площадь</p>
                      <p className="text-2xl font-semibold text-yellow-400">{currentProject.area} м²</p>
                    </div>
                    <div className="glass-bg p-4 rounded-xl border border-yellow-400/20">
                      <p className="text-gray-400 mb-1">Год</p>
                      <p className="text-2xl font-semibold text-yellow-400">{currentProject.year}</p>
                    </div>
                    <div className="glass-bg p-4 rounded-xl border border-yellow-400/20">
                      <p className="text-gray-400 mb-1">Регион</p>
                      <p className="text-2xl font-semibold text-yellow-400">{currentProject.region}</p>
                    </div>
                  </div>
                  
                  <div className="glass-bg p-6 rounded-xl border border-yellow-400/20">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {currentProject.details.solution}
                    </p>
                  </div>
                </div>
                
                <div className="animated-border p-[3px] rounded-lg mt-8">
                  <button className="btn-primary group w-full">
                    <span className="relative z-10 flex items-center justify-center">
                      Узнать стоимость объекта
                      <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400/10 hover:bg-yellow-400/20 p-3 rounded-full 
                     backdrop-blur-sm transition-all border border-yellow-400/30 shadow-neon"
        >
          <ChevronLeft size={24} className="text-yellow-400" />
        </button>
        
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400/10 hover:bg-yellow-400/20 p-3 rounded-full 
                     backdrop-blur-sm transition-all border border-yellow-400/30 shadow-neon"
        >
          <ChevronRight size={24} className="text-yellow-400" />
        </button>
      </div>
    </section>
  );
};