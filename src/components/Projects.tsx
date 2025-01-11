import React, { useState, useRef } from 'react';
import { projects } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          НАШИ ПРОЕКТЫ
        </h2>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Реализованные объекты различного назначения
        </p>
        
        <div className="relative glass-bg rounded-2xl overflow-hidden border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Images */}
            <div>
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
              
              {/* Thumbnails below main image */}
              <div className="p-6 border-t border-slate-700">
                <div className="flex gap-3 overflow-x-auto">
                  {currentProject.images.map((image) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image)}
                      className={`relative flex-shrink-0 transition-transform hover:scale-105 ${
                        selectedImage.id === image.id ? 'ring-2 ring-blue-500' : ''
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
              <h3 className="text-3xl font-bold mb-6 text-white">{currentProject.title}</h3>
              
              {/* Tabs with navigation arrows */}
              <div className="relative">
                <button
                  onClick={() => scrollTabs('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-2 rounded-full z-10 md:hidden"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                
                <div 
                  ref={tabsRef}
                  className="flex gap-6 mb-8 border-b border-slate-700 overflow-x-auto scrollbar-hide scroll-smooth px-8 md:px-0"
                >
                  <button
                    onClick={() => setActiveTab('project')}
                    className={`pb-3 px-2 text-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === 'project'
                        ? 'border-b-2 border-blue-500 text-blue-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Проект
                  </button>
                  <button
                    onClick={() => setActiveTab('solution')}
                    className={`pb-3 px-2 text-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === 'solution'
                        ? 'border-b-2 border-blue-500 text-blue-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Решение
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`pb-3 px-2 text-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === 'features'
                        ? 'border-b-2 border-blue-500 text-blue-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Об объекте
                  </button>
                  {currentProject.details.video && (
                    <button
                      onClick={() => setActiveTab('video')}
                      className={`pb-3 px-2 text-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                        activeTab === 'video'
                          ? 'border-b-2 border-blue-500 text-blue-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Видео
                    </button>
                  )}
                </div>
                
                <button
                  onClick={() => scrollTabs('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 p-2 rounded-full z-10 md:hidden"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
              
              {/* Tab content */}
              <div className="space-y-6">
                {activeTab === 'project' && (
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <p className="text-slate-400 mb-1">Вес металла</p>
                      <p className="text-2xl font-semibold text-white">{currentProject.weight} т</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <p className="text-slate-400 mb-1">Площадь здания</p>
                      <p className="text-2xl font-semibold text-white">{currentProject.area} м²</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <p className="text-slate-400 mb-1">Год постройки</p>
                      <p className="text-2xl font-semibold text-white">{currentProject.year}</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <p className="text-slate-400 mb-1">Регион</p>
                      <p className="text-2xl font-semibold text-white">{currentProject.region}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'solution' && (
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {currentProject.details.solution}
                    </p>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <ul className="space-y-4">
                      {currentProject.details.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-slate-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'video' && currentProject.details.video && (
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src={currentProject.details.video}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
              
              <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-4 rounded-xl text-lg font-semibold transition-all hover:scale-[1.02]">
                Узнать стоимость объекта
              </button>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/4 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};